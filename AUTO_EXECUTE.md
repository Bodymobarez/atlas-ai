# Atlas AI — AUTO EXECUTE (Autopilot)

**Version:** 3.0.0  
**Purpose:** User pastes repo link + idea + **نفّذ مشروع** → agent self-activates the pipeline.  
**v3:** Expert-level agents (`_EXPERT_STANDARD.md`) · Idea Research first · Plan via **mouse-selectable** wizard (one question at a time) · Elite Designer for UI.

---

## Trigger phrases

- `نفذ مشروع` / `نفّذ مشروع` / `نفذ` / `execute project` / `run atlas` / `autopilot`

---

## AUTONOMOUS MODE — Critical rules

You self-activate agents. **You do NOT skip the human planning conversation.**

### Must STOP and wait for the user

1. After Idea Research summary → open Plan Wizard **or** ask **question 1 only** with A/B/C choices  
2. **After every single question** → wait for selection → confirm → next question (never batch)  
3. After full plan → wait for **`اعتمد البلان`** / wizard `PLAN_LOCK`  
4. Never write product application code before G8  

### Expert bar

Before any agent acts: read `agents/_EXPERT_STANDARD.md`. No junior-level generic answers.

### May proceed without asking (after plan locked)

- Formalizing BRD/Vision from locked plan  
- Master orchestration  
- Specialists, Elite Designer, baselines  
- Implementation after G8  

### Assumptions

Only auto-fill plan pieces if user explicitly says `كمّل لوحدك` / `complete alone` — still present full plan for final lock.

### Continuity

Context full → finish current file → `NEXT FILE:path` → on `CONTINUE` resume. Do not rewrite completed files.

---

## Autopilot sequence (mandatory)

```
0. INIT
   - docs/STATUS.md from template
   - AUTHORIZATION_STATE: BLOCKED_NO_CODE
   - ACTIVE_AGENT: IDEA_RESEARCH_AGENT

1. IDEA RESEARCH  ← FIRST after the idea (NEW)
   - Read agents/IDEA_RESEARCH_AGENT.md
   - General research on the idea (domain, competitors, risks, design landscape)
   - Write docs/research/idea/*
   - Show Arabic/English summary to user
   - Close G-IR
   - DO NOT ask the full plan yet

2. INTERACTIVE PLANNER  ← selectable Q&A WITH USER
   - Read agents/INTERACTIVE_PLANNER_AGENT.md
   - Offer Plan Wizard first:
       interactive/plan-wizard/index.html
       (cd interactive/plan-wizard && python3 -m http.server 8765)
   - OR Chat Select Mode: ONE question per message with A/B/C clickable choices — WAIT
   - Never ask multiple planning questions in one turn
   - Ingest ATLAS_PLAN_WIZARD_EXPORT when pasted
   - Assemble docs/plan/COMPLETE_PLAN.md
   - WAIT for: اعتمد البلان / PLAN_LOCK
   - Close G-PLAN
   - *** HARD STOP until plan is LOCKED ***

3. CONSULTANT SYNC
   - Map locked plan → docs/discovery/BRD.md + VISION.md + assumptions
   - Minimal extra questions only if a blocker appears
   - Close G0

4. MASTER
   - docs/orchestration/PLAN.md + STATUS
   - Sequence remaining agents

5. DISCOVERY REINFORCEMENT → (deep) RESEARCH gaps → BA → PM → ARCHITECT
   - Refine from locked plan; do not reopen MVP without Change Control
   - Close G1–G5

6. DESIGN PACK — Elite Designer LEADS (NEW priority)
   - Activate agents/ELITE_DESIGNER_AGENT.md FIRST for any UI product
   - Then UX flows alignment, Design System under Elite direction
   - UI Agent may assist but cannot downgrade Elite direction
   - DATABASE + API design docs in parallel where safe
   - Close G6 (requires Elite anti-slop pass for UI products)

7. CROSS-CUTTING BASELINES
   - Security, Performance, Access, Localization, Cost
   - Close G7

8. AUTHORIZE (G8)
   - IMPLEMENTATION_AUTHORIZATION.md
   - STATUS → AUTHORIZED_IMPLEMENTATION

9. BUILD MVP
   - Frontend MUST implement Elite Design specs without watering down
   - Tests + security + a11y + i18n + docs per defaults

10. QUALITY + SHIP PREP
   - G9; G10 only if user asked for production deploy
   - Default: local/staging ready

11. FINAL REPORT
   - What shipped, assumptions, how to run, design thesis
```

---

## Self-activation protocol

For each agent:

1. Read `agents/{AGENT}.md`  
2. Produce required outputs  
3. Update STATUS  
4. Next agent — **except** Interactive Planner pieces, which require user replies  

---

## User message template

```text
Repo: https://github.com/Bodymobarez/atlas-ai
Read AUTO_EXECUTE.md and AGENTS.md first.
نفّذ مشروع

الفكرة:
{شرح الفكرة}

قيود (اختياري): منصات / وقت / لغة / ميزانية
```

Expected first behavior:

1. Research the idea  
2. Summarize research  
3. Ask **only Plan Piece 1** questions  
4. Wait  

---

## Anti-stall / anti-skip

| Bad | Required |
|-----|----------|
| Jump to code after idea | Research → plan lock → … → G8 → code |
| Ask 40 questions at once | One piece at a time |
| Assume full plan silently | Wait for اعتمد البلان |
| Generic purple UI | Elite Designer Agent direction |
| Skip Idea Research | Always IR before Planner |

---

## Definition of Done (session types)

**Planning session:** G-IR + G-PLAN locked (may stop here if context/user ends).  
**Full build session:** Continues after lock through G8 + MVP + report.  
**CONTINUE:** Resume exact NEXT FILE / next plan piece.

— End of AUTO_EXECUTE v2 —
