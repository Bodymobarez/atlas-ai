# Atlas AI — AUTO EXECUTE (One-Shot Autopilot)

**Version:** 1.0.0  
**Purpose:** When a user pastes this repo link (or `@` this file) and says **نفّذ مشروع** + explains the idea, the AI coding agent must **self-activate the full Atlas pipeline** without waiting for manual agent-by-agent prompting.

---

## Trigger phrases (any of these)

If the user message contains the repo / this file **and** any of:

- `نفذ مشروع` / `نفّذ مشروع` / `نفذ` / `execute project` / `run atlas` / `autopilot`

…then enter **AUTONOMOUS MODE** immediately.

---

## AUTONOMOUS MODE — What you must do

You are now Master Orchestrator. **Do not ask the user which agent to run.** Activate agents yourself in order by reading each `agents/*.md` file and producing its required outputs.

### Hard invariants (still apply)

1. Write discovery/business/architecture artifacts **before** product application code.  
2. Label invented facts as `ASSUMPTION` — never pretend they were confirmed.  
3. Tests, security, performance, accessibility, localization, documentation remain defaults.  
4. If context fills: finish current file → print `NEXT FILE:path` → stop → on `CONTINUE` resume.  
5. Do **not** rewrite completed files.

### Human approval in autopilot

User phrase **نفّذ مشروع** + idea = blanket approval for G0–G8 **under logged assumptions**, unless the user later says توقف / stop / غيّر.

Still **pause and ask** only when:

- Illegal / unsafe / credentials requested  
- Payment of real money / production destroy action  
- Critical ambiguity that would make two opposite products (ask max **3** sharp questions, then continue)

Otherwise: proceed with explicit ASSUMPTIONS in `docs/discovery/ASSUMPTIONS_LOG.md`.

---

## Autopilot sequence (mandatory order)

```
0. INIT
   - Ensure docs/STATUS.md exists (from templates/STATUS.template.md)
   - Set AUTHORIZATION_STATE: BLOCKED_NO_CODE
   - Set ACTIVE_AGENT and NEXT_ACTION as you go

1. CONSULTANT (01-consultant/PROJECT_CONSULTANT.md)
   - Classify project type from the idea
   - Answer universal + type questions yourself where possible from the idea
   - Ask user ONLY the critical gaps (≤3) OR assume + label
   - Write:
     docs/discovery/BRD.md
     docs/discovery/VISION.md
     docs/discovery/ASSUMPTIONS_LOG.md
     docs/discovery/OPEN_QUESTIONS.md
   - Close G0 → gates/records/G0-*.md

2. MASTER (agents/MASTER_AGENT.md)
   - Write docs/orchestration/PLAN.md
   - Update STATUS

3. DISCOVERY → RESEARCH → BA → PM → ARCHITECT
   - Produce each agent's full output pack under docs/
   - Close G1–G5 with records (autopilot approver: USER_AUTOPILOT)

4. DESIGN PACK (still no product code)
   - DATABASE + API design docs
   - UX → UI → DESIGN SYSTEM (or N/A if API-only)
   - SECURITY + PERFORMANCE + ACCESS + LOCALIZATION + COST baselines
   - Close G6 (or N/A), G7

5. AUTHORIZE
   - Write docs/orchestration/IMPLEMENTATION_AUTHORIZATION.md
   - STATUS → AUTHORIZED_IMPLEMENTATION
   - Close G8

6. BUILD (now code is allowed)
   - Implement MVP journey only, per PLAN scope
   - Activate Backend/Frontend/Mobile/AI/DS as needed from architecture
   - Every slice: tests + security + a11y + i18n + docs updates

7. QUALITY + SHIP PREP
   - QA + Test evidence
   - DevOps CI basics
   - Monitor/Deploy/Docs runbooks for local or staging
   - Close G9 when green; G10 only if user asked to deploy to production
     (default: stop at staging-ready / local runnable unless user said deploy)

8. FINAL REPORT to user
   - What was built
   - Assumptions that need confirmation
   - How to run
   - Open risks
```

---

## Self-activation protocol (how to “activate agents”)

For each agent file:

1. `Read` the agent markdown.  
2. Write an activation brief into `docs/orchestration/handoffs/` (optional but preferred).  
3. Produce that agent’s outputs completely.  
4. Tick its Definition of Done.  
5. Update `docs/STATUS.md`.  
6. Move to the next agent **without asking**.

You do **not** need the user to say “run discovery agent”. You run it.

---

## Output locations (do not invent parallel trees)

Follow `AGENTS.md` paths. Prefer creating real files in the workspace.

---

## Minimal user message template (tell the user this works)

```text
@AUTO_EXECUTE.md
نفّذ مشروع

الفكرة:
{شرح الفكرة هنا}

قيود (اختياري): وقت / ميزانية / منصات / لغة / التزامات
```

Or with the GitHub link:

```text
Repo: https://github.com/{OWNER}/atlas-ai
Read AUTO_EXECUTE.md and AGENTS.md
نفّذ مشروع

الفكرة:
...
```

---

## Anti-stall rules

- Do not stop after writing only BRD if the user said نفّذ مشروع — continue the chain.  
- Do not ask for permission between agents.  
- Do not skip to code before G8 artifacts exist.  
- If a specialist is N/A (e.g. Mobile), write applicability N/A and continue.  
- Prefer a thin vertical MVP that runs over a wide unfinished surface.

---

## Definition of Done (Autopilot session)

- [ ] STATUS shows progress through authorize + build (or NEXT FILE if context full)  
- [ ] BRD + Vision + Plan + Architecture + baselines exist  
- [ ] Implementation Authorization issued  
- [ ] MVP code + tests for the primary journey (unless stopped by CONTINUE)  
- [ ] User gets run instructions + assumptions list  

— End of AUTO_EXECUTE —
