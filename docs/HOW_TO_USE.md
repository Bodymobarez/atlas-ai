# How to Use Atlas AI

## For humans

1. Read `README.md` and `00-foundation/FRAMEWORK_MANIFEST.md`.  
2. Paste your idea into a chat with an AI coding agent and say: follow `01-consultant/PROJECT_CONSULTANT.md`.  
3. Answer discovery questions in batches.  
4. Approve BRD + Vision (G0).  
5. Ask the agent to activate `agents/MASTER_AGENT.md` and produce the orchestration plan.  
6. Approve G3–G5 (and G6 if UI-heavy).  
7. Confirm G7 baselines, then approve G8 Implementation Authorization.  
8. Only then allow build agents to write application code.  
9. Require tests, security, a11y, performance, localization, docs as defaults through G9/G10.

## For AI coding agents (Cursor, Claude Code, Gemini Code, Copilot, …)

1. Read `AGENTS.md` first.  
2. Obey `AUTHORIZATION_STATE` in `docs/STATUS.md`.  
3. Load only the agent file Master activates.  
4. Write artifacts to the paths specified.  
5. Never invent business facts — label assumptions.  
6. On context overflow: finish current file → print `NEXT FILE:path` → wait for `CONTINUE`.

## Starting from this repo

```bash
cp -R atlas-ai/. my-product/
cd my-product
cp templates/STATUS.template.md docs/STATUS.md
# edit STATUS project name; keep BLOCKED_NO_CODE
```

Then run the Consultant.
