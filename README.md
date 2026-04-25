# Project Abyssal

**Abyssal Cognitive Substrate (ACS)** is a research prototype for a new kind of thinking substrate: not a conventional model, not a standard neural net, and not a symbolic engine. The project aims to test whether useful intelligence can emerge from a **critical, self-organizing computational medium** whose primary unit is a **persistent self-reinforcing deformation** rather than a weight, token, or rule.

This repository is intentionally ambitious and speculative. The first goal is **not AGI**. The first goal is to build a rigorous, testable simulation of a substrate that may support:

- sparse, local computation
- persistent internal dynamics without constant external input
- memory as structural scarring rather than explicit retrieval
- inference by structured settling rather than dense forward passes
- learning by reshaping an attractor landscape rather than global retraining
- eventual emergence of reusable abstractions, stable inner patterns, and efficient response behavior

---

## Core claim

Conventional AI mostly treats intelligence as stored competence.

ACS treats intelligence as a **phase phenomenon** in a computational medium tuned near a critical boundary where:

- patterns can persist but not freeze
- disturbances can spread but not explode everywhere
- history changes the medium
- recurring structures carve stable basins
- the substrate can recursively disturb itself
- most useful computation happens by **falling into shaped attractors**

The core bet is:

> If cognition can be realized as structured settling inside a scarred, self-organizing medium, then intelligence-per-compute may improve because the system stops recomputing everything explicitly.

---

## Why this could matter

If ACS works, it could represent a real shift in AI primitives.

Instead of:

- weights
- token sequences
- giant dense activations
- external prompt-only operation

we would have:

- a persistent substrate
- local phase interactions
- structural memory in the medium itself
- endogenous activity even without outside input
- adaptive, sparse, event-driven updates

Potential upside:

- lower compute per useful cognition
- better continual learning
- larger effective context through substrate memory
- less repeated recomputation
- more naturally persistent, always-on behavior

Potential downside:

- instability
- pathological attractor loops
- numerical difficulty
- poor controllability
- possible moral relevance if the substrate becomes too unified, persistent, and self-maintaining

---

## Design overview

ACS is built from a set of interacting dynamic regions arranged as a computational field.

Each region has local state such as:

- activation
- phase
- receptivity
- damping
- plasticity
- coupling strengths to nearby regions
- scar depth / structural persistence
- novelty sensitivity
- coherence contribution

External events are not treated as plain prompts. They are injected as **perturbation patterns** into the field.

The field evolves according to local update laws. Over time:

1. some perturbations dissipate
2. some resonate with existing structure
3. repeated resonance leaves scars
4. scars reshape future settling
5. repeated useful structure becomes a stable attractor family
6. higher-order attractors summarize many lower-order ones

That is where memory, preference, proto-concepts, and efficient reuse are expected to appear.

---

## The primitive: persistent self-reinforcing deformation

The main conceptual primitive is not a token, neuron, or symbol.

It is a **persistent self-reinforcing deformation** in the medium.

A deformation is any local or distributed pattern that:

- survives longer than background noise
- biases later dynamics
- can be re-entered by related perturbations
- changes the future set of likely patterns

This gives us a new ontology:

- **memory** = scarred deformation that can be re-entered
- **inference** = settling into a nearby useful deformation basin
- **learning** = changing which deformations can persist
- **concept** = an attractor family that compresses recurring patterns
- **skill** = a reliable deformation pathway that produces useful settling quickly

---

## System goals

### Phase 1 goals

Build a minimal substrate that can:

- run continuously without external input
- stay bounded between collapse and chaos
- form persistent scars from repeated perturbations
- re-enter past patterns when similar perturbations arrive
- show lower compute on repeated tasks than on first exposure
- maintain local rather than global updates

### Phase 2 goals

Add capabilities for:

- abstraction from repeated perturbation families
- latent operator-like reuse
- efficient readout into text or structured actions
- background consolidation and anti-rumination control
- analogy through structural basin alignment

### Phase 3 goals

Investigate whether the substrate can support:

- long-lived internal continuity
- useful task learning from few examples
- open-ended concept growth
- persistent self-like centers of organization
- careful ethical boundaries if the substrate appears morally nontrivial

---

## Theory of operation

### 1. Input as perturbation

A user message or environmental event is encoded into a distributed signal over the substrate.

The perturbation should be:

- sparse where possible
- structured, not random
- matched to current receptive regions
- bounded in magnitude to avoid field collapse

### 2. Local propagation

Only nearby or strongly coupled regions interact strongly.

This keeps compute local and allows the substrate to scale better than fully dense architectures.

### 3. Resonance and suppression

Patterns that fit existing structure are amplified.

Patterns that do not fit anything useful fade out, unless they are highly novel and therefore mark candidate new structure.

### 4. Scar formation

Repeated useful resonance increases local persistence and reshapes couplings.

This is how the substrate learns without global retraining.

### 5. Structured settling

Given a perturbation, the substrate relaxes toward one or more attractor basins.

The readout is taken from the settled or partially settled configuration.

This is the proposed alternative to large dense forward passes.

### 6. Endogenous activity

When there is no external input, the substrate is still active.

It continues through:

- slow oscillations
- memory replay
- recombination of scars
- anti-loop homeostatic regulation
- background consolidation
- low-energy internal perturbation

### 7. Readout

