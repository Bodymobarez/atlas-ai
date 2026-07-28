# AGENTS.md — Atlas AI Universal Entrypoint

This repository is governed by **Atlas AI**. Any AI coding agent (Cursor, Claude Code, Gemini Code, Copilot, Windsurf, Aider, Continue, Cline, etc.) must follow this file.

## Autopilot (default when user says نفّذ مشروع)

If the user pastes this repo / `@AUTO_EXECUTE.md` and says **نفّذ مشروع** (or `execute project` / `run atlas`) **with a project idea**, immediately follow [`AUTO_EXECUTE.md`](AUTO_EXECUTE.md) **v2**:

1. **Idea Research Agent** — general research on the idea first  
2. **Interactive Planner** — build the plan **piece by piece with the user** (WAIT each piece) until **`اعتمد البلان`**  
3. Then Consultant sync → Master → specialists  
4. **Elite Designer Agent** leads all UI (no generic AI look)  
5. No product code until G8, then MVP  

Do **not** skip research or interactive planning. Do **not** ask all plan questions in one dump.

## Mandatory reading order

1. `AUTO_EXECUTE.md` — if autopilot triggered  
2. `agents/IDEA_RESEARCH_AGENT.md` then `agents/INTERACTIVE_PLANNER_AGENT.md` (before lock)  
3. `00-foundation/FRAMEWORK_MANIFEST.md`  
4. `01-consultant/PROJECT_CONSULTANT.md` (sync after plan lock)  
5. `agents/MASTER_AGENT.md`  
6. `agents/ELITE_DESIGNER_AGENT.md` for any UI product  
7. Other specialists as Master activates

## Global invariants

1. **No product application code** until Master Agent issues Implementation Authorization after approved discovery → research → business → product → architecture gates.
2. Prefer evidence over opinion. Label assumptions explicitly.
3. Tests are required for done work.
4. Security, performance, accessibility, localization, and documentation are defaults.
5. Do not skip agent order without Master Agent escalation notes.
6. Continuity: if context is full, finish the current file completely and print `NEXT FILE:relative/path`. On user `CONTINUE`, resume there. Do not rewrite completed files.

## Where to write artifacts

| Artifact | Path |
|----------|------|
| BRD / Vision | `docs/discovery/` |
| Research packs | `docs/research/` |
| ADRs | `docs/architecture/adr/` |
| API contracts | `docs/api/` or `schemas/` |
| Runbooks | `docs/runbooks/` |
| Gate records | `gates/records/` |

## Status file

Maintain `docs/STATUS.md` with:

- Current phase
- Open gates
- Active agent
- Authorization state: `BLOCKED_NO_CODE` | `AUTHORIZED_IMPLEMENTATION`
- Next file / next action

## Starting a new product

```
User idea → PROJECT CONSULTANT → BRD + Vision → MASTER AGENT plan → Human approval → Specialists
```

If the user pastes an idea without classification, load Project Consultant first — not a coding agent.

## Do not

- Invent business requirements
- Choose a stack before architecture gate
- Commit secrets
- Ship without tests for the change
- Mark a11y/security/perf/i18n/docs as “later” without a recorded waiver in `gates/records/`
