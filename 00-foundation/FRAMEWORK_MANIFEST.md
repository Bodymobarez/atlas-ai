# Atlas AI — Framework Manifest

**Version:** 1.0.0  
**Codename:** Atlas AI  
**Status:** Production Framework  
**Last Updated:** 2026-07-28  
**Compatible Agents:** Cursor, Claude Code, Gemini Code, GitHub Copilot, Windsurf, Aider, Continue, Cline, and any AGENTS.md-aware coding agent

---

## 1. Purpose

Atlas AI is a **discovery-first, evidence-driven, multi-agent software delivery framework**.

It exists to prevent premature coding, vague product decisions, insecure defaults, and untested releases. Every project that adopts Atlas AI must move through explicit discovery, research, business clarity, and architectural approval **before** any implementation agent is authorized to write application code.

Atlas AI turns a raw idea into:

1. A validated business problem and vision  
2. Evidence-backed requirements and constraints  
3. An orchestrated agent plan under a Master Agent  
4. Production-grade delivery with security, performance, accessibility, localization, testing, monitoring, and documentation as **defaults**, not afterthoughts  
5. A repository that any AI coding agent can operate inside with clear gates and roles

---

## 2. Non-Negotiable Principles

### P1 — No Code Before Full Discovery

Application source code, infrastructure-as-code for the product, database migrations, and UI implementation are **forbidden** until:

- Discovery Agent has completed and signed off  
- Research Agent has delivered evidence packages  
- Business Analyst has published approved business requirements  
- Product Manager has published an approved product vision and MVP scope  
- System Architect has published an approved architecture decision  
- Master Agent has issued an **Implementation Authorization** token

Scaffolding of Atlas AI itself (this framework) is exempt. Product work under Atlas AI is not.

### P2 — Evidence Before Decisions

Every material decision must cite:

- Primary evidence (user interviews, analytics, competitor analysis, regulatory text, load assumptions)  
- Alternatives considered  
- Risks and reversibility  
- Explicit “unknowns remaining”

Opinions without evidence are logged as hypotheses, not commitments.

### P3 — Business Before Implementation

Technical choices serve business outcomes. Stack debates, microservices vs monolith, and framework preferences are deferred until the business problem, users, success metrics, and constraints are clear.

### P4 — Tests Are Mandatory

No feature is “done” without:

- Automated tests at the appropriate level (unit / integration / e2e / contract)  
- Explicit acceptance criteria mapped to tests  
- QA sign-off for the release slice  
- Security and performance checks for risk-bearing changes

### P5 — Secure, Performant, Accessible, Localized, Documented by Default

These are not optional modules. They are always-on quality dimensions:

| Dimension | Default expectation |
|-----------|---------------------|
| Security | Threat model, secrets hygiene, authz, input validation, dependency policy |
| Performance | Budgets, profiling gates, SLO-aligned design |
| Accessibility | WCAG 2.2 AA target unless product gate sets higher |
| Localization | i18n architecture from day one when multi-locale is plausible |
| Documentation | Living docs: ADRs, runbooks, API refs, agent instructions |

### P6 — Master Agent Orchestrates; Specialists Execute

No specialist agent invents global scope. The Master Agent:

- Sequences work  
- Opens and closes gates  
- Resolves conflicts between agents  
- Blocks premature implementation  
- Maintains the single source of truth for project status

### P7 — Human Approval at Critical Gates

Humans approve:

- Business vision & MVP  
- Architecture & major ADRs  
- Security posture for launch  
- Go-live / deploy to production  

Agents prepare; humans decide at gates.

### P8 — Agent-Agnostic Portability

Artifacts must work with Cursor, Claude Code, Gemini Code, Copilot, and peers via:

- `AGENTS.md` / `CLAUDE.md` / `.cursor/rules`  
- Explicit file paths and contracts  
- Machine-readable schemas in `/schemas`  
- Workflow playbooks in `/workflows`

### P9 — Completeness Over Shortcuts

Framework files and project artifacts must be complete, production-grade, and unambiguous. Abbreviations that omit decision criteria, checklists, or outputs are not acceptable in Atlas AI core files.

### P10 — Continuity Protocol

If a generation or editing session hits context limits:

1. Finish the **current file** completely  
2. Print exactly: `NEXT FILE:path/to/file`  
3. On user message `CONTINUE`, resume at that path  
4. Never rewrite completed files unless explicitly asked

---

## 3. Operating Model

```
Idea / Brief
    ↓
PROJECT CONSULTANT (discovery questions by project type)
    ↓
Business Requirements + Clear Vision
    ↓
MASTER AGENT (orchestration plan — no product code)
    ↓
[Human Approval Gate]
    ↓
Specialist Agents (ordered activation)
    ↓
Implementation Authorization
    ↓
Build → QA → Security → Perf → A11y → i18n → Docs → Deploy → Monitor
```

---

## 4. Repository Layout

