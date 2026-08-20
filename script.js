/**
 * Shivaji English School & Junior College | Official Portal Script
 * Bilingual Support (English / मराठी), Accessibility & Shivaji AI Assistant
 */

let currentLang = localStorage.getItem('sesjc_lang') || 'en';

document.addEventListener('DOMContentLoaded', () => {
  initAccessibility();
  initMobileNav();
  initNoticeFilters();
  initAnimatedCounters();
  initAiAssistant();
  initLanguageSystem();
});

/* ==========================================================================
   1. Bilingual Language System (English <-> मराठी)
   ========================================================================== */
const translations = {
  en: {
    langBtnText: '<i class="fa-solid fa-language"></i> मराठी',
    topLocation: 'Pandur Titha, Kudal, Sindhudurg, MH - 416528',
    topAided: 'Estd. 1960 | Private-Aided',
    brandName: 'SHIVAJI ENGLISH SCHOOL',
    brandSub: '& Junior College of Arts, Science & Commerce',
    brandLoc: 'Pandur Titha, Sindhudurg',
    navHome: '<i class="fa-solid fa-house"></i> Home',
    navAbout: '<i class="fa-solid fa-landmark"></i> About',
    navAcademics: '<i class="fa-solid fa-book-open"></i> Academics',
    navNotices: '<i class="fa-solid fa-bullhorn"></i> Notices',
    navHub: '<i class="fa-solid fa-laptop-file"></i> Student Hub',
    navCampus: '<i class="fa-solid fa-shapes"></i> Campus',
    navFaculty: '<i class="fa-solid fa-user-tie"></i> Faculty',
    navContact: '<i class="fa-solid fa-envelope"></i> Contact',
    heroBadge: '<i class="fa-solid fa-star"></i> 60+ Years of Academic Excellence (Since 1960)',
    heroTitle: 'Empowering Minds, <br><span class="text-highlight">Shaping Leaders</span> in Sindhudurg.',
    heroDesc: 'A premier co-educational, private-aided institution imparting high-quality education from Grades 5 through 12 in General Secondary, Arts, Commerce, Science, and Information Technology.',
    btnExplore: '<i class="fa-solid fa-compass"></i> Explore Courses',
    btnNotices: '<i class="fa-solid fa-bell"></i> Notice Board',
    btnAskAi: '<i class="fa-solid fa-robot"></i> Ask College AI',
    kioskTitle: '<i class="fa-solid fa-display"></i> Campus Digital Kiosk',
    kioskBadge: '<i class="fa-solid fa-satellite-dish"></i> LIVE ADMISSIONS & UPDATES',
    kioskHeading: 'Admissions Open for 2026–27',
    kioskDesc: 'Grades 5th to 10th (Semi-English & English) and 11th/12th (Science, Commerce, Arts & IT).',
    kioskChipExam: '<i class="fa-solid fa-calendar-check"></i> Exam Dates',
    kioskChipBanks: '<i class="fa-solid fa-file-pdf"></i> Question Banks',
    kioskChipAdmin: '<i class="fa-solid fa-user-plus"></i> Admission Info',
    kioskChipIt: '<i class="fa-solid fa-code"></i> 12th IT Syllabus',
    kioskAffiliation: '<i class="fa-solid fa-shield-halved"></i> Maharashtra State Board Affiliated (Pune Board)',
    statEst: 'Year Established',
    statStud: 'Students Enrolled',
    statResult: 'Board Exam Result',
    statEducators: 'Expert Educators',
    aboutSub: 'Heritage & Vision',
    aboutTitle: 'About Our Institution',
    aboutLead: 'Serving Sindhudurg district with dedicated educational excellence for over six decades.',
    aboutHistTitle: 'Our Glorious History (Since 1960)',
    aboutHistP1: 'Founded in 1960 at Pandur Titha, Shivaji English School and Junior College was established with a noble mission to provide accessible, value-based, and progressive education to the rural and semi-urban students of Sindhudurg.',
    aboutHistP2: 'Over the decades, it has evolved into a leading private-aided educational hub producing district toppers, sports champions, engineers, doctors, and civic leaders.',
    aboutVisTitle: 'Our Vision',
    aboutVisP: 'To cultivate intellectually enlightened, morally upright, and technologically empowered youth who positively contribute to society, state, and nation.',
    aboutMisTitle: 'Our Mission',
    aboutMisP: 'Delivering holistic education through modern smart classrooms, rigorous science laboratories, computer training, sports mentorship, and community service.',
    ribbonAided: '<i class="fa-solid fa-check-circle"></i> Government Recognized & Aided',
    ribbonCoed: '<i class="fa-solid fa-check-circle"></i> Co-Educational Campus',
    ribbonLabs: '<i class="fa-solid fa-check-circle"></i> Advanced Science & IT Labs',
    ribbonSmart: '<i class="fa-solid fa-check-circle"></i> Interactive Smart Classrooms',
    acadSub: 'Programs Offered',
    acadTitle: 'Academic Streams & Curriculum',
    acadLead: 'Comprehensive schooling from Grade 5 through 12 with specialized junior college wings.',
    noticeSub: 'Real-Time Bulletin',
    noticeTitle: 'Official Notice Board',
    noticeLead: 'Stay updated with latest announcements, meeting circulars, and exam schedules.',
    noticeParentTitle: 'Urgent Parent-Management Meeting with Principal',
    noticeParentDesc: 'All parents are hereby informed that an important meeting with the Institution Management and Principal is scheduled on Saturday, 22/08/2026 at 10:00 AM sharp in the school premises. All parents are requested to attend without fail. — Principal',
    contactSub: 'Reach Out',
    contactTitle: 'Contact & Location',
    contactLead: 'Visit our campus at Pandur Titha or connect with the administrative office.'
  },
  mr: {
    langBtnText: '<i class="fa-solid fa-language"></i> English',
    topLocation: 'पांडुर तिठा, कुडाळ, सिंधुदुर्ग, महाराष्ट्र - ४१६५२८',
    topAided: 'स्थापना १९६० | शासकीय अनुदानित',
    brandName: 'शिवाजी इंग्लिश स्कूल',
    brandSub: '& कनिष्ठ महाविद्यालय (कला, वाणिज्य, विज्ञान व आयटी)',
    brandLoc: 'पांडुर तिठा, सिंधुदुर्ग',
    navHome: '<i class="fa-solid fa-house"></i> मुख्यपृष्ठ',
    navAbout: '<i class="fa-solid fa-landmark"></i> परिचय',
    navAcademics: '<i class="fa-solid fa-book-open"></i> अभ्यासक्रम',
    navNotices: '<i class="fa-solid fa-bullhorn"></i> सूचना फलक',
    navHub: '<i class="fa-solid fa-laptop-file"></i> विद्यार्थी मंच',
    navCampus: '<i class="fa-solid fa-shapes"></i> परिसर',
    navFaculty: '<i class="fa-solid fa-user-tie"></i> शिक्षक वर्ग',
    navContact: '<i class="fa-solid fa-envelope"></i> संपर्क',
    heroBadge: '<i class="fa-solid fa-star"></i> ६०+ वर्षांची उज्ज्वल शैक्षणिक परंपरा (स्थापना १९६०)',
    heroTitle: 'ज्ञान, संस्कार आणि <br><span class="text-highlight">उज्ज्वल भविष्य</span> घडवणारी संस्था.',
    heroDesc: 'इयत्ता ५ वी ते १२ वी पर्यंत सेमी-इंग्रजी/इंग्रजी माध्यम, कला, वाणिज्य, विज्ञान आणि माहिती तंत्रज्ञान (IT) चे दर्जेदार शिक्षण देणारी सिंधुदुर्गातील नामांकित खाजगी अनुदानित संस्था.',
    btnExplore: '<i class="fa-solid fa-compass"></i> अभ्यासक्रम पहा',
    btnNotices: '<i class="fa-solid fa-bell"></i> सूचना फलक',
    btnAskAi: '<i class="fa-solid fa-robot"></i> शिवाजी AI मदतनीस',
    kioskTitle: '<i class="fa-solid fa-display"></i> डिजिटल सूचना केंद्र',
    kioskBadge: '<i class="fa-solid fa-satellite-dish"></i> थेट प्रवेश व अपडेट्स',
    kioskHeading: 'शैक्षणिक वर्ष २०२६-२७ प्रवेश सुरू',
    kioskDesc: 'इयत्ता ५ वी ते १० वी आणि ११ वी/१२ वी (विज्ञान, वाणिज्य, कला व IT शाखा).',
    kioskChipExam: '<i class="fa-solid fa-calendar-check"></i> परीक्षा वेळापत्रक',
    kioskChipBanks: '<i class="fa-solid fa-file-pdf"></i> प्रश्नपत्रिका संच',
    kioskChipAdmin: '<i class="fa-solid fa-user-plus"></i> प्रवेश माहिती',
    kioskChipIt: '<i class="fa-solid fa-code"></i> १२वी IT अभ्यासक्रम',
    kioskAffiliation: '<i class="fa-solid fa-shield-halved"></i> महाराष्ट्र राज्य माध्यमिक व उच्च माध्यमिक शिक्षण मंडळ (पुणे)',
    statEst: 'स्थापना वर्ष',
    statStud: 'विद्यार्थी संख्या',
    statResult: 'बोर्ड परीक्षा निकाल',
    statEducators: 'अनुभवी शिक्षकवृंद',
    aboutSub: 'परंपरा व ध्येय',
    aboutTitle: 'आमच्या शाळेविषयी व महाविद्यालयाविषयी',
    aboutLead: 'गेल्या ६ दशकांपासून सिंधुदुर्ग जिल्ह्यातील विद्यार्थ्यांना संस्कारक्षम व गुणवत्तापूर्ण शिक्षण देत आहोत.',
    aboutHistTitle: 'आमचा गौरवशाली इतिहास (स्थापना १९६०)',
    aboutHistP1: 'पांडुर तिठा येथे १९६० साली स्थापन झालेले शिवाजी इंग्लिश स्कूल व कनिष्ठ महाविद्यालय हे ग्रामीण भागातील विद्यार्थ्यांना दर्जेदार शिक्षण देण्यासाठी अविरत कार्यरत आहे.',
    aboutHistP2: 'शाळेने आजवर अनेक गुणवत्तावंत विद्यार्थी, खेळाडू, डॉक्टर, इंजिनिअर व समाजसेवक घडवले आहेत.',
    aboutVisTitle: 'आमचे ध्येय (Vision)',
    aboutVisP: 'नैतिक मूल्ये, बौद्धिक प्रगल्भता आणि आधुनिक तंत्रज्ञानाने सुसज्ज असलेली आत्मनिर्भर पिढी घडवणे.',
    aboutMisTitle: 'आमची उद्दिष्टे (Mission)',
    aboutMisP: 'स्मार्ट वर्गखोल्या, अद्ययावत प्रयोगशाळा, संगणक शिक्षण व क्रीडा मार्गदर्शनाद्वारे विद्यार्थ्यांचा सर्वांगीण विकास साधणे.',
    ribbonAided: '<i class="fa-solid fa-check-circle"></i> शासनमान्य व पूर्ण अनुदानित',
    ribbonCoed: '<i class="fa-solid fa-check-circle"></i> सह-शिक्षण (मुले व मुली)',
    ribbonLabs: '<i class="fa-solid fa-check-circle"></i> अद्ययावत विज्ञान व संगणक लॅब',
    ribbonSmart: '<i class="fa-solid fa-check-circle"></i> डिजिटल स्मार्ट वर्गखोल्या',
    acadSub: 'उपलब्ध शाखा',
    acadTitle: 'शालेय व कनिष्ठ महाविद्यालयीन अभ्यासक्रम',
    acadLead: 'इयत्ता ५ वी ते १० वी माध्यमिक शाळा आणि ११ वी व १२ वी उच्च माध्यमिक शाखा.',
    noticeSub: 'ताज्या घडामोडी',
    noticeTitle: 'अधिकृत सूचना फलक',
    noticeLead: 'शाळेतील सर्व महत्त्वाच्या सूचना, सभा व परीक्षांचे वेळापत्रक.',
    noticeParentTitle: 'पालक-संस्थाचालक व मुख्याध्यापक संयुक्त सभा सूचना',
    noticeParentDesc: 'सर्व विद्यार्थ्यांच्या पालकांना कळविण्यात येते की शनिवार दिनांक २२/०८/२०२६ रोजी शाळेत सकाळी ठीक १०.०० वाजता संस्थाचालक व मुख्याध्यापक यांच्या समवेत सभा आयोजित केली आहे. तरी सर्व पालकांनी आवर्जून उपस्थित राहावे. — मुख्याध्यापक',
    contactSub: 'संपर्क करा',
    contactTitle: 'पत्ता व संपर्क तपशील',
    contactLead: 'पांडुर तिठा येथील कार्यालयास भेट द्या किंवा थेट संपर्क साधा.'
  }
};

