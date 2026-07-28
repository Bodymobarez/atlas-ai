# Workflow — New Project Bootstrap

Use when copying Atlas AI into a greenfield product repository.

## Steps

1. Copy Atlas AI tree into the product repo root (or `atlas/` subfolder and adjust paths in AGENTS.md).  
2. Keep `AUTHORIZATION_STATE: BLOCKED_NO_CODE` in `docs/STATUS.md`.  
3. Delete or ignore `examples/` content if not needed.  
4. Point humans/agents to `README.md` → Consultant.  
5. Create empty directories under `docs/` as artifacts appear — do not invent BRD content.  
6. Initialize git; ensure `.gitignore` excludes secrets, `.env`, keys.  
7. Run Project Consultant interview.  
8. Only after G8, scaffold application code per Architecture ADRs.

## Bootstrap STATUS seed

Copy from `templates/STATUS.template.md` to `docs/STATUS.md`.

## Agent entrypoints to verify

- [ ] `AGENTS.md`  
- [ ] `CLAUDE.md`  
- [ ] `.cursor/rules/atlas-ai.mdc`  
- [ ] `00-foundation/FRAMEWORK_MANIFEST.md`  
