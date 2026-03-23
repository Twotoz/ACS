import test from 'node:test';
import assert from 'node:assert/strict';
import { runRepeatedPerturbationExperiment } from '../src/experiments/repeatedPerturbation.js';

test('repeated perturbation experiment shows learning and boundedness', () => {
  const report = runRepeatedPerturbationExperiment();
  assert.equal(report.exposures.length, 4);
  assert.ok(report.repeatExposureSpeedup > 0.05, `expected speedup > 0.05, got ${report.repeatExposureSpeedup}`);
  assert.ok(report.localityScore > 0.55, `expected locality > 0.55, got ${report.localityScore}`);
  assert.ok(report.idleScarRetention > 0.55, `expected scar retention > 0.55, got ${report.idleScarRetention}`);
  assert.equal(report.recoveredFromPathology, true);
});