function initLanguageSystem() {
  const langBtn = document.getElementById('btnLangToggle');
  applyLanguage(currentLang);

  if (langBtn) {
    langBtn.addEventListener('click', () => {
      currentLang = currentLang === 'en' ? 'mr' : 'en';
      localStorage.setItem('sesjc_lang', currentLang);
      applyLanguage(currentLang);
    });
  }
}

function applyLanguage(lang) {
  const t = translations[lang];
  if (!t) return;

  const setHtml = (sel, html) => {
    const el = document.querySelector(sel);
    if (el) el.innerHTML = html;
  };
  const setText = (sel, text) => {
    const el = document.querySelector(sel);
    if (el) el.textContent = text;
  };

  // Button text
  setHtml('#btnLangToggle', t.langBtnText);

  // Top info & Brand
  setText('.college-name', t.brandName);
  setText('.college-sub', t.brandSub);
  setText('.location-tag', t.brandLoc);

  // Navigation Links
  const navLinks = document.querySelectorAll('.nav-link');
  if (navLinks.length >= 8) {
    navLinks[0].innerHTML = t.navHome;
    navLinks.innerHTML = t.navAbout;
    navLinks.innerHTML = t.navAcademics;
    navLinks.innerHTML = t.navNotices;
    navLinks.innerHTML = t.navHub;
    navLinks.innerHTML = t.navCampus;
    navLinks.innerHTML = t.navFaculty;
    navLinks.innerHTML = t.navContact;
  }

  // Hero Section
  setHtml('.badge-pill', t.heroBadge);
  setHtml('.hero-title', t.heroTitle);
  setText('.hero-description', t.heroDesc);
  setHtml('.hero-action-buttons a:nth-child(1)', t.btnExplore);
  setHtml('.hero-action-buttons a:nth-child(2)', t.btnNotices);
  setHtml('#heroAiTrigger', t.btnAskAi);

  // Digital Kiosk
  setHtml('.kiosk-title', t.kioskTitle);
  setHtml('.kiosk-live-badge', t.kioskBadge);
  setText('.kiosk-body h3', t.kioskHeading);
  setText('.kiosk-body p', t.kioskDesc);
  setHtml('.kiosk-footer-note', t.kioskAffiliation);

  // About Section
  setText('#about .section-subtitle', t.aboutSub);
  setText('#about .section-title', t.aboutTitle);
  setText('#about .section-lead', t.aboutLead);
  setText('.about-card.highlight-card h3', t.aboutHistTitle);
  setHtml('.about-card.highlight-card p:nth-of-type(1)', t.aboutHistP1);
  setHtml('.about-card.highlight-card p:nth-of-type(2)', t.aboutHistP2);

  // Notice Section
  setText('#notices .section-subtitle', t.noticeSub);
  setText('#notices .section-title', t.noticeTitle);
  setText('#notices .section-lead', t.noticeLead);
  setText('.notice-info h4', t.noticeParentTitle);
  setText('.notice-info p', t.noticeParentDesc);

  // Contact Section
  setText('#contact .section-subtitle', t.contactSub);
  setText('#contact .section-title', t.contactTitle);
  setText('#contact .section-lead', t.contactLead);
}

