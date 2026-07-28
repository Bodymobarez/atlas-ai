# Workflow — Context Continuity (`CONTINUE`)

## Rule

If a generation or editing session approaches context limits:

1. **Finish the current file completely** (no truncated sections).  
2. Print exactly one line:  
   `NEXT FILE:relative/path/from/repo/root`  
3. Stop. Do not start the next file.  
4. When the user sends `CONTINUE`, resume at that path.  
5. **Do not rewrite** files already completed unless the user explicitly requests changes.

## Tracking

Maintain `docs/FRAMEWORK_BUILD_PROGRESS.md` (for framework meta work) or project `docs/STATUS.md` NEXT_ACTION for product work.

## Examples

```text
NEXT FILE:agents/SECURITY_AGENT.md
```

```text
NEXT FILE:modules/deploy/GUIDE.md
```

```text
NEXT FILE:docs/discovery/BRD.md
```