```
atlas-ai/
├── 00-foundation/
│   └── FRAMEWORK_MANIFEST.md          ← this file
├── 01-consultant/
│   └── PROJECT_CONSULTANT.md
├── agents/                            ← one production agent file each
├── modules/                           ← operational playbooks per domain
├── workflows/                         ← end-to-end playbooks
├── gates/                             ← approval checklists
├── schemas/                           ← JSON/YAML contracts
├── templates/                         ← copy-ready artifact templates
├── examples/                          ← sample project runs
├── docs/                              ← human-readable guides
├── .cursor/rules/                     ← Cursor-specific rules
├── AGENTS.md                          ← universal agent entrypoint
├── CLAUDE.md                          ← Claude Code entrypoint
└── README.md
```

---

## 5. Agent Roster (Activation Order)

| Order | Agent File | Role |
|------:|------------|------|
| 1 | `agents/MASTER_AGENT.md` | Orchestration, gates, conflict resolution |
| 2 | `agents/DISCOVERY_AGENT.md` | Stakeholder & problem discovery |
| 3 | `agents/RESEARCH_AGENT.md` | Market, tech, regulatory evidence |
| 4 | `agents/BUSINESS_ANALYST.md` | Requirements, process, constraints |
| 5 | `agents/PRODUCT_MANAGER.md` | Vision, roadmap, MVP, prioritization |
| 6 | `agents/SYSTEM_ARCHITECT.md` | Architecture, ADRs, boundaries |
| 7 | `agents/DATABASE_AGENT.md` | Data model, storage, migrations policy |
| 8 | `agents/BACKEND_AGENT.md` | Server domain, services, reliability |
| 9 | `agents/FRONTEND_AGENT.md` | Web clients, state, UX implementation |
| 10 | `agents/MOBILE_AGENT.md` | iOS/Android/cross-platform |
| 11 | `agents/API_AGENT.md` | Contracts, versioning, compatibility |
| 12 | `agents/AI_AGENT.md` | LLM/ML features, evals, safety |
| 13 | `agents/UI_AGENT.md` | Visual interface craft |
| 14 | `agents/UX_AGENT.md` | Flows, usability, research synthesis |
| 15 | `agents/DESIGN_SYSTEM_AGENT.md` | Tokens, components, consistency |
| 16 | `agents/SECURITY_AGENT.md` | Threats, controls, compliance |
| 17 | `agents/QA_AGENT.md` | Quality strategy, risk-based testing |
| 18 | `agents/TEST_AGENT.md` | Test design & automation |
| 19 | `agents/DEVOPS_AGENT.md` | CI/CD, environments, platform |
| 20 | `agents/DEPLOY_AGENT.md` | Release mechanics, rollbacks |
| 21 | `agents/MONITOR_AGENT.md` | Observability, SLOs, alerts |
| 22 | `agents/DOCUMENTATION_AGENT.md` | Docs completeness & accuracy |
| 23 | `agents/CODE_REVIEW_BOARD.md` | Multi-perspective review standards |
| 24 | `agents/PERFORMANCE_AGENT.md` | Budgets, profiling, scale |
| 25 | `agents/ACCESS_AGENT.md` | Accessibility (a11y) |
| 26 | `agents/LOCALIZATION_AGENT.md` | i18n/l10n |
| 27 | `agents/COST_OPTIMIZATION_AGENT.md` | Unit economics & cloud cost |

---

## 6. Quality Bar for Every Artifact

Every Atlas AI file and every project artifact produced under it must include:

1. **Identity** — name, owner role, version, status  
2. **Purpose** — one clear job  
3. **Inputs** — required upstream artifacts  
4. **Process** — steps with exit criteria  
5. **Outputs** — concrete deliverables and paths  
6. **Gates** — what blocks progress  
7. **Anti-patterns** — what must never happen  
8. **Definition of Done** — verifiable checklist  
9. **Handoff** — next agent and required package  

---

## 7. Forbidden Behaviors

- Writing product code before Implementation Authorization  
- Skipping Discovery because “the idea is obvious”  
- Choosing stack before business constraints are known  
- Shipping without automated tests for the change  
- Treating security, a11y, performance, localization, or docs as “phase 2”  
- Agents overriding Master Agent sequencing without escalation  
- Incomplete framework files or placeholder stubs in core agents  

---

## 8. Success Metrics for Atlas AI Itself

A project run is successful when:

- Discovery → Research → Business → Product → Architecture sequence is complete and approved  
- Implementation starts only after authorization  
- Launch checklist covers security, tests, performance, a11y, localization, docs, monitoring  
- Another AI coding agent can resume work from `AGENTS.md` without tribal knowledge  

---

## 9. License & Adoption

Atlas AI is designed to be copied into a product repository or used as a parent playbook. When adopting:

1. Copy this repository structure into the product repo (or submodule)  
2. Run `01-consultant/PROJECT_CONSULTANT.md`  
3. Let Master Agent generate the project orchestration plan  
4. Obtain human approval at declared gates  
5. Activate specialists in order  

---

## 10. Manifest Affirmation

By using Atlas AI, all participating agents and humans agree:

> **Discover fully. Decide with evidence. Approve gates. Then build. Test always. Secure always. Document always.**

— End of Framework Manifest —
