import { getNeighborIndices } from "./grid.js";
import { createRng } from "./random.js";
import { encodePerturbation } from "../input/perturbation.js";

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

export class Substrate {
  constructor(config) {
    this.config = config;
    this.rng = createRng(config.seed);
    this.tickCount = 0;
    this.cells = Array.from({ length: config.width * config.height }, () => ({
      activation: 0,
      phase: this.rng() * Math.PI * 2,
      receptivity: 0.85 + this.rng() * 0.3,
      damping: config.dampingBase,
      plasticity: 0.8 + this.rng() * 0.2,
      scar: 0,
      lastInput: 0,
    }));
  }

  getCells() {
    return this.cells;
  }

  inject(perturbation) {
    const encoded = encodePerturbation(this.config, perturbation);
    for (const [index, input] of encoded.entries()) {
      this.cells[index].lastInput += input;
    }
  }

  tick() {
    const nextCells = this.cells.map((cell) => ({ ...cell }));
    const activations = this.cells.map((cell) => cell.activation);

    for (let index = 0; index < this.cells.length; index += 1) {
      const cell = this.cells[index];
      const neighbors = getNeighborIndices(index, this.config);
      const localMean = neighbors.reduce((sum, n) => sum + activations[n], 0) / Math.max(neighbors.length, 1);
      const coherence = neighbors.reduce((sum, n) => sum + Math.max(0, 1 - Math.abs(cell.activation - activations[n])), 0) / Math.max(neighbors.length, 1);
      const scarLift = cell.scar * this.config.scarCouplingBoost;
      const couplingTerm = (this.config.coupling + scarLift) * (localMean - cell.activation);
      const oscillation = Math.sin(cell.phase + localMean) * 0.04;
      const homeostaticNoise = (this.rng() - 0.5) * this.config.antiFreezeNoise;
      const ruminationPenalty = Math.abs(cell.activation) > this.config.antiRuminationThreshold
        ? this.config.antiRuminationPenalty * Math.sign(cell.activation)
        : 0;
      const rawDelta = cell.lastInput * cell.receptivity + couplingTerm + oscillation + homeostaticNoise - cell.damping * cell.activation - ruminationPenalty;
      const delta = clamp(rawDelta, -this.config.maxActivationDelta, this.config.maxActivationDelta);
      const nextActivation = clamp(cell.activation + delta, -1.5, 1.5);
      const scarGain = coherence >= this.config.repeatedCoherenceThreshold
        ? this.config.scarLearningRate * coherence * Math.abs(cell.lastInput + localMean) * cell.plasticity
        : 0;

      nextCells[index].activation = nextActivation;
      nextCells[index].phase = (cell.phase + 0.08 + nextActivation * 0.03) % (Math.PI * 2);
      nextCells[index].scar = clamp(cell.scar * (1 - this.config.scarDecayRate) + scarGain, 0, 2);
      nextCells[index].damping = Math.abs(nextActivation) > this.config.homeostaticRange.high
        ? clamp(cell.damping + 0.02, this.config.dampingBase, 0.7)
        : Math.abs(nextActivation) < this.config.homeostaticRange.low
          ? clamp(cell.damping - 0.01, this.config.dampingBase, 0.7)
          : cell.damping;
      nextCells[index].lastInput = cell.lastInput * this.config.decay;
    }

    this.tickCount += 1;
    this.cells.splice(0, this.cells.length, ...nextCells);
    return this.measure();
  }

  measure() {
    const activations = this.cells.map((cell) => cell.activation);
    const activeRegionCount = activations.filter((value) => Math.abs(value) > 0.15).length;
    const meanActivation = activations.reduce((sum, value) => sum + value, 0) / activations.length;
    const maxActivation = activations.reduce((max, value) => Math.max(max, Math.abs(value)), 0);
    let coherenceAccumulator = 0;
    let fragmentationAccumulator = 0;

    for (let index = 0; index < this.cells.length; index += 1) {
      const neighbors = getNeighborIndices(index, this.config);
      const diffs = neighbors.map((neighbor) => Math.abs(this.cells[index].activation - this.cells[neighbor].activation));
      const meanDiff = diffs.reduce((sum, value) => sum + value, 0) / Math.max(diffs.length, 1);
      coherenceAccumulator += 1 / (1 + meanDiff);
      fragmentationAccumulator += meanDiff;
    }

    return {
      tick: this.tickCount,
      activeRegionCount,
      meanActivation,
      coherence: coherenceAccumulator / this.cells.length,
      fragmentation: fragmentationAccumulator / this.cells.length,
      maxActivation,
    };
  }

  runExposure(perturbation, settleThreshold = 0.18, maxTicks = 40) {
    let settlingTicks = maxTicks;
    let peakCoherence = 0;
    let activeRegionPeak = 0;

    for (let pulse = 0; pulse < perturbation.duration; pulse += 1) {
      this.inject(perturbation);
      const metrics = this.tick();
      peakCoherence = Math.max(peakCoherence, metrics.coherence);
      activeRegionPeak = Math.max(activeRegionPeak, metrics.activeRegionCount);
    }

    for (let step = 0; step < maxTicks; step += 1) {
      const metrics = this.tick();
      peakCoherence = Math.max(peakCoherence, metrics.coherence);
      activeRegionPeak = Math.max(activeRegionPeak, metrics.activeRegionCount);
      if (metrics.maxActivation < settleThreshold) {
        settlingTicks = step + 1;
        break;
      }
    }

    const scarFootprint = this.cells.filter((cell) => cell.scar > 0.1).length / this.cells.length;
    return {
      family: perturbation.family,
      exposureIndex: 0,
      settlingTicks,
      peakCoherence,
      scarFootprint,
      activeRegionPeak,
    };
  }

  renderScarMap() {
    const rows = [];
    for (let y = 0; y < this.config.height; y += 1) {
      let row = "";
      for (let x = 0; x < this.config.width; x += 1) {
        const scar = this.cells[y * this.config.width + x].scar;
        row += scar > 1.2 ? "#" : scar > 0.6 ? "+" : scar > 0.2 ? "." : " ";
      }
      rows.push(row);
    }
    return rows.join("\n");
  }
}
