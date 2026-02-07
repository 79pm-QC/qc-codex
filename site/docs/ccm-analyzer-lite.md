---
title: Analyzer Lite
sidebar_position: 10
---

# Analyzer Lite (CCM)

Analyzer Lite is a plain-language diagnostic that converts a written problem into a Constraint Stack summary.

## What you write

Write 4–8 sentences describing:
1) what is happening,
2) what you want to change,
3) what seems to block change,
4) what you have already tried.

## What you get back

A structured output in four parts:

1) **Observed Outcome (S)** — what is actually happening.
2) **Constraints (C)** — likely constraints causing the outcome.
3) **Levers (L)** — smallest actions that can change the constraint profile.
4) **Next Experiment (E)** — one low-risk test to run within 24–72 hours.

Example: Analyzer Lite in Use
Input (what the user writes)
I feel stuck at work. I’m busy all day but not making progress on the things that matter. I’ve tried reorganising my task list and working longer hours, but I still end each week frustrated. I want to feel momentum again, but something keeps blocking it and I can’t see what.
Analyzer Output

1. Observed Outcome (S)
You are active but not progressing toward your priorities. Effort is high; impact is low.

2. Constraints (C)
Task environment rewards responsiveness over depth.
Time is fragmented by interruptions and context switching.
Success criteria are vague, so effort is misdirected.
Energy is spent managing workload rather than shaping it.

3. Levers (L)
Introduce one protected block of uninterrupted work per day.
Reduce visible commitments during that block.
Define a single weekly outcome that matters more than activity.

4. Next Experiment (E)
For the next three days, block 60 minutes each morning for one clearly defined task.
During that time, disable notifications and decline new requests.
At the end of each day, note whether progress—not busyness—occurred.

Why this helps
Analyzer Lite does not try to solve motivation or mindset directly.
It reframes the problem as a constraint pattern: high activity under misaligned limits.
By identifying structural blockers and proposing a small, testable change, it converts a vague feeling of “stuckness” into a concrete experiment. The goal is not certainty, but signal.
Analyzer Lite is designed for clarity, not completeness. Its purpose is to surface constraints quickly and suggest safe experiments, not to provide final answers.

The structure of the analysis is the same; only the system being examined changes.

Example 2: AI System Drift
Observed Outcome (S)
An AI system continues to meet short-term performance targets but shows increasing long-term degradation: rising error rates at the edges, brittle responses to novel inputs, and growing divergence between evaluation metrics and real-world behaviour.
Constraints (C)
Reward signals are narrow and over-optimised for proxy metrics.
Feedback loops favour recent data and suppress long-tail variation.
Monitoring focuses on outputs, not internal constraint balance.
Deployment pressure limits retraining, rollback, or exploratory testing.

Levers (L)
Introduce a secondary evaluation metric that penalises instability over time.
Expand monitoring to include variance and failure-mode clustering, not just averages.
Insert a low-frequency audit cycle that compares live behaviour to training assumptions.
Next Experiment (E)
For one evaluation window, add a drift-sensitivity metric to the monitoring pipeline and review whether early divergence signals appear before performance failure.
Why this helps
Analyzer Lite does not attempt to interpret intent or intelligence.
It treats system drift as a constraint problem: sustained optimisation under misaligned limits.
By identifying where feedback, incentives, and monitoring narrow the solution space, it enables small structural adjustments that restore stability before failure.
The goal is not prediction, but early signal.

Final check (important)
This example:
Reinforces that CCM is a diagnostic lens, not a theory of mind
Aligns cleanly with AI safety, MLOps, and systems engineering language
Does not require any additional philosophical framing
