(function () {
  const ALL_QUESTIONS = window.ATLAS_EVOLVE_QUESTIONS || [];
  const PIECES = window.ATLAS_EVOLVE_PIECES || [];
  const META = window.ATLAS_EVOLVE_META || { version: 2, mode: "evolve" };
  const STORAGE_KEY = "atlas-evolve-wizard-v2";

  const els = {
    progressLabel: document.getElementById("progressLabel"),
    progressBar: document.getElementById("progressBar"),
    pieceNav: document.getElementById("pieceNav"),
    welcome: document.getElementById("welcome"),
    stage: document.getElementById("stage"),
    summary: document.getElementById("summary"),
    changeRequest: document.getElementById("changeRequest"),
    constraints: document.getElementById("constraints"),
    pieceLabel: document.getElementById("pieceLabel"),
    title: document.getElementById("questionTitle"),
    hint: document.getElementById("questionHint"),
    tip: document.getElementById("researchTip"),
    multiHint: document.getElementById("multiHint"),
    options: document.getElementById("options"),
    note: document.getElementById("note"),
    btnStart: document.getElementById("btnStart"),
    btnBack: document.getElementById("btnBack"),
    btnHome: document.getElementById("btnHome"),
    btnNext: document.getElementById("btnNext"),
    summaryOut: document.getElementById("summaryOut"),
    summaryCards: document.getElementById("summaryCards"),
    lockBanner: document.getElementById("lockBanner"),
    btnCopy: document.getElementById("btnCopy"),
    btnDownload: document.getElementById("btnDownload"),
    btnDownloadMd: document.getElementById("btnDownloadMd"),
    btnEdit: document.getElementById("btnEdit"),
    btnRestart: document.getElementById("btnRestart"),
    importFile: document.getElementById("importFile"),
  };

  /** @type {{ changeRequest: string, constraints: string, answers: Record<string, any>, index: number, view: string }} */
  let state = {
    changeRequest: "",
    constraints: "",
    answers: {},
    index: 0,
    view: "welcome",
  };

  function isRecommended(q, optId) {
    const r = q.recommended;
    if (Array.isArray(r)) return r.includes(optId);
    return r === optId;
  }

  function shouldSkip(q) {
    const s = q.skipIf;
    if (!s) return false;
    const a = state.answers[s.questionId];
    if (!a) return false;
    const selected = a.optionIds || (a.optionId ? [a.optionId] : []);
    return s.optionIds.some((id) => selected.includes(id));
  }

  function activeQuestions() {
    return ALL_QUESTIONS.filter((q) => !shouldSkip(q));
  }

  function currentList() {
    return activeQuestions();
  }

  function current() {
    const list = currentList();
    return list[Math.min(state.index, Math.max(0, list.length - 1))];
  }

  function clampIndex() {
    const list = currentList();
    if (!list.length) {
      state.index = 0;
      return;
    }
    if (state.index > list.length - 1) state.index = list.length - 1;
    if (state.index < 0) state.index = 0;
  }

  function load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const data = JSON.parse(raw);
      state = {
        changeRequest: data.changeRequest || "",
        constraints: data.constraints || "",
        answers: data.answers || {},
        index: data.index || 0,
        view: data.view || "welcome",
      };
      els.changeRequest.value = state.changeRequest;
      els.constraints.value = data.constraints || "";
    } catch (_) {
      /* ignore */
    }
  }

  function save() {
    state.changeRequest = els.changeRequest.value.trim();
    state.constraints = els.constraints.value.trim();
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ ...state, updated: new Date().toISOString() })
    );
  }

  function pieceDone(pieceId) {
    return currentList()
      .filter((q) => q.piece === pieceId)
      .every((q) => hasAnswer(q.id));
  }

  function hasAnswer(id) {
    const a = state.answers[id];
    if (!a) return false;
    if (a.optionIds) return a.optionIds.length > 0;
    return Boolean(a.optionId);
  }

  function renderPieceNav() {
    els.pieceNav.innerHTML = "";
    const q = state.view === "stage" ? current() : null;
    PIECES.forEach((p) => {
      if (p.id === "INTRO") {
        const chip = document.createElement("button");
        chip.type = "button";
        chip.className =
          "chip" +
          (state.view === "welcome" ? " active" : "") +
          (state.changeRequest ? " done" : "");
        chip.textContent = p.label;
        chip.addEventListener("click", () => showWelcome());
        els.pieceNav.appendChild(chip);
        return;
      }
      const relevant = ALL_QUESTIONS.some((x) => x.piece === p.id && !shouldSkip(x));
      if (!relevant && p.id !== "LOCK") return;
      const chip = document.createElement("button");
      chip.type = "button";
      chip.className =
        "chip" +
        (q && q.piece === p.id && state.view === "stage" ? " active" : "") +
        (pieceDone(p.id) ? " done" : "");
      chip.textContent = p.label;
      chip.addEventListener("click", () => jumpToPiece(p.id));
      els.pieceNav.appendChild(chip);
    });
  }

  function jumpToPiece(pieceId) {
    const list = currentList();
    const idx = list.findIndex((q) => q.piece === pieceId);
    if (idx < 0) return;
    state.index = idx;
    state.view = "stage";
    save();
    render();
  }

  function showWelcome() {
    state.view = "welcome";
    save();
    render();
  }

  function startQuestions() {
    state.changeRequest = els.changeRequest.value.trim();
    if (!state.changeRequest) {
      els.changeRequest.focus();
      els.changeRequest.style.outline = "2px solid var(--warn)";
      setTimeout(() => (els.changeRequest.style.outline = ""), 1200);
      return;
    }
    state.view = "stage";
    state.index = 0;
    save();
    render();
  }

  function selectedIds(q) {
    const a = state.answers[q.id];
    if (!a) return [];
    if (a.optionIds) return a.optionIds.slice();
    return a.optionId ? [a.optionId] : [];
  }

  function renderOptions(q) {
    els.options.innerHTML = "";
    const selected = selectedIds(q);
    q.options.forEach((opt) => {
      const btn = document.createElement("button");
      btn.type = "button";
      const on = selected.includes(opt.id);
      btn.className = "opt" + (on ? " selected" : "");
      btn.setAttribute("role", "option");
      btn.setAttribute("aria-selected", on ? "true" : "false");
      const star = isRecommended(q, opt.id)
        ? '<span class="star">موصى</span>'
        : "";
      btn.innerHTML = `<span class="key">${opt.id}</span><span class="label">${opt.label}</span>${star}`;
      btn.addEventListener("click", () => toggleOption(q, opt));
      els.options.appendChild(btn);
    });
  }

  function toggleOption(q, opt) {
    const note = els.note.value.trim();
    if (q.multi) {
      let ids = selectedIds(q);
      if (ids.includes(opt.id)) ids = ids.filter((x) => x !== opt.id);
      else ids.push(opt.id);
      const labels = q.options.filter((o) => ids.includes(o.id)).map((o) => o.label);
      state.answers[q.id] = {
        multi: true,
        optionIds: ids,
        labels,
        note,
        piece: q.piece,
        title: q.title,
      };
    } else {
      state.answers[q.id] = {
        optionId: opt.id,
        label: opt.label,
        note,
        piece: q.piece,
        title: q.title,
      };
    }
    save();
    renderStage();
  }

  function persistNote() {
    const q = current();
    if (!q || !state.answers[q.id]) return;
    state.answers[q.id].note = els.note.value.trim();
    save();
  }

  function canProceed(q) {
    return hasAnswer(q.id);
  }

  function goNext() {
    persistNote();
    const q = current();
    if (!canProceed(q)) return;
    const list = currentList();
    if (state.index >= list.length - 1) {
      state.view = "summary";
      save();
      render();
      return;
    }
    state.index += 1;
    // skip chain if needed after answer changes
    clampIndex();
    while (state.index < list.length && shouldSkip(currentList()[state.index])) {
      state.index += 1;
    }
    clampIndex();
    save();
    render();
  }

  function goBack() {
    persistNote();
    if (state.index <= 0) {
      showWelcome();
      return;
    }
    state.index -= 1;
    clampIndex();
    save();
    render();
  }

  function answerLine(a) {
    if (!a) return "—";
    if (a.optionIds) {
      return a.optionIds.map((id, i) => `${id}) ${a.labels[i]}`).join(" · ");
    }
    return `${a.optionId}) ${a.label}`;
  }

  function lockState() {
    const lock = state.answers.E18;
    if (!lock) return "none";
    if (lock.optionId === "A") return "approved";
    if (lock.optionId === "B") return "revise";
    if (lock.optionId === "C") return "draft";
    return "none";
  }

  function buildExportMarkdown() {
    const lines = [];
    lines.push("# CHANGE_PLAN — Atlas Evolve Wizard");
    lines.push("");
    lines.push(`**Mode:** evolve`);
    lines.push(`**Wizard:** v${META.version || 2}`);
    lines.push(`**Date:** ${new Date().toISOString()}`);
    lines.push("");
    lines.push("## طلب التطوير");
    lines.push(state.changeRequest || "_(فارغ)_");
    lines.push("");
    if (state.constraints) {
      lines.push("## قيود سريعة");
      lines.push(state.constraints);
      lines.push("");
    }

    const byPiece = {};
    currentList().forEach((q) => {
      const a = state.answers[q.id];
      if (!a) return;
      if (!byPiece[q.piece]) byPiece[q.piece] = [];
      byPiece[q.piece].push({ q, a });
    });

    Object.keys(byPiece).forEach((piece) => {
      lines.push(`## ${piece}`);
      byPiece[piece].forEach(({ q, a }) => {
        lines.push(`- **${q.id}** ${q.title}`);
        lines.push(`  - اختيار: ${answerLine(a)}`);
        if (a.note) lines.push(`  - ملاحظة: ${a.note}`);
      });
      lines.push("");
    });

    const ls = lockState();
    if (ls === "approved") lines.push("**EVOLVE_LOCK:** اعتمد خطة التطوير");
    else if (ls === "revise") lines.push("**EVOLVE_LOCK:** راجع");
    else if (ls === "draft") lines.push("**EVOLVE_LOCK:** مسودة");
    lines.push("");
    lines.push("---");
    lines.push("");
    lines.push("```");
    lines.push("ATLAS_EVOLVE_WIZARD_EXPORT");
    lines.push(`CHANGE_REQUEST: ${state.changeRequest}`);
    if (state.constraints) lines.push(`CONSTRAINTS: ${state.constraints}`);
    currentList().forEach((q) => {
      const a = state.answers[q.id];
      if (!a) return;
      lines.push(`${q.id} [${q.piece}] ${q.title}`);
      lines.push(`  → ${answerLine(a)}`);
      if (a.note) lines.push(`  note: ${a.note}`);
    });
    if (ls === "approved") lines.push("EVOLVE_LOCK: اعتمد خطة التطوير");
    else if (ls === "revise") lines.push("EVOLVE_LOCK: راجع");
    else if (ls === "draft") lines.push("EVOLVE_LOCK: مسودة");
    lines.push("```");
    return lines.join("\n");
  }

  function buildExportChat() {
    return buildExportMarkdown();
  }

  function renderSummaryCards() {
    els.summaryCards.innerHTML = "";
    const highlights = [
      ["الطلب", state.changeRequest.slice(0, 160) + (state.changeRequest.length > 160 ? "…" : "")],
      ["الهدف", answerLine(state.answers.E01)],
      ["الحجم", answerLine(state.answers.E04)],
      ["الأسلوب", answerLine(state.answers.E06)],
      ["UI", answerLine(state.answers.E11)],
      ["التحقق", answerLine(state.answers.E16)],
    ];
    highlights.forEach(([k, v]) => {
      if (!v || v === "—") return;
      const div = document.createElement("div");
      div.className = "scard";
      div.innerHTML = `<strong>${k}</strong><div>${v}</div>`;
      els.summaryCards.appendChild(div);
    });
  }

  function renderStage() {
    clampIndex();
    const list = currentList();
    const q = current();
    if (!q) {
      state.view = "summary";
      render();
      return;
    }

    els.welcome.hidden = true;
    els.stage.hidden = false;
    els.summary.hidden = true;

    els.progressLabel.textContent = `سؤال ${state.index + 1} / ${list.length}`;
    els.progressBar.style.width = `${((state.index + 1) / list.length) * 100}%`;
    els.pieceLabel.textContent = `القطعة: ${q.piece}`;
    els.title.textContent = q.title;

    els.hint.hidden = !q.hint;
    els.hint.textContent = q.hint || "";
    els.tip.hidden = !q.researchTip;
    els.tip.textContent = q.researchTip || "";
    els.multiHint.hidden = !q.multi;

    const existing = state.answers[q.id];
    els.note.value = existing?.note || "";

    renderOptions(q);
    els.btnNext.disabled = !canProceed(q);
    els.btnNext.textContent =
      state.index >= list.length - 1 ? "إنهاء ومراجعة" : "التالي";
    els.btnBack.textContent = state.index === 0 ? "الطلب" : "السابق";
    renderPieceNav();
  }

  function renderWelcome() {
    els.welcome.hidden = false;
    els.stage.hidden = true;
    els.summary.hidden = true;
    els.progressLabel.textContent = state.changeRequest
      ? "الطلب محفوظ — ابدأ الأسئلة"
      : "اكتب طلب التطوير للبدء";
    els.progressBar.style.width = state.changeRequest ? "8%" : "0%";
    renderPieceNav();
  }

  function renderSummary() {
    els.welcome.hidden = true;
    els.stage.hidden = true;
    els.summary.hidden = false;
    els.progressLabel.textContent = "اكتملت الخطة";
    els.progressBar.style.width = "100%";

    const ls = lockState();
    els.lockBanner.className = "";
    if (ls === "approved") {
      els.lockBanner.className = "ok";
      els.lockBanner.textContent =
        "تم الاعتماد: الصق الناتج في الشات واكتب أو أبقِ «اعتمد خطة التطوير» ليبدأ التنفيذ.";
    } else if (ls === "draft") {
      els.lockBanner.className = "draft";
      els.lockBanner.textContent = "مسودة فقط — لن يُنفَّذ الكود حتى الاعتماد.";
    } else if (ls === "revise") {
      els.lockBanner.className = "draft";
      els.lockBanner.textContent = "اخترت المراجعة — عدّل الإجابات ثم أعد الاعتماد.";
    } else {
      els.lockBanner.textContent = "راجع الملخص قبل النسخ للشات.";
    }

    renderSummaryCards();
    els.summaryOut.textContent = buildExportChat();
    renderPieceNav();
  }

  function render() {
    if (state.view === "welcome") renderWelcome();
    else if (state.view === "summary") renderSummary();
    else renderStage();
  }

  // Events
  els.btnStart.addEventListener("click", startQuestions);
  els.btnBack.addEventListener("click", goBack);
  els.btnHome.addEventListener("click", showWelcome);
  els.btnNext.addEventListener("click", goNext);
  els.changeRequest.addEventListener("input", save);
  els.constraints.addEventListener("input", save);
  els.note.addEventListener("input", () => {
    if (!state.answers[current()?.id]) return;
    persistNote();
  });

  els.btnCopy.addEventListener("click", async () => {
    const text = buildExportChat();
    try {
      await navigator.clipboard.writeText(text);
      els.btnCopy.textContent = "تم النسخ";
      setTimeout(() => (els.btnCopy.textContent = "نسخ للشاحات"), 1600);
    } catch (_) {
      els.summaryOut.focus();
    }
  });

  els.btnDownload.addEventListener("click", () => {
    const payload = {
      version: META.version || 2,
      mode: "evolve",
      changeRequest: state.changeRequest,
      constraints: state.constraints,
      answers: state.answers,
      exportedAt: new Date().toISOString(),
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "atlas-evolve-answers.json";
    a.click();
    URL.revokeObjectURL(url);
  });

  els.btnDownloadMd.addEventListener("click", () => {
    const blob = new Blob([buildExportMarkdown()], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "CHANGE_PLAN.md";
    a.click();
    URL.revokeObjectURL(url);
  });

  els.btnEdit.addEventListener("click", () => {
    state.view = "stage";
    state.index = 0;
    save();
    render();
  });

  els.btnRestart.addEventListener("click", () => {
    if (!confirm("إعادة كل الإجابات وطلب التطوير من البداية؟")) return;
    state = {
      changeRequest: "",
      constraints: "",
      answers: {},
      index: 0,
      view: "welcome",
    };
    els.changeRequest.value = "";
    els.constraints.value = "";
    localStorage.removeItem(STORAGE_KEY);
    render();
  });

  els.importFile.addEventListener("change", async (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    try {
      const text = await file.text();
      const data = JSON.parse(text);
      state.changeRequest = data.changeRequest || "";
      state.constraints = data.constraints || "";
      state.answers = data.answers || {};
      state.index = 0;
      state.view = Object.keys(state.answers).length ? "summary" : "welcome";
      els.changeRequest.value = state.changeRequest;
      els.constraints.value = state.constraints;
      save();
      render();
    } catch (_) {
      alert("ملف JSON غير صالح");
    }
    e.target.value = "";
  });

  document.addEventListener("keydown", (e) => {
    if (state.view !== "stage") return;
    if (e.target === els.note || e.target === els.changeRequest) return;
    const q = current();
    if (!q) return;
    const key = e.key.toUpperCase();
    const opt = q.options.find((o) => o.id === key);
    if (opt) {
      e.preventDefault();
      toggleOption(q, opt);
    } else if (e.key === "Enter" && canProceed(q)) {
      e.preventDefault();
      goNext();
    }
  });

  load();
  // migrate old storage key lightly
  try {
    if (!localStorage.getItem(STORAGE_KEY) && localStorage.getItem("atlas-evolve-wizard-v1")) {
      const old = JSON.parse(localStorage.getItem("atlas-evolve-wizard-v1"));
      state.answers = old.answers || {};
      state.index = old.index || 0;
      state.view = Object.keys(state.answers).length ? "stage" : "welcome";
    }
  } catch (_) {
    /* ignore */
  }
  render();
})();
