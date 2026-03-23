# ACS update-law notes

The prototype uses a bounded local update rule over a 2D grid.

For each cell, the next activation is computed from:

- sparse external input scaled by cell receptivity
- local coupling toward the mean of neighboring activations
- a scar-dependent coupling boost that makes repeated basins easier to re-enter
- light endogenous oscillation to prevent trivial fixed points
- damping and anti-rumination penalties for homeostasis
- small bounded noise to avoid total freeze

Scars increase only when local coherence exceeds a threshold and decay slowly over time. This makes persistence measurable without allowing unbounded memory accumulation.
