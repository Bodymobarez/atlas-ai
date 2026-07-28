# شات التطوير (مش البناء) — انسخ كله

استخدم هذا لما يكون عندك **مشروع قائم** وتريد تحسين / ميزة / إصلاح / ريفاكتور — وليس منتج من الصفر.

للبناء من الصفر استخدم `OPEN_IN_CHAT.md` + `AUTO_EXECUTE.md`.

---

## الجملة كاملة (انسخ كما هي)

```text
Repo: https://github.com/Bodymobarez/atlas-ai

Read these files first (in order):
1) https://raw.githubusercontent.com/Bodymobarez/atlas-ai/main/AUTO_EVOLVE.md
2) https://raw.githubusercontent.com/Bodymobarez/atlas-ai/main/AGENTS.md
3) https://raw.githubusercontent.com/Bodymobarez/atlas-ai/main/agents/_EXPERT_STANDARD.md
4) https://raw.githubusercontent.com/Bodymobarez/atlas-ai/main/agents/CODEBASE_AUDIT_AGENT.md
5) https://raw.githubusercontent.com/Bodymobarez/atlas-ai/main/agents/ELITE_DESIGNER_AGENT.md
6) https://raw.githubusercontent.com/Bodymobarez/atlas-ai/main/agents/INTEGRATIONS_AGENT.md
7) https://raw.githubusercontent.com/Bodymobarez/atlas-ai/main/modules/integrations/CONNECTION_TYPES.md
8) https://raw.githubusercontent.com/Bodymobarez/atlas-ai/main/modules/integrations/PLATFORMS_CATALOG.md

This is DEVELOP / EVOLVE mode — NOT greenfield build.
Do NOT follow AUTO_EXECUTE.md (that is for new products).
Follow AUTO_EVOLVE.md exactly.
Activate Professor Mode for every agent.
Self-activate agents in order — do not wait for me to name each agent.

Rules:
- FIRST: Codebase Audit of THIS workspace (stack, structure, auth, data, tests, hotspots, debts). Write docs/evolve/CODEBASE_AUDIT.md. Summarize to me. Do not implement yet.
- THEN: Change research for my request vs the real code. Options A/B/C.
- THEN: Evolve Planner — ONE question at a time with A/B/C selectable choices.
- Prefer Evolve Wizard: interactive/evolve-wizard (mouse click). If unavailable, ask in chat with clear A/B/C and WAIT after each question.
- Never ask multiple planning questions in one message.
- Prefer smallest correct change; no full rewrite unless I lock that explicitly.
- Match existing patterns/style. No unrelated refactors.
- Wait for me to say: اعتمد خطة التطوير
- After lock: impact pack (architecture/security/tests; Integrations Agent if any external link — use CONNECTION_TYPES + PLATFORMS_CATALOG + MATRIX; Elite Designer only if UI in scope) → authorize slice → implement → verify → report.
- If context is full: finish current file, print NEXT FILE:path, stop. On CONTINUE, resume without rewriting completed files.
- Label ASSUMPTION. End major steps with قرار الأستاذ. Reject mediocre output.

نفّذ تطوير

طلب التطوير:
<<< اكتب ماذا تريد تطويره / تحسينه / إضافته بالتفصيل >>>

قيود (اختياري):
- لا تلمس:
- لازم يتوافق مع:
- موعد:
- UI: نعم/لا / إعادة تصميم:
```

---

## معالج الاختيار بالماوس (v2)

```bash
git clone https://github.com/Bodymobarez/atlas-ai.git   # إن لم يكن موجودًا
cd atlas-ai/interactive/evolve-wizard
python3 -m http.server 8766
```

افتح http://localhost:8766  

1. اكتب طلب التطوير  
2. جاوب سؤال سؤال بالضغط  
3. **نسخ للشاحات** أو حمّل `CHANGE_PLAN.md`  
4. الصق في الشات (مع الجملة أعلاه)
