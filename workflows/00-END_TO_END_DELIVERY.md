# Workflow — End-to-End Atlas AI Delivery

**Version:** 1.0.0  
**Owner:** Master Agent  
**Goal:** Take an idea to a monitored production release without premature coding.

---

## Stages

### Stage A — Consult

1. Open `01-consultant/PROJECT_CONSULTANT.md`  
2. Classify project type  
3. Run universal + typed questions in batches  
4. Produce BRD, Vision, Assumptions, Open Questions under `docs/discovery/`  
5. Close **G0** when user confirms proceed  

**Stop condition:** Do not open coding agents.

### Stage B — Orchestrate

1. Activate `agents/MASTER_AGENT.md`  
2. Write `docs/orchestration/PLAN.md` + `docs/STATUS.md`  
3. Authorization state must remain `BLOCKED_NO_CODE`  

### Stage C — Discover & Evidence

1. Discovery Agent → **G1**  
2. Research Agent → **G2**  

### Stage D — Define

1. Business Analyst → **G3** (human)  
2. Product Manager → **G4** (human)  
3. System Architect → **G5** (human)  

### Stage E — Design (still no product code)

1. Database + API design docs  
2. UX → UI → Design System → **G6** if UI-heavy  
3. Security, Performance, Access, Localization, Cost baselines → **G7**  

### Stage F — Authorize

1. Master writes `docs/orchestration/IMPLEMENTATION_AUTHORIZATION.md`  
2. STATUS → `AUTHORIZED_IMPLEMENTATION` (**G8**)  

### Stage G — Build

1. Backend / Frontend / Mobile / AI / DS implementation as scoped  
2. Test Agent automates with each slice  
3. Code Review Board on every change  
4. Continuous Security/Perf/A11y/i18n checks  

### Stage H — Release

1. QA Release Report → **G9**  
2. Deploy + Monitor + Docs → **G10** human go-live  

### Stage I — Operate

1. Monitor SLOs  
2. Cost reviews  
3. Backlog via Change Control  

---

## Parallelism Map (Allowed)

| Phase | Can run in parallel |
|-------|---------------------|
| Design post-G5 | Database logical model ∥ API conventions ∥ UX wireflows |
| Baselines G7 | Security ∥ Performance ∥ Access ∥ Localization ∥ Cost |
| Build post-G8 | Vertical slices with clear contract ownership |

Never parallelize BA with Architecture for v1.0 core path.

---

## Failure Handling

| Failure | Action |
|---------|--------|
| Critical unknown emerges | Master may revoke G8 |
| Security Critical open | Block G8/G9/G10 |
| Budget breach design | Cost + Architect revisit before auth |
| Context full mid-generation | Finish file → `NEXT FILE:path` → CONTINUE |

---

## Definition of Done (Workflow)

Shipped MVP journey in production with monitoring, docs, tests, and gate records G0–G10 filed (G6 if applicable).
