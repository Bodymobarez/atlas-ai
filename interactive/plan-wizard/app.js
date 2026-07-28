(function () {
  const questions = window.ATLAS_QUESTIONS || [];
  const STORAGE_KEY = "atlas-plan-wizard-v1";

  const els = {
    progressLabel: document.getElementById("progressLabel"),
    progressBar: document.getElementById("progressBar"),
    pieceLabel: document.getElementById("pieceLabel"),
    title: document.getElementById("questionTitle"),
    hint: document.getElementById("questionHint"),
    tip: document.getElementById("researchTip"),
    options: document.getElementById("options"),
    note: document.getElementById("note"),
    btnBack: document.getElementById("btnBack"),
    btnNext: document.getElementById("btnNext"),
    stage: document.querySelector(".stage"),
    summary: document.getElementById("summary"),
    summaryOut: document.getElementById("summaryOut"),
    btnCopy: document.getElementById("btnCopy"),
    btnDownload: document.getElementById("btnDownload"),
    btnRestart: document.getElementById("btnRestart"),
  };

  let index = 0;
  /** @type {Record<string, { optionId: string, label: string, note: string }>} */
  let answers = {};

  function load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const data = JSON.parse(raw);
      answers = data.answers || {};
      index = Math.min(data.index || 0, questions.length - 1);
    } catch (_) {
      /* ignore */
    }
  }

  function save() {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ index, answers, updated: new Date().toISOString() })
    );
  }

  function current() {
    return questions[index];
  }

  function render() {
    const q = current();
    if (!q) return showSummary();

    els.stage.hidden = false;
    els.summary.hidden = true;

    const total = questions.length;
    els.progressLabel.textContent = `سؤال ${index + 1} / ${total}`;
    els.progressBar.style.width = `${((index + 1) / total) * 100}%`;
    els.pieceLabel.textContent = `القطعة: ${q.piece}`;
    els.title.textContent = q.title;

    if (q.hint) {
      els.hint.hidden = false;
      els.hint.textContent = q.hint;
    } else {
      els.hint.hidden = true;
    }

    if (q.researchTip) {
      els.tip.hidden = false;
      els.tip.textContent = q.researchTip;
    } else {
      els.tip.hidden = true;
    }

    const existing = answers[q.id];
    els.note.value = existing?.note || "";

    els.options.innerHTML = "";
    q.options.forEach((opt) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "opt" + (existing?.optionId === opt.id ? " selected" : "");
      btn.setAttribute("role", "option");
      btn.setAttribute("aria-selected", existing?.optionId === opt.id ? "true" : "false");
      btn.dataset.id = opt.id;
      btn.innerHTML = `<span class="key">${opt.id}</span><span class="label">${opt.label}</span>`;
      btn.addEventListener("click", () => selectOption(opt));
      els.options.appendChild(btn);
    });

    els.btnBack.disabled = index === 0;
    els.btnNext.disabled = !existing?.optionId;
    els.btnNext.textContent = index === questions.length - 1 ? "إنهاء ومراجعة" : "التالي";
  }

  function selectOption(opt) {
    const q = current();
    answers[q.id] = {
      optionId: opt.id,
      label: opt.label,
      note: els.note.value.trim(),
      piece: q.piece,
      title: q.title,
    };
    save();
    render();
  }

  function persistNote() {
    const q = current();
    if (!q || !answers[q.id]) return;
    answers[q.id].note = els.note.value.trim();
    save();
  }

  function goNext() {
    persistNote();
    const q = current();
    if (!answers[q.id]?.optionId) return;
    if (index >= questions.length - 1) {
      showSummary();
      return;
    }
    index += 1;
    save();
    render();
  }

  function goBack() {
    persistNote();
    if (index === 0) return;
    index -= 1;
    save();
    render();
  }

  function buildExport() {
    const lines = [];
    lines.push("# Atlas AI — Plan Wizard Answers");
    lines.push("");
    lines.push("الصق هذا في شات Atlas بعد ما تخلّص.");
    lines.push("");
    lines.push("```");
    lines.push("ATLAS_PLAN_WIZARD_EXPORT");

    const byPiece = {};
    questions.forEach((q) => {
      const a = answers[q.id];
      if (!a) return;
      if (!byPiece[q.piece]) byPiece[q.piece] = [];
      byPiece[q.piece].push({ q, a });
    });

    Object.keys(byPiece).forEach((piece) => {
      lines.push(`## ${piece}`);
      byPiece[piece].forEach(({ q, a }) => {
        lines.push(`- ${q.id} ${q.title}`);
        lines.push(`  اختيار: ${a.optionId}) ${a.label}`);
        if (a.note) lines.push(`  ملاحظة: ${a.note}`);
      });
      lines.push("");
    });

    const lock = answers.Q27 || answers.Q25;
    if (lock?.optionId === "A") {
      lines.push("PLAN_LOCK: اعتمد البلان");
    } else if (lock?.optionId === "B") {
      lines.push("PLAN_LOCK: راجع");
    } else if (lock?.optionId === "C") {
      lines.push("PLAN_LOCK: مسودة");
    }

    lines.push("```");
    lines.push("");
    lines.push("JSON:");
    lines.push("```json");
    lines.push(
      JSON.stringify(
        {
          version: 1,
          completedAt: new Date().toISOString(),
          answers,
        },
        null,
        2
      )
    );
    lines.push("```");

    return lines.join("\n");
  }

  function showSummary() {
    persistNote();
    els.stage.hidden = true;
    els.summary.hidden = false;
    els.summaryOut.textContent = buildExport();
    els.progressLabel.textContent = "اكتملت الأسئلة";
    els.progressBar.style.width = "100%";
  }

  els.btnNext.addEventListener("click", goNext);
  els.btnBack.addEventListener("click", goBack);
  els.note.addEventListener("input", () => {
    if (!answers[current()?.id]) return;
    persistNote();
  });

  els.btnCopy.addEventListener("click", async () => {
    const text = buildExport();
    try {
      await navigator.clipboard.writeText(text);
      els.btnCopy.textContent = "تم النسخ";
      setTimeout(() => (els.btnCopy.textContent = "نسخ للشاحات"), 1500);
    } catch (_) {
      els.summaryOut.focus();
      document.execCommand("selectAll");
    }
  });

  els.btnDownload.addEventListener("click", () => {
    const blob = new Blob(
      [JSON.stringify({ version: 1, answers, exportedAt: new Date().toISOString() }, null, 2)],
      { type: "application/json" }
    );
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "atlas-plan-answers.json";
    a.click();
    URL.revokeObjectURL(url);
  });

  els.btnRestart.addEventListener("click", () => {
    if (!confirm("إعادة كل الإجابات من البداية؟")) return;
    answers = {};
    index = 0;
    localStorage.removeItem(STORAGE_KEY);
    render();
  });

  document.addEventListener("keydown", (e) => {
    if (els.summary.hidden === false) return;
    if (e.target === els.note) return;
    const q = current();
    if (!q) return;
    const key = e.key.toUpperCase();
    const opt = q.options.find((o) => o.id === key);
    if (opt) {
      e.preventDefault();
      selectOption(opt);
    } else if (e.key === "Enter" && answers[q.id]?.optionId) {
      e.preventDefault();
      goNext();
    }
  });

  load();
  render();
})();
