# ACS

A minimal JavaScript prototype for the **Abyssal Cognitive Substrate (ACS)** research direction described in `README-2.md`.

## Current status

This repository now contains the smallest runnable artifact aligned with the initial ACS implementation plan:

- a deterministic 2D substrate simulator with local sparse updates
- localized perturbation injection
- scar formation from repeated coherent activity
- homeostatic damping and anti-rumination controls
- diagnostics for settling, coherence, locality, and scar retention
- a repeat-exposure experiment with automated tests

## Quick start

```bash
npm install
npm test
npm start
```

`npm start` runs the repeated-perturbation experiment and prints a JSON report.

## Project structure

```text
src/
  core/         # grid math, RNG, substrate dynamics
  input/        # perturbation encoding
  runtime/      # default config
  experiments/  # experiment definitions and CLI runner
  readout/      # report formatting helpers
  types/        # shared interfaces

docs/
  math.md
  experiments.md

tests/
  repeatedPerturbation.test.js
```

## Prototype success criteria

The current prototype is meant to test four minimal claims:

1. the substrate remains bounded while running continuously
2. repeated perturbations leave measurable scars
3. later exposures settle faster than earlier ones
4. activity remains mostly local instead of saturating the whole field

## Next recommended work

- add richer experiment sweeps over config space
- plot metrics over time instead of JSON-only output
- compare repeated vs novel perturbation families
- track attractor occupancy and fragmentation histories per tick
