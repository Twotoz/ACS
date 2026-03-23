import { distance, fromIndex } from "../core/grid.js";

export function encodePerturbation(config, perturbation) {
  const entries = new Map();
  for (let index = 0; index < config.width * config.height; index += 1) {
    const position = fromIndex(index, config);
    const d = distance(position, perturbation.center);
    if (d <= perturbation.radius) {
      const falloff = 1 - d / Math.max(perturbation.radius, 1);
      entries.set(index, perturbation.magnitude * falloff);
    }
  }
  return entries;
}
