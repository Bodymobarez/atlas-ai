# Atlas AI

**Discovery-first, evidence-driven, multi-agent software delivery framework** for Cursor, Claude Code, Gemini Code, GitHub Copilot, and any AGENTS.md-aware coding agent.

## What this is

Atlas AI prevents premature coding. Every product run must complete discovery, research, business requirements, product vision, and architecture approval **before** implementation agents write application code.

Security, performance, accessibility, localization, testing, monitoring, and documentation are **defaults**.

## One-shot autopilot (recommended)

1. Open **any new AI chat** (Cursor / Claude Code / Gemini / Copilot Chat…)
2. Paste the magic block from [`OPEN_IN_CHAT.md`](OPEN_IN_CHAT.md) (repo link + `نفّذ مشروع` + your idea)
3. The agent must read [`AUTO_EXECUTE.md`](AUTO_EXECUTE.md) and **self-activate** Consultant → Master → all specialists → MVP build

**Direct files:**

| File | Role |
|------|------|
| [`AUTO_EXECUTE.md`](AUTO_EXECUTE.md) | Autopilot brain — activates everything |
| [`OPEN_IN_CHAT.md`](OPEN_IN_CHAT.md) | Copy-paste prompt for new chats |
| [`AGENTS.md`](AGENTS.md) | Universal agent entrypoint |

## Manual quick start

1. Read [`00-foundation/FRAMEWORK_MANIFEST.md`](00-foundation/FRAMEWORK_MANIFEST.md)
2. Run [`01-consultant/PROJECT_CONSULTANT.md`](01-consultant/PROJECT_CONSULTANT.md) with your idea
3. After BRD + Vision are ready, activate [`agents/MASTER_AGENT.md`](agents/MASTER_AGENT.md)
4. Obtain human approval at gates in [`gates/`](gates/)
5. Only then authorize implementation specialists

## Universal entrypoints

| File | Audience |
|------|----------|
| [`AGENTS.md`](AGENTS.md) | All AI coding agents |
| [`CLAUDE.md`](CLAUDE.md) | Claude Code |
| [`.cursor/rules/atlas-ai.mdc`](.cursor/rules/atlas-ai.mdc) | Cursor |

## Layout

```
00-foundation/     Framework manifesto & principles
01-consultant/     Project Consultant interview system
agents/            Production specialist agent briefs (ordered)
modules/           Domain playbooks matching each agent
workflows/         End-to-end delivery playbooks
gates/             Human/agent approval checklists
schemas/           Machine-readable contracts
templates/         Copy-ready artifact templates
docs/              Guides
examples/          Sample runs
```

## Hard rules

- **No product code** before Master Agent **Implementation Authorization**
- Decisions require **evidence** (or labeled assumptions)
- **Tests are mandatory** for done work
- Security / Perf / A11y / i18n / Docs are always-on
- Context continuity: finish current file → print `NEXT FILE:path` → resume on `CONTINUE`

## Agent order

Master → Discovery → Research → Business Analyst → Product Manager → System Architect → Database → Backend → Frontend → Mobile → API → AI → UI → UX → Design System → Security → QA → Test → DevOps → Deploy → Monitor → Documentation → Code Review Board → Performance → Access → Localization → Cost Optimization

## License

Use freely inside your product repositories. Keep attribution to Atlas AI in the foundation manifest when redistributing the framework itself.