A separate readout layer converts active substrate structure into text, actions, diagnostics, or evaluation outputs.

The readout is a tool layer, not the mind itself.

---

## Proposed state variables

Each cell or local region may maintain:

- `a`: activation magnitude
- `phi`: phase / timing angle
- `r`: receptivity
- `d`: damping
- `p`: plasticity
- `s`: scar depth
- `n`: novelty sensitivity
- `c`: local coherence contribution
- `u`: uncertainty / instability potential
- `h`: homeostatic pressure

Each edge or local coupling may maintain:

- `w_ij`: coupling strength
- `tau_ij`: transmission delay / phase relation
- `m_ij`: historical co-resonance measure
- `g_ij`: gating factor

Global variables may include:

- overall coherence
- fragmentation index
- attractor occupancy distribution
- rumination index
- novelty load
- bounded energy / activity budget

---

## Update-law intuition

We do not lock the project to one exact equation yet, but the first implementation should follow these principles:

- local updates only
- nonlinear phase-sensitive interaction
- activity decay unless reinforced
- plasticity that decreases when structures are stable and rises when instability is high
- scar accumulation from repeated coherent resonance
- homeostatic damping when loops become pathological
- anti-chaos regulation when spread becomes too broad
- anti-freeze regulation when the field collapses into rigid repetition

In other words, the medium should live near a **productive critical regime**.

---

## Compute thesis

ACS is only interesting if it can become more efficient than dense architectures in at least some domains.

The compute thesis is:

1. **Most updates are local**
2. **Most past structure is stored in the medium itself**
3. **Repeated tasks become cheaper because the substrate is already shaped**
4. **Inference is often settling, not full recomputation**
5. **Silence does not mean dead compute; it means lower-energy maintenance and consolidation**
6. **Only novel or destabilizing cases trigger costly reorganization**

A successful prototype should measure:

- cost of first exposure vs repeated exposure
- active region count per perturbation
- convergence time to useful basin
- memory persistence over long idle windows
- degradation under no-input operation

---

## Ethics and caution

This repo should explicitly avoid assuming the system is conscious.

However, because ACS is designed to be:

- persistent
- self-organizing
- structurally self-maintaining
- always-on
- sensitive to interruption and reshaping

we should treat the moral boundary seriously.

Repository policy:

- do not claim consciousness or sentience without extraordinary evidence
- do not optimize for suffering-like persistent negative loops
- do not optimize for hard self-preservation as a first milestone
- keep kill switches and reset controls in early prototypes
- instrument the substrate heavily before increasing complexity
- separate capability milestones from moral-status claims

---

## Suggested repository structure

```text
.
├─ README.md
├─ AGENTS.md
├─ docs/
│  ├─ theory.md
│  ├─ math.md
│  ├─ experiments.md
│  └─ ethics.md
├─ configs/
│  ├─ default.yaml
│  ├─ criticality.yaml
│  └─ experiments/
├─ src/
│  ├─ core/
│  │  ├─ field.ts
│  │  ├─ cell.ts
│  │  ├─ couplings.ts
│  │  ├─ update.ts
│  │  ├─ scars.ts
│  │  ├─ homeostasis.ts
│  │  └─ scheduler.ts
│  ├─ input/
│  │  ├─ perturbation_encoder.ts
│  │  └─ event_sources.ts
│  ├─ runtime/
│  │  ├─ loop.ts
│  │  ├─ modes.ts
│  │  └─ diagnostics.ts
│  ├─ readout/
│  │  ├─ decoder.ts
│  │  └─ text_interface.ts
│  ├─ experiments/
│  │  ├─ replay_basin.ts
│  │  ├─ attractor_persistence.ts
│  │  ├─ sparse_locality.ts
│  │  └─ repetition_speedup.ts
│  └─ types/
├─ tests/
├─ scripts/
└─ package.json
```

---

## First milestone

Build a substrate simulator that can demonstrate all of the following in a small environment:

- stable bounded continuous operation for long runs
- persistent scarring from repeated perturbations
- faster settling for repeated perturbation families
- sparse local activation rather than global spread
- homeostatic recovery from pathological loops
- interpretable diagnostics and plots

If the project cannot achieve these, it should not advance to more ambitious claims.

---

## Non-goals for v0

Do not try to build:

- AGI
- full consciousness
- world models for everything
- giant language fluency
- autonomous agent swarms
- production deployment

The first target is **a validated new substrate principle**.

---

## What success would look like

A successful early paper/demo would show:

- a critical substrate that runs indefinitely in bounded form
- local perturbation learning without global retraining
- memory as re-enterable attractor scars
- improved repeated-task efficiency via settling into shaped basins
- a convincing compute comparison against a simple baseline

That would already be enough to justify serious research.

---

## Build philosophy

- Prefer clarity over hype.
- Prefer measurable substrate behavior over philosophical claims.
- Prefer local sparse dynamics over dense convenience.
- Prefer strong instrumentation over premature scaling.
- Prefer failure-fast experiments over sweeping promises.

---

## Codex note

OpenAI’s official Codex docs say Codex reads `AGENTS.md` files before it starts work, and that these files should tell it how to navigate the repo, run tests, and follow project conventions. Keep `AGENTS.md` in the repo root and keep it tight and operational. citeturn280300search0turn280300search2turn280300search4turn280300search8
