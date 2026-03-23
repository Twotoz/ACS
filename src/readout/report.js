export function formatReport(report) {
  return [
    `repeatExposureSpeedup=${report.repeatExposureSpeedup.toFixed(3)}`,
    `localityScore=${report.localityScore.toFixed(3)}`,
    `idleScarRetention=${report.idleScarRetention.toFixed(3)}`,
    `recoveredFromPathology=${report.recoveredFromPathology}`,
    "scarMap:",
    report.asciiMap,
  ].join("\n");
}
