# CLAUDE.md — Atlas AI for Claude Code

Follow `AGENTS.md` and `00-foundation/FRAMEWORK_MANIFEST.md` as the source of truth.

## Claude Code specifics

- Treat `agents/*.md` as role system prompts when delegated.
- Before writing any product code, verify `docs/STATUS.md` shows `AUTHORIZED_IMPLEMENTATION`.
- If status is missing or `BLOCKED_NO_CODE`, run Project Consultant / Master Agent workflows only.
- Prefer editing markdown artifacts under `docs/`, `gates/`, `schemas/`, `templates/` during discovery phases.
- When context nears limits: finish the current file, print `NEXT FILE:path`, stop cleanly.

## Preferred commands mindset

- Discovery and planning are first-class deliverables.
- Implementation is a later phase gated by humans + Master Agent.
- Use TodoWrite-style tracking for multi-file Atlas generation or product delivery.

## Pair files

- Universal: `AGENTS.md`
- Cursor: `.cursor/rules/atlas-ai.mdc`
- Orchestrator: `agents/MASTER_AGENT.md`