/* ==========================================================================
   2. Accessibility & Smart Board Controls
   ========================================================================== */
function initAccessibility() {
  const body = document.body;
  const btnInc = document.getElementById('btnIncreaseFont');
  const btnDec = document.getElementById('btnDecreaseFont');
  const btnReset = document.getElementById('btnResetFont');
  const btnContrast = document.getElementById('btnHighContrast');
  const btnSmartBoard = document.getElementById('btnSmartBoard');

  if (btnInc) {
    btnInc.addEventListener('click', () => {
      body.classList.remove('font-sm');
      if (body.classList.contains('font-lg')) {
        body.classList.remove('font-lg');
        body.classList.add('font-xl');
      } else {
        body.classList.add('font-lg');
      }
    });
  }

  if (btnDec) {
    btnDec.addEventListener('click', () => {
      body.classList.remove('font-xl', 'font-lg');
      body.classList.add('font-sm');
    });
  }

  if (btnReset) {
    btnReset.addEventListener('click', () => {
      body.classList.remove('font-sm', 'font-lg', 'font-xl');
    });
  }

  if (btnContrast) {
    btnContrast.addEventListener('click', () => {
      body.classList.toggle('high-contrast');
    });
  }

  if (btnSmartBoard) {
    btnSmartBoard.addEventListener('click', () => {
      body.classList.toggle('smartboard-mode');
      if (body.classList.contains('smartboard-mode')) {
        btnSmartBoard.innerHTML = '<i class="fa-solid fa-check"></i> Standard View';
      } else {
        btnSmartBoard.innerHTML = '<i class="fa-solid fa-chalkboard-user"></i> Smart Board View';
      }
    });
  }
}

