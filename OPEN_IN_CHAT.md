# افتح أي شات جديد والصق هذا

## اللينكات

| ماذا | الرابط |
|------|--------|
| الريبو | https://github.com/Bodymobarez/atlas-ai |
| Autopilot v3 | https://raw.githubusercontent.com/Bodymobarez/atlas-ai/main/AUTO_EXECUTE.md |
| معيار الخبرة | https://raw.githubusercontent.com/Bodymobarez/atlas-ai/main/agents/_EXPERT_STANDARD.md |
| معالج البلان (اختيار بالماوس) | https://github.com/Bodymobarez/atlas-ai/tree/main/interactive/plan-wizard |

## الجملة السحرية

```text
Repo: https://github.com/Bodymobarez/atlas-ai
Read AUTO_EXECUTE.md, AGENTS.md, and agents/_EXPERT_STANDARD.md first.
نفّذ مشروع

الفكرة:
<<< اكتب فكرة مشروعك هنا >>>
```

## التدفق المتوقع (v3)

1. **ريسيرش عام** على الفكرة (مستوى خبير)  
2. يفتح لك **معالج البلان** أو يسألك **سؤال واحد** باختيارات A/B/C للضغط/الاختيار  
3. تكمّل الأسئلة → **اعتمد البلان**  
4. باقي الوكلاء (كلهم Expert Mode) + **Elite Designer**  
5. التنفيذ بعد G8  

### تشغيل معالج البلان محليًا

```bash
git clone https://github.com/Bodymobarez/atlas-ai.git
cd atlas-ai/interactive/plan-wizard
python3 -m http.server 8765
```

افتح http://localhost:8765 — اختَر بالماوس — انسخ الناتج للشات.
