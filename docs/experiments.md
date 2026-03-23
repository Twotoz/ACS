# ACS experiment protocol

## Repeated perturbation family

The current experiment initializes a deterministic 10x10 substrate, injects the same localized perturbation family four times, and measures:

- settling ticks after each exposure
- peak coherence during exposure
- scar footprint after settling
- active region peak as a locality proxy
- aggregate repeat-exposure speedup
- scar retention after an idle period
- whether the substrate returns to a bounded regime after training

Expected success criteria for the minimal prototype:

- later exposures settle faster than the first
- peak activity remains meaningfully below whole-field activation
- scars remain after idle ticks
- max activation returns below the pathology threshold