/* ==========================================================================
   3. Mobile Navigation Toggle
   ========================================================================== */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobileNavToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const icon = toggleBtn.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
      }
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        const icon = toggleBtn.querySelector('i');
        if (icon) {
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-xmark');
        }
      });
    });
  }
}

/* ==========================================================================
   4. Notice Board Filters
   ========================================================================== */
function initNoticeFilters() {
  const tabs = document.querySelectorAll('.notice-tab');
  const items = document.querySelectorAll('.notice-item');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-filter');
      items.forEach(item => {
        const category = item.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          item.style.display = 'flex';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

function viewNoticeDetails(noticeTitle) {
  const msg = currentLang === 'mr'
    ? `अधिकृत सूचना: ${noticeTitle}\n\nकृपया अधिक माहितीसाठी पांडुर तिठा येथील प्रशासकीय कार्यालयाशी संपर्क साधा किंवा मुख्य सूचना फलक पहा.`
    : `Official Notice: ${noticeTitle}\n\nPlease visit the college administrative office at Pandur Titha for complete details.`;
  alert(msg);
}

/* ==========================================================================
   5. Interactive Campus Facilities
   ========================================================================== */
const facilityData = {
  smartClass: {
    title: { en: "Interactive Smart Classrooms", mr: "डिजिटल स्मार्ट वर्गखोल्या" },
    icon: "fa-solid fa-chalkboard",
    desc: {
      en: "Equipped with high-definition touch-interactive smart boards and multimedia learning tools.",
      mr: "इंटरॅक्टिव्ह टच स्क्रीन स्मार्ट बोर्ड, ऑडिओ-व्हिज्युअल मीडिया आणि आधुनिक ई-लर्निंग सुविधा."
    },
    tags: { en: ["Touch Enabled", "Audio-Visual", "E-Learning"], mr: ["टच स्क्रीन", "ऑडिओ-व्हिज्युअल", "ई-लर्निंग"] }
  },
  computerLab: {
    title: { en: "Advanced Computer & IT Laboratory", mr: "अद्ययावत संगणक व IT लॅब" },
    icon: "fa-solid fa-desktop",
    desc: {
      en: "Over 40 high-performance workstations with HTML5/CSS/JavaScript and Linux for 11th & 12th IT practicals.",
      mr: "४० पेक्षा जास्त संगणक, हाय-स्पीड इंटरनेट आणि १२वी IT प्रॅक्टिकल्ससाठी आधुनिक सॉफ्टवेअर्स."
    },
    tags: { en: ["High-Speed Wi-Fi", "Linux & Windows", "1:1 PC Ratio"], mr: ["हाय-स्पीड इंटरनेट", "लिनक्स व विंडोज", "१:१ कॉम्प्युटर"] }
  },
  scienceLab: {
    title: { en: "Specialized Science Laboratories", mr: "भौतिक, रसायन व जीवशास्त्र प्रयोगशाळा" },
    icon: "fa-solid fa-atom",
    desc: {
      en: "Individual Physics, Chemistry, and Biology laboratories equipped with modern precision apparatus.",
      mr: "भौतिकशास्त्र, रसायनशास्त्र आणि जीवशास्त्राच्या अत्याधुनिक उपकरणांनी सुसज्ज स्वतंत्र प्रयोगशाळा."
    },
    tags: { en: ["Modern Apparatus", "Physics & Chem", "Safety Certified"], mr: ["अद्ययावत उपकरणे", "सुरक्षित प्रयोगशाळा", "बोर्ड प्रॅक्टिकल"] }
  },
  library: {
    title: { en: "Central Knowledge Library", mr: "मध्यवर्ती ज्ञान ग्रंथालय" },
    icon: "fa-solid fa-book-bookmark",
    desc: {
      en: "Over 10,000 reference textbooks, CET/NEET/JEE entrance materials, and educational periodicals.",
      mr: "१०,००० हून अधिक पुस्तके, संदर्भ ग्रंथ, स्पर्धा परीक्षा मार्गदर्शिका व वाचन कक्ष."
    },
    tags: { en: ["10,000+ Books", "Reading Area", "Competitive Guides"], mr: ["१०,०००+ पुस्तके", "अभ्यासिका", "मार्गदर्शन"] }
  },
  sports: {
    title: { en: "Playground & Sports Complex", mr: "विशाल क्रीडांगण व क्रीडा सुविधा" },
    icon: "fa-solid fa-volleyball",
    desc: {
      en: "Outdoor playground supporting volleyball, kabaddi, kho-kho, cricket, and indoor athletics.",
      mr: "व्हॉलीबॉल, कबड्डी, खो-खो, क्रिकेट आणि इनडोअर खेळांसाठी प्रशस्त क्रीडा संकुल."
    },
    tags: { en: ["Large Ground", "Coaching", "Indoor Arena"], mr: ["मोठे मैदान", "क्रीडा प्रशिक्षण", "इनडोअर गेम्स"] }
  }
};

function switchFacility(key) {
  const data = facilityData[key];
  if (!data) return;

  const buttons = document.querySelectorAll('.facility-btn');
  buttons.forEach(btn => btn.classList.remove('active'));
  if (event && event.currentTarget) event.currentTarget.classList.add('active');

  const displayIcon = document.getElementById('facilityIcon');
  const displayTitle = document.getElementById('facilityTitle');
  const displayDesc = document.getElementById('facilityDesc');
  const displayTags = document.getElementById('facilityTags');

  if (displayIcon) displayIcon.innerHTML = `<i class="${data.icon}"></i>`;
  if (displayTitle) displayTitle.textContent = data.title[currentLang] || data.title.en;
  if (displayDesc) displayDesc.textContent = data.desc[currentLang] || data.desc.en;

  const tags = data.tags[currentLang] || data.tags.en;
  if (displayTags && tags) {
    displayTags.innerHTML = tags.map(t => `<span class="badge">${t}</span>`).join('');
  }
}

/* ========================================================
