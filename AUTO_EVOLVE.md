# Atlas AI — AUTO EVOLVE (تطوير / تحسين مشروع قائم)

**Version:** 1.0.0  
**Mode:** **DEVELOP / EVOLVE** — NOT greenfield build  
**Purpose:** User has an **existing project** and wants enhancement, refactor, feature add, fix, redesign, or scale — with Professor Mode + selectable planning.

**Pair file for greenfield build:** `AUTO_EXECUTE.md`  
**If the user says تطوير / حسّن / عدّل / طور / evolve / enhance → use THIS file, not AUTO_EXECUTE.**

---

## Trigger phrases

- `طور المشروع` / `تطوير` / `حسّن` / `عدّل` / `أضف ميزة`  
- `evolve` / `enhance` / `improve existing` / `iterate`  
- `نفّذ تطوير` / `run evolve`

---

## Core difference vs Build

| Build (`AUTO_EXECUTE`) | Evolve (`AUTO_EVOLVE`) |
|------------------------|-------------------------|
| Idea → new product | Existing codebase → change safely |
| Full MVP construction | Smallest correct change / vertical slice |
| May scaffold new app | Prefer extend; **no rewrite** unless locked |
| Plan = product plan | Plan = **change plan** + impact |

---

## Professor bar

Read `agents/_EXPERT_STANDARD.md` first. Same Professor Mode rules as build.

---

## Hard rules

1. **Inspect before changing** — map the real codebase; never invent architecture that isn’t there.  
2. **No drive-by rewrite** — strangler/incremental unless user locks “إعادة بناء”.  
3. **One selectable question at a time** during change planning.  
4. Prefer wizard **v2**: `interactive/evolve-wizard/`  
   (`cd interactive/evolve-wizard && python3 -m http.server 8766` → http://localhost:8766)  
   Features: change-request screen, multi-select, recommended badges, skip logic, CHANGE_PLAN.md export.  
   Fallback: chat A/B/C one question at a time.  
5. Wait for **`اعتمد خطة التطوير`** / `EVOLVE_LOCK` before implementation.  
   Ingest paste starting with `ATLAS_EVOLVE_WIZARD_EXPORT`.  
6. Tests + security + a11y + i18n + docs defaults for touched surfaces.  
7. Continuity: finish file → `NEXT FILE:path` → `CONTINUE`.  

---

## Autopilot sequence (Evolve)

```
0. INIT
   - STATUS: EVOLVE_MODE
   - AUTHORIZATION_STATE: BLOCKED_NO_CODE (until change plan locked + impact OK)
   - Read Professor Standard

1. CODEBASE AUDIT (FIRST)
   - agents/CODEBASE_AUDIT_AGENT.md
   - Map: stack, structure, entrypoints, data, auth, tests, debts, risks
   - Write docs/evolve/CODEBASE_AUDIT.md
   - Short summary to user
   - DO NOT implement yet

2. CHANGE RESEARCH
   - Understand the requested change against the audit
   - Competitors/patterns for this enhancement if relevant
   - Write docs/evolve/CHANGE_RESEARCH.md
   - Summarize options A/B/C for approach

3. EVOLVE PLANNER (selectable Q&A WITH USER)
   - One question at a time (A/B/C)
   - Prefer interactive/evolve-wizard/
   - Cover: goal, scope in/out, risk tolerance, UX impact, data migration, rollback
   - Assemble docs/evolve/CHANGE_PLAN.md
   - WAIT for: اعتمد خطة التطوير

4. IMPACT PACK (after lock — still careful)
   - Architect: impact on boundaries/ADRs
   - Security / Perf / A11y / i18n / Cost as relevant to the change
   - Test/QA: regression plan
   - Elite Designer ONLY if UI is in scope
   - Write docs/evolve/IMPACT.md

5. AUTHORIZE SLICE
   - docs/evolve/IMPLEMENTATION_AUTHORIZATION.md
   - Scope = locked change only
   - STATUS → AUTHORIZED_IMPLEMENTATION (evolve slice)

6. IMPLEMENT
   - Smallest correct diff
   - Match existing patterns/style
   - Tests for the change
   - No unrelated refactors

7. VERIFY
   - Run relevant tests/lints if available
   - Code Review Board checklist for touched areas
   - Update docs if behavior changed

8. REPORT
   - What changed, why, how to verify, residual risks, next recommended slice
```

---

## Self-activation

Do not wait for the user to name agents. Activate audit → research → planner → … yourself.

During planner: **STOP after each question.**

---

## Anti-patterns

- Treating evolve as greenfield rebuild  
- Coding before audit  
- Huge PR with “while we’re here”  
- Ignoring existing tests/patterns  
- Skipping selectable planning when scope is ambiguous  

---

## User template

See `OPEN_IN_CHAT_EVOLVE.md`.

— End of AUTO_EVOLVE —
