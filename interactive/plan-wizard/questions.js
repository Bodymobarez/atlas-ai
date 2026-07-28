/* Atlas AI — Interactive Plan Wizard Question Bank
 * One question at a time. Each option is mouse-selectable.
 * piece: maps to docs/plan/pieces/P0x_*
 */
window.ATLAS_QUESTIONS = [
  /* —— P01 PROBLEM —— */
  {
    id: "Q01",
    piece: "P01_PROBLEM",
    title: "ما شكل الألم الأساسي؟",
    hint: "اختَر أقرب وصف للمشكلة التي يحلها المشروع.",
    researchTip: "من بحث الفكرة: حدّد الألم قبل الحلول.",
    options: [
      { id: "A", label: "ضياع وقت يومي / شغل يدوي متكرر" },
      { id: "B", label: "فلوس تضيع (تكلفة، أخطاء، فرص ضائعة)" },
      { id: "C", label: "فوضى وتنسيق سيء بين ناس/أنظمة" },
      { id: "D", label: "ثقة / مخاطر / التزام قانوني" },
      { id: "E", label: "أخرى — سأكتبها بعد الاختيار" }
    ]
  },
  {
    id: "Q02",
    piece: "P01_PROBLEM",
    title: "كم مرة يظهر الألم؟",
    hint: "التكرار يحدد أولوية الـ MVP.",
    options: [
      { id: "A", label: "كل يوم" },
      { id: "B", label: "عدة مرات في الأسبوع" },
      { id: "C", label: "موسمي / عند الذروة فقط" },
      { id: "D", label: "نادر لكن كارثي لما يحصل" }
    ]
  },
  {
    id: "Q03",
    piece: "P01_PROBLEM",
    title: "ليه الآن؟",
    hint: "لماذا نبني هذا الربع وليس بعد سنة؟",
    options: [
      { id: "A", label: "فرصة سوق / منافس ضعيف الآن" },
      { id: "B", label: "ضغط داخلي / عملية تتكسر" },
      { id: "C", label: "موعد / عقد / موسم قريب" },
      { id: "D", label: "توفّر فريق/ميزانية الآن فقط" }
    ]
  },

  /* —— P02 USERS —— */
  {
    id: "Q04",
    piece: "P02_USERS",
    title: "من المستخدم الأساسي؟",
    options: [
      { id: "A", label: "مستهلك نهائي (B2C)" },
      { id: "B", label: "موظف / مشغّل داخل شركة (B2B)" },
      { id: "C", label: "مدير / صاحب قرار" },
      { id: "D", label: "طرفين أو أكثر (ماركت بليس)" }
    ]
  },
  {
    id: "Q05",
    piece: "P02_USERS",
    title: "من يدفع؟",
    options: [
      { id: "A", label: "نفس المستخدم" },
      { id: "B", label: "شركة / إدارة مختلفة عن المستخدم" },
      { id: "C", label: "عمولة على معاملات" },
      { id: "D", label: "مجاني أولاً / لاحقًا نقرر" }
    ]
  },
  {
    id: "Q06",
    piece: "P02_USERS",
    title: "اللغة والسوق الأساسي للإطلاق؟",
    options: [
      { id: "A", label: "عربي أولاً (مع RTL)" },
      { id: "B", label: "إنجليزي أولاً" },
      { id: "C", label: "ثنائي اللغة من اليوم الأول" },
      { id: "D", label: "سوق محدد (اذكره في أخرى)" },
      { id: "E", label: "أخرى" }
    ]
  },

  /* —— P03 VALUE —— */
  {
    id: "Q07",
    piece: "P03_VALUE",
    title: "كيف تخلق القيمة؟",
    options: [
      { id: "A", label: "توفير وقت كبير" },
      { id: "B", label: "زيادة إيراد / مبيعات" },
      { id: "C", label: "تقليل مخاطر / أخطاء" },
      { id: "D", label: "تجربة أفضل تفوز على البديل الحالي" }
    ]
  },
  {
    id: "Q08",
    piece: "P03_VALUE",
    title: "نموذج الإيراد المفضّل للـ MVP؟",
    options: [
      { id: "A", label: "اشتراك شهري/سنوي" },
      { id: "B", label: "عمولة / take-rate" },
      { id: "C", label: "دفع لكل استخدام" },
      { id: "D", label: "بدون إيراد في الـ MVP (قيمة أولاً)" },
      { id: "E", label: "أخرى" }
    ]
  },

  /* —— P04 MVP —— */
  {
    id: "Q09",
    piece: "P04_MVP",
    title: "جملة الـ MVP Promise — أي زاوية؟",
    hint: "لازم رحلة واحدة تتكمل من أولها لآخرها.",
    options: [
      { id: "A", label: "المستخدم يكمّل المهمة الأساسية بنجاح في جلسة واحدة" },
      { id: "B", label: "المدير يرى نتيجة/تقرير يعتمد عليه اليوم" },
      { id: "C", label: "طرفين يكملان معاملة واحدة بنجاح (ماركت بليس)" },
      { id: "D", label: "أخرى — سأصيغ الجملة بعد الاختيار" }
    ]
  },
  {
    id: "Q10",
    piece: "P04_MVP",
    title: "ما أول لحظة Wow؟",
    options: [
      { id: "A", label: "سرعة واضحة مقابل الطريقة الحالية" },
      { id: "B", label: "وضوح/ثقة (حالة، تتبع، إثبات)" },
      { id: "C", label: "أتمتة كانت يدوية" },
      { id: "D", label: "تجربة بصرية/سهلة تفوق المنافس" }
    ]
  },

  /* —— P05 SCOPE —— */
  {
    id: "Q11",
    piece: "P05_SCOPE",
    title: "حجم نطاق الـ MVP؟",
    options: [
      { id: "A", label: "ضيق جدًا: رحلة واحدة فقط" },
      { id: "B", label: "ضيق +: رحلة + لوحة إدارة بسيطة" },
      { id: "C", label: "متوسط: رحلتين مرتبطتين" },
      { id: "D", label: "واسع (غير مُستحسن) — أعرف المخاطر" }
    ]
  },
  {
    id: "Q12",
    piece: "P05_SCOPE",
    title: "ماذا نؤجّل صراحةً؟",
    hint: "يمكن اختيار أقرب مجموعة؛ التفاصيل تُكتب في الملاحظات.",
    options: [
      { id: "A", label: "تطبيق موبايل أصلي / إشعارات معقّدة" },
      { id: "B", label: "AI متقدم / تخصيص ثقيل" },
      { id: "C", label: "تكاملات كثيرة مع أنظمة قديمة" },
      { id: "D", label: "متعدد شركات / White-label" },
      { id: "E", label: "مزيج — سأحدده في الملاحظات" }
    ]
  },

  /* —— P06 PLATFORMS —— */
  {
    id: "Q13",
    piece: "P06_PLATFORMS",
    title: "منصات الـ MVP؟",
    options: [
      { id: "A", label: "ويب فقط (مع تصميم متجاوب)" },
      { id: "B", label: "ويب + لوحة إدارة" },
      { id: "C", label: "ويب + موبايل (Cross-platform)" },
      { id: "D", label: "API أولاً (بدون UI غني)" },
      { id: "E", label: "أخرى" }
    ]
  },

  /* —— P07 JOURNEYS —— */
  {
    id: "Q14",
    piece: "P07_JOURNEYS",
    title: "شكل الرحلة الأساسية؟",
    options: [
      { id: "A", label: "تسجيل → إدخال بيانات → نتيجة" },
      { id: "B", label: "تصفح → اختيار → إتمام (شراء/حجز)" },
      { id: "C", label: "إنشاء → مشاركة/تعيين → متابعة حالة" },
      { id: "D", label: "سؤال/طلب → معالجة (قد تشمل AI) → رد" },
      { id: "E", label: "أخرى" }
    ]
  },
  {
    id: "Q15",
    piece: "P07_JOURNEYS",
    title: "أهم مسار فشل يجب تصميمه من اليوم الأول؟",
    options: [
      { id: "A", label: "خطأ دفع / تأكيد فاشل" },
      { id: "B", label: "صلاحيات / مستخدم غلط" },
      { id: "C", label: "بيانات ناقصة / تحقق فاشل" },
      { id: "D", label: "انقطاع شبكة / بطء" }
    ]
  },

  /* —— P08 CONSTRAINTS —— */
  {
    id: "Q16",
    piece: "P08_CONSTRAINTS",
    title: "الإطار الزمني لوصول MVP قابل للتجربة؟",
    options: [
      { id: "A", label: "أقل من أسبوعين" },
      { id: "B", label: "2–6 أسابيع" },
      { id: "C", label: "6–12 أسبوع" },
      { id: "D", label: "مرن — الجودة أولاً" }
    ]
  },
  {
    id: "Q17",
    piece: "P08_CONSTRAINTS",
    title: "حساسية البيانات؟",
    options: [
      { id: "A", label: "عادية (حسابات بسيطة)" },
      { id: "B", label: "PII / خصوصية مهمة" },
      { id: "C", label: "مدفوعات / بيانات مالية" },
      { id: "D", label: "صحية أو منظّمة بشدة" }
    ]
  },
  {
    id: "Q18",
    piece: "P08_CONSTRAINTS",
    title: "تكامل إلزامي من اليوم الأول؟",
    options: [
      { id: "A", label: "لا — نبدأ مستقلين" },
      { id: "B", label: "دفع إلكتروني" },
      { id: "C", label: "هوية / SSO / واتساب / SMS" },
      { id: "D", label: "نظام قديم / ERP / مورد خارجي" },
      { id: "E", label: "أخرى" }
    ]
  },

  /* —— P09 SUCCESS —— */
  {
    id: "Q19",
    piece: "P09_SUCCESS",
    title: "مقياس النجاح خلال 90 يوم؟",
    options: [
      { id: "A", label: "عدد مستخدمين نشطين أسبوعيًا" },
      { id: "B", label: "إكمال الرحلة الأساسية (conversion)" },
      { id: "C", label: "إيراد / معاملات" },
      { id: "D", label: "توفير وقت مُقاس لفريق داخلي" },
      { id: "E", label: "أخرى" }
    ]
  },

  /* —— P10 DESIGN —— */
  {
    id: "Q20",
    piece: "P10_DESIGN_DIRECTION",
    title: "المرجعية البصرية الأقرب؟",
    hint: "Elite Designer سيلتزم بهذا الاتجاه من أول تسليم.",
    options: [
      { id: "A", label: "Linear / Stripe — هادئ، دقيق، احترافي SaaS" },
      { id: "B", label: "Apple — مساحات، بساطة فاخرة" },
      { id: "C", label: "Marketplace / Travel — غني بالمحتوى والثقة" },
      { id: "D", label: "Fintech — أرقام واضحة وثقة عالية" },
      { id: "E", label: "Editorial / Brand — تعبيري وجريء" }
    ]
  },
  {
    id: "Q21",
    piece: "P10_DESIGN_DIRECTION",
    title: "كثافة الواجهة؟",
    options: [
      { id: "A", label: "هوائية وفاخرة (مساحات واسعة)" },
      { id: "B", label: "متوازنة" },
      { id: "C", label: "كثيفة (لوحات عمل / جداول)" }
    ]
  },
  {
    id: "Q22",
    piece: "P10_DESIGN_DIRECTION",
    title: "الوضع اللوني؟",
    options: [
      { id: "A", label: "فاتح أولًا" },
      { id: "B", label: "داكن أولًا" },
      { id: "C", label: "الاثنين من اليوم الأول" }
    ]
  },

  /* —— P11 RISKS —— */
  {
    id: "Q23",
    piece: "P11_RISKS",
    title: "أخطر افتراض لو طلع غلط يقتل المشروع؟",
    options: [
      { id: "A", label: "الناس مش مستعدين يدفعوا / يغيّروا عادتهم" },
      { id: "B", label: "مشكلة تزويد/مخزون/طرف ثاني" },
      { id: "C", label: "تعقيد تقني أو تكامل أصعب من المتوقع" },
      { id: "D", label: "تنظيمي / قانوني / ثقة" },
      { id: "E", label: "أخرى" }
    ]
  },
  {
    id: "Q24",
    piece: "P11_RISKS",
    title: "ماذا نتحقق منه في الأسبوع الأول بعد البناء؟",
    options: [
      { id: "A", label: "مستخدم حقيقي يكمّل الرحلة" },
      { id: "B", label: "استعداد للدفع / اهتمام شراء" },
      { id: "C", label: "ثبات تقني تحت ضغط بسيط" },
      { id: "D", label: "وضوح الرسالة والقيمة" }
    ]
  },

  /* —— INTEGRATIONS —— */
  {
    id: "Q25",
    piece: "P08_CONSTRAINTS",
    title: "هل الـ MVP يحتاج ربط منصات خارجية؟",
    hint: "مدفوعات، واتساب، SSO، Slack، خرائط، AI…",
    options: [
      { id: "A", label: "لا — مستقل قدر الإمكان" },
      { id: "B", label: "نعم — تكامل واحد أساسي" },
      { id: "C", label: "نعم — عدة تكاملات" },
      { id: "D", label: "لاحقًا — ليس في MVP" }
    ]
  },
  {
    id: "Q26",
    piece: "P08_CONSTRAINTS",
    title: "أنواع الربط الأهم للـ MVP؟ (اختَر الأقرب)",
    options: [
      { id: "A", label: "REST/API + Webhooks" },
      { id: "B", label: "OAuth / SSO" },
      { id: "C", label: "SDK مضمّن (دفع/خرائط/تحليلات)" },
      { id: "D", label: "MCP / أدوات AI" },
      { id: "E", label: "مزيج — أوضّح في الملاحظة" },
      { id: "F", label: "لا ينطبق" }
    ]
  },

  /* —— LOCK —— */
  {
    id: "Q27",
    piece: "P12_LOCK",
    title: "اعتماد البلان",
    hint: "بعد المراجعة في الملخص: اعتمد للبدء في التنفيذ الرسمي (بعد G8 لاحقًا).",
    options: [
      { id: "A", label: "اعتمد البلان — ابدأ سلسلة التنفيذ" },
      { id: "B", label: "راجع — أريد تعديل إجابات سابقة" },
      { id: "C", label: "حفظ كمسودة فقط (بدون تنفيذ)" }
    ]
  }
];
