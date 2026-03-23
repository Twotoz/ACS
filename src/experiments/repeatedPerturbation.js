import { Substrate } from "../core/substrate.js";
import { defaultConfig } from "../runtime/defaultConfig.js";

function buildExposure(base, exposureIndex) {
  return { ...base, exposureIndex };
}

export function runRepeatedPerturbationExperiment() {
  const substrate = new Substrate(defaultConfig);
  const perturbation = {
    center: { x: 4, y: 5 },
    radius: 2,
    magnitude: 0.9,
    duration: 3,
    family: "alpha",
  };

  const exposures = [];
  for (let exposureIndex = 1; exposureIndex <= 4; exposureIndex += 1) {
    const result = substrate.runExposure(perturbation);
    exposures.push(buildExposure(result, exposureIndex));
    for (let idle = 0; idle < 8; idle += 1) {
      substrate.tick();
    }
  }

  const scarsAfterTraining = substrate.getCells().map((cell) => cell.scar);
  for (let idle = 0; idle < 20; idle += 1) {
    substrate.tick();
  }
  const scarsAfterIdle = substrate.getCells().map((cell) => cell.scar);

  const baselineSettling = exposures[0].settlingTicks;
  const finalSettling = exposures.at(-1).settlingTicks;
  const repeatExposureSpeedup = baselineSettling === 0 ? 0 : (baselineSettling - finalSettling) / baselineSettling;
  const localityScore = 1 - exposures.reduce((sum, exposure) => sum + exposure.activeRegionPeak, 0) / (exposures.length * defaultConfig.width * defaultConfig.height);
  const trainedScarMass = scarsAfterTraining.reduce((sum, value) => sum + value, 0);
  const idleScarRetention = trainedScarMass === 0 ? 0 : scarsAfterIdle.reduce((sum, value) => sum + value, 0) / trainedScarMass;
  const finalMetrics = substrate.measure();

  return {
    exposures,
    repeatExposureSpeedup,
    localityScore,
    idleScarRetention,
    recoveredFromPathology: finalMetrics.maxActivation < 0.5,
    finalMetrics,
    asciiMap: substrate.renderScarMap(),
  };
}
