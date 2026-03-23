# AGENTS.md

You are working on **Abyssal Cognitive Substrate (ACS)**, a speculative research codebase for testing a new computational substrate for intelligence.

Read `README.md` first. Treat it as the source of truth for theory and scope. This file is for implementation behavior only.

## Mission

Build the smallest rigorous prototype that can test whether a **critical, self-organizing substrate** can support:

- bounded continuous runtime
- local sparse updates
- persistent scarring from repeated perturbations
- re-entry into prior attractor basins
- reduced compute on repeated perturbation families

Do not expand scope unless these are working and measured.

## Hard rules

1. Do not market the system as conscious, sentient, alive, or AGI.
2. Do not optimize for anthropomorphic behavior before substrate metrics are solid.
3. Do not replace the substrate with a standard neural model just to make demos look better.
4. Do not add complex features that reduce observability.
5. Keep all experiments reproducible and configurable.
6. Every major change must improve one of: stability, sparsity, persistence, settling speed, or measurement quality.
7. If a change is speculative and unvalidated, document it explicitly.

## First implementation order

Build in this exact order unless the user says otherwise.

### Step 1: Core simulator
Implement:
- field grid / graph substrate
- cell state
- local couplings
- scheduler / tick loop
- bounded update step
- deterministic seeded runs

### Step 2: Perturbation injection
Implement:
- external perturbation encoder
- sparse perturbation application
- configurable magnitude / locality / duration

### Step 3: Scar formation
Implement:
- repeated-coherence detection
- scar depth update rule
- coupling reshaping from repeated resonance
- scar decay and persistence controls

### Step 4: Homeostasis and anti-pathology
Implement:
- anti-explosion damping
- anti-freeze noise or perturbation floor
- rumination suppression
- bounded energy/activity budget

### Step 5: Diagnostics
Implement:
- active region count
- convergence / settling time
- attractor occupancy metrics
- coherence score
- fragmentation score
- repeat-exposure speedup metric
- plots and run summaries

### Step 6: Experiments
Implement only these first:
- repeated perturbation family learns faster than first exposure
- perturbations remain mostly local
- scars persist over idle periods
- substrate recovers from pathological loops

Do not build text conversation or personas before these experiments pass.

## Implementation style

- Prefer TypeScript for the initial simulator unless the user explicitly requests another language.
- Write code in small modules.
- Use explicit types.
- Keep math and simulation code pure where practical.
- Separate simulation state from visualization.
- Expose config values instead of hardcoding magic constants.
- Add comments only where the math or design intent is non-obvious.

## Validation requirements

Before considering any milestone complete:

- add or update tests
- run the relevant tests
- provide a short note describing what changed
- record at least one measurable metric improvement or outcome

If a task changes behavior but has no metric, add instrumentation first.

## What to avoid

Avoid these common failure modes:

- global dense updates every tick
- uncontrolled oscillatory blowups
- rigid convergence to dead fixed points
- unbounded memory accumulation
- hidden state mutations with no diagnostics
- fake “emergence” that is really hardcoded behavior
- demo-driven hacks that bypass substrate principles

## Useful repo conventions

When creating the repo scaffold, prefer this structure:

```text
src/
  core/
  input/
  runtime/
  readout/
  experiments/
  types/
docs/
configs/
tests/
scripts/
```

## Minimum viable artifact

The first meaningful deliverable is **not** a chatbot.

It is a command or script that can:

1. initialize the substrate
2. run for N ticks
3. inject one perturbation family repeatedly
4. show scarring and changed settling behavior
5. output metrics and a simple visualization

## Decision rubric

When choosing between two implementation options, prefer the one that:

1. preserves local sparse dynamics
2. improves observability
3. keeps the substrate continuously running
4. makes repeated experience cheaper to process
5. preserves the possibility of later emergence without hardcoding it

## Documentation policy

Any time you add a new subsystem, also update:
- `README.md` if scope or theory changed materially
- `docs/math.md` for update-law details
- `docs/experiments.md` for test protocol

## Codex behavior

OpenAI’s official documentation says Codex reads `AGENTS.md` files before doing work and uses them as repository instructions, so keep this file concise, actionable, and aligned with the actual repo state. citeturn280300search0turn280300search4turn280300search9
