/**
 * Shivaji English School & Junior College | Pandur Titha, Sindhudurg
 * Robust, Zero-Glitch Interactive Engine
 */

(function() {
  'use strict';

  function safeGetItem(key, defaultValue) {
    try { return localStorage.getItem(key) || defaultValue; } catch (e) { return defaultValue; }
  }

  function safeSetItem(key, value) {
    try { localStorage.setItem(key, value); } catch (e) {}
  }

  window.sesState = {
    lang: safeGetItem('ses_lang', 'en'),
    fontSize: safeGetItem('ses_font', 'font-md'),
    darkMode: safeGetItem('ses_dark', 'false') === 'true',
    smartBoard: safeGetItem('ses_smart', 'false') === 'true',
    currentFacility: 'smartClass',
    currentSop: 'sop1',
    currentGalleryFilter: 'all',
    activeLightboxIndex: 0
  };

  const state = window.sesState;

  // AI Knowledge Base Constants
  const aiKnowledge = {
    schoolName: "Shivaji English School & Junior College, Pandur Titha",
    location: "Pandur Titha, Taluka Kudal, District Sindhudurg, Maharashtra",
    pin: "416812",
    established: "1960",
    type: "Co-educational",
    udise: "27330408903",
    timings: {
      secondary: "11:30 AM to 4:30 PM",
      juniorCollege: "7:30 AM to 11:30 AM",
      office: "9:30 AM to 4:30 PM (Monday to Saturday)"
    },
    contact: {
      phone: "+91 (02362) 224-8090",
      email: "sohamjikamde@gmail.com",
    }
  };

  const facilitiesData = {
    smartClass: { icon: "fa-chalkboard", img: "images/facilities/smart-class.jpg", fallbackImg: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1000&q=80", titleEn: "Interactive Smart Classrooms", titleMr: "डिजिटल स्मार्ट क्लासरूम्स", descEn: "Equipped with high-definition interactive touchscreens, smart projectors, digital podiums, and ultra-high-speed broadband.", descMr: "उच्च दर्जाचे टच-सक्षम डिजिटल स्मार्ट बोर्ड आणि हाय-स्पीड इंटरनेटसह सुसज्ज वर्गखोल्या.", tagsEn: ["Interactive Touchscreen", "E-Learning Modules"], tagsMr: ["टच स्क्रीन", "ई-लर्निंग"] },
    itLab: { icon: "fa-desktop", img: "images/facilities/it-lab.jpg", fallbackImg: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1000&q=80", titleEn: "Computer & Information Technology (IT) Lab", titleMr: "कॉम्प्युटर आणि माहिती तंत्रज्ञान (IT) लॅब", descEn: "Modern computing center featuring 40+ networked Core-i5 systems with dual-boot Linux and Windows OS.", descMr: "४०+ अद्ययावत संगणक, अखंड हाय-स्पीड इंटरनेटसह सज्ज प्रशस्त IT लॅब.", tagsEn: ["40+ PCs", "Fiber Internet"], tagsMr: ["४०+ संगणक", "ऑप्टिकल फायबर"] },
    physicsLab: { icon: "fa-atom", img: "images/facilities/physics-lab.jpg", fallbackImg: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1000&q=80", titleEn: "Physics Laboratory", titleMr: "भौतिकशास्त्र प्रयोगशाळा", descEn: "Designed strictly per Maharashtra HSC Board specifications ensuring hands-on mastery of practical physics.", descMr: "महाराष्ट्र HSC बोर्डाच्या मानकांनुसार सुसज्ज भौतिकशास्त्र लॅब.", tagsEn: ["Optics", "Spectrometers"], tagsMr: ["ऑप्टिक्स डार्क रूम", "स्पेक्ट्रोमीटर"] },
    chemLab: { icon: "fa-flask", img: "images/facilities/chemistry-lab.jpg", fallbackImg: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?auto=format&fit=crop&w=1000&q=80", titleEn: "Chemistry Laboratory", titleMr: "रसायनशास्त्र प्रयोगशाळा", descEn: "Spacious, well-ventilated laboratory furnished with anti-corrosive granite counters and safety shower protocols.", descMr: "सुरक्षितता मानकांचे काटेकोर पालन करणारी हवेशीर प्रयोगशाळा.", tagsEn: ["Granite Workstations", "Safety Showers"], tagsMr: ["ग्रॅनाइट वर्कस्टेशन", "सुरक्षा शॉवर"] },
    bioLab: { icon: "fa-dna", img: "images/facilities/biology-lab.jpg", fallbackImg: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=1000&q=80", titleEn: "Biology Laboratory", titleMr: "जीवशास्त्र प्रयोगशाळा", descEn: "Equipped with binocular compound microscopes, preserved Konkan floral and faunal specimens.", descMr: "सूक्ष्मदर्शक आणि कोकणातील वनस्पती व प्राणी नमुन्यांची समृद्ध मांडणी.", tagsEn: ["Microscopes", "Botanical Specimens"], tagsMr: ["सूक्ष्मदर्शक", "हर्बेरियम नमुने"] },
    library: { icon: "fa-book-bookmark", img: "images/facilities/library.jpg", fallbackImg: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1000&q=80", titleEn: "Central Library & Reading Hall", titleMr: "मध्यवर्ती ग्रंथालय व वाचन कक्ष", descEn: "A serene academic sanctuary stocking over 15,000 reference textbooks and competitive exam guides.", descMr: "१५,००० हून अधिक संदर्भ पुस्तके आणि शांत वाचन कक्ष.", tagsEn: ["15,000+ Volumes", "Study Hall"], tagsMr: ["१५,०००+ पुस्तके", "१०० आसन वाचनालय"] },
    sports: { icon: "fa-volleyball", img: "images/facilities/sports-ground.jpg", fallbackImg: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80", titleEn: "Playground & Sports Complex", titleMr: "क्रीडांगण व क्रीडा संकुल", descEn: "Expansive multi-sport athletic grounds featuring volleyball courts, Kabaddi clay arenas, and running tracks.", descMr: "विस्तीर्ण मैदान, व्हॉलीबॉल कोर्ट, आणि इनडोअर खेळांसाठी कक्ष.", tagsEn: ["Kabaddi", "Volleyball Court"], tagsMr: ["कबड्डी", "व्हॉलीबॉल"] },
    auditorium: { icon: "fa-masks-theater", img: "images/facilities/auditorium.jpg", fallbackImg: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1000&q=80", titleEn: "Auditorium & Cultural Stage", titleMr: "सभागृह व सांस्कृतिक मंच", descEn: "A grand multi-purpose hall equipped with modern stage lighting and surround sound PA systems.", descMr: "अत्याधुनिक ध्वनी व्यवस्था, स्टेज लाइटिंग आणि भव्य सभागृह.", tagsEn: ["500+ Seats", "Stage Lighting"], tagsMr: ["५०० आसने", "स्टेज लाइटिंग"] }
  };

  const galleryData = [
    { id: 1, category: 'campus', img: 'images/gallery/campus-main.jpg', fallbackImg: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80', titleEn: 'Main Academic Campus & Building', titleMr: 'मुख्य इमारत व शाळा परिसर', descEn: 'The picturesque front view of Shivaji English School.', descMr: 'मुख्य महाविद्यालयीन इमारत.', dateEn: 'Campus View', dateMr: 'परिसर', catEn: 'Campus & Labs', catMr: 'परिसर व लॅब' },
    { id: 2, category: 'festivals', img: 'images/gallery/shiv-jayanti.jpg', fallbackImg: 'https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&w=1000&q=80', titleEn: 'Chhatrapati Shivaji Maharaj Jayanti Utsav', titleMr: 'छत्रपती शिवाजी महाराज जयंती', descEn: 'Grand annual procession.', descMr: 'भव्य शिवजयंती मिरवणूक.', dateEn: '19 February', dateMr: '१९ फेब्रुवारी', catEn: 'Shiv Jayanti', catMr: 'शिवजयंती' },
    { id: 3, category: 'campus', img: 'images/gallery/it-session.jpg', fallbackImg: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80', titleEn: '12th HSC IT Practical Lab Session', titleMr: '१२ वी IT प्रॅक्टिकल', descEn: 'Students developing responsive websites.', descMr: 'विद्यार्थी प्रॅक्टिकल्स करताना.', dateEn: 'HSC IT Practicals', dateMr: 'HSC IT प्रात्यक्षिके', catEn: 'IT Lab', catMr: 'IT लॅब' },
    { id: 4, category: 'cultural', img: 'images/gallery/annual-gathering.jpg', fallbackImg: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80', titleEn: 'Annual Gathering Traditional Folk Dance', titleMr: 'वार्षिक स्नेहसंमेलन', descEn: 'Vibrant cultural stage performances.', descMr: 'वार्षिक स्नेहसंमेलनातील नृत्य.', dateEn: 'Annual Gathering', dateMr: 'वार्षिक स्नेहसंमेलन', catEn: 'Annual Gathering', catMr: 'स्नेहसंमेलन' },
    { id: 6, category: 'sports', img: 'images/gallery/sports-meet.jpg', fallbackImg: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80', titleEn: 'Inter-School Sports Meet & Tournament', titleMr: 'वार्षिक क्रीडा महोत्सव', descEn: 'Thrilling inter-house matches.', descMr: 'विद्यार्थ्यांमधील चुरशीचे सामने.', dateEn: 'Sports Meet', dateMr: 'क्रीडा महोत्सव', catEn: 'Annual Sports', catMr: 'क्रीडा स्पर्धा' },
    { id: 7, category: 'science', img: 'images/gallery/science-fair.jpg', fallbackImg: 'https://images.unsplash.com/photo-1564325724739-bae0bd08762c?auto=format&fit=crop&w=800&q=80', titleEn: 'District-Level Science Exhibition Projects', titleMr: 'जिल्हास्तरीय विज्ञान प्रदर्शन', descEn: 'Innovative working models.', descMr: 'नाविन्यपूर्ण विज्ञान प्रकल्पांचे सादरीकरण.', dateEn: 'Science Fair', dateMr: 'विज्ञान प्रदर्शन', catEn: 'Science Exhibition', catMr: 'विज्ञान प्रदर्शन' }
  ];

  let activeGalleryList = [...galleryData];

  window.applyLanguage = function(lang) {
    safeSetItem('ses_lang', lang);
    state.lang = lang;
    const btnEn = document.getElementById('langEnBtn');
    const btnMr = document.getElementById('langMrBtn');
    if (btnEn && btnMr) {
      if (lang === 'mr') { btnMr.classList.add('active'); btnEn.classList.remove('active'); } 
      else { btnEn.classList.add('active'); btnMr.classList.remove('active'); }
    }
  };

  window.applyFontSize = function(sizeClass) {
    safeSetItem('ses_font', sizeClass);
    state.fontSize = sizeClass;
    document.documentElement.classList.remove('font-sm', 'font-md', 'font-lg', 'font-xl');
    document.documentElement.classList.add(sizeClass);
    ['fontSmBtn', 'fontMdBtn', 'fontLgBtn', 'fontXlBtn'].forEach(btnId => {
      const btn = document.getElementById(btnId);
      if (!btn) return;
      if (btnId.includes(sizeClass.split('-')[1].charAt(0).toUpperCase() + sizeClass.split('-')[1].slice(1))) { btn.classList.add('active'); } else { btn.classList.remove('active'); }
    });
  };

  window.applyTheme = function(isDark) {
    safeSetItem('ses_dark', isDark);
    state.darkMode = isDark;
    if (isDark) { document.documentElement.classList.add('dark-theme'); } else { document.documentElement.classList.remove('dark-theme'); }
  };

  window.openSettingsModal = function() {
    const modal = document.getElementById('settingsModal');
    if (modal) modal.classList.add('open');
  };

  window.closeSettingsModal = function() {
    const modal = document.getElementById('settingsModal');
    if (modal) modal.classList.remove('open');
  };

  window.switchMainTab = function(tabId) {
    document.querySelectorAll('.main-tab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-tab-target') === tabId);
    });
    document.querySelectorAll('.main-tab-pane').forEach(pane => {
      pane.classList.toggle('active', pane.id === 'tab-' + tabId);
    });
  };

  window.selectFacility = function(key) {
    state.currentFacility = key;
    const fac = facilitiesData[key];
    if (!fac) return;

    document.querySelectorAll('.facility-btn').forEach(btn => {
      if (btn.getAttribute('data-fac-key') === key) { btn.classList.add('active'); } else { btn.classList.remove('active'); }
    });

    const imgEl = document.getElementById('facilityImg');
    if (imgEl) {
      imgEl.src = fac.img || fac.fallbackImg;
      imgEl.onerror = function() { if (this.src !== fac.fallbackImg) { this.src = fac.fallbackImg; } this.onerror = null; };
    }
    
    const titleEl = document.getElementById('facilityTitle');
    if (titleEl) titleEl.textContent = state.lang === 'mr' ? fac.titleMr : fac.titleEn;
    
    const descEl = document.getElementById('facilityDesc');
    if (descEl) descEl.textContent = state.lang === 'mr' ? fac.descMr : fac.descEn;
  };

  window.zoomCurrentFacility = function() {
    const fac = facilitiesData[state.currentFacility];
    if (!fac) return;
    activeGalleryList = [{
      img: fac.img, fallbackImg: fac.fallbackImg, titleEn: fac.titleEn, titleMr: fac.titleMr, descEn: fac.descEn, descMr: fac.descMr, catEn: 'Facility', catMr: 'सुविधा', dateEn: 'Infrastructure', dateMr: 'सुविधा'
    }];
    window.openLightbox(0);
  };

  window.filterGalleryCategory = function(filter) {
    state.currentGalleryFilter = filter;
    document.querySelectorAll('.gallery-filter-btn').forEach(btn => {
      if (btn.getAttribute('data-filter') === filter) { btn.classList.add('active'); } else { btn.classList.remove('active'); }
    });

    const cards = document.querySelectorAll('.gallery-card');
    cards.forEach(card => {
      const cat = card.getAttribute('data-category');
      if (filter === 'all' || cat === filter) { card.style.display = 'block'; } else { card.style.display = 'none'; }
    });
  };

  window.openLightbox = function(index) {
    if (activeGalleryList.length === 1 && index !== 0) {
        activeGalleryList = [...galleryData];
    }
    if (index < 0 || index >= activeGalleryList.length) return;
    state.activeLightboxIndex = index;
    const item = activeGalleryList[state.activeLightboxIndex];
    const modal = document.getElementById('galleryLightbox');
    if (!modal || !item) return;

    const img = document.getElementById('lightboxImg');
    if (img) {
      img.src = item.img || item.fallbackImg;
      img.onerror = function() { if (this.src !== item.fallbackImg) { this.src = item.fallbackImg; } this.onerror = null; };
    }
    
    document.getElementById('lightboxTitle').textContent = state.lang === 'mr' ? item.titleMr : item.titleEn;
    
    const counterEl = document.getElementById('lightboxCounter');
    if (counterEl) {
      counterEl.textContent = `${state.activeLightboxIndex + 1} / ${activeGalleryList.length}`;
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  window.closeLightbox = function() {
    const modal = document.getElementById('galleryLightbox');
    if (modal) modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  window.nextLightbox = function() {
    if (activeGalleryList.length <= 1) return;
    window.openLightbox((state.activeLightboxIndex + 1) % activeGalleryList.length);
  };

  window.prevLightbox = function() {
    if (activeGalleryList.length <= 1) return;
    window.openLightbox((state.activeLightboxIndex - 1 + activeGalleryList.length) % activeGalleryList.length);
  };

  // AI Assistant with Backdrop Fix
  window.openAiChat = function() {
    const win = document.getElementById('aiChatWindow');
    const backdrop = document.getElementById('aiBackdrop');
    if (win) { win.classList.add('open'); document.getElementById('aiUserInput').focus(); }
    if (backdrop) { backdrop.classList.add('open'); document.body.style.overflow = 'hidden'; }
  };

  window.closeAiChat = function() {
    const win = document.getElementById('aiChatWindow');
    const backdrop = document.getElementById('aiBackdrop');
    if (win) win.classList.remove('open');
    if (backdrop) { backdrop.classList.remove('open'); document.body.style.overflow = ''; }
  };

  window.sendAiMessage = function() {
    const input = document.getElementById('aiUserInput');
    if (!input || !input.value.trim()) return;
    const text = input.value.trim();
    appendAiMessage(text, 'user');
    input.value = '';
    processAiText(text);
  };

  function appendAiMessage(msg, sender = 'user') {
    const chatMsgBox = document.getElementById('aiChatMessages');
    if (!chatMsgBox) return;
    const bubble = document.createElement('div');
    bubble.className = `chat-bubble ${sender}`;
    bubble.innerHTML = msg;
    chatMsgBox.appendChild(bubble);
    chatMsgBox.scrollTop = chatMsgBox.scrollHeight;
  }

  function processAiText(query) {
    let reply = "I am programmed to only provide verified school information. Please contact the school office directly at " + aiKnowledge.contact.phone + ".";
    setTimeout(() => { appendAiMessage(reply, 'ai'); }, 250);
  }

  function initApp() {
    window.applyLanguage(state.lang);
    window.applyFontSize(state.fontSize);
    window.applyTheme(state.darkMode);
    window.selectFacility('smartClass');
    window.filterGalleryCategory('all');

    const btnIds = ['settingsOpenBtn', 'settingsCloseBtn', 'btnCloseSettingsModal'];
    const actions = [window.openSettingsModal, window.closeSettingsModal, window.closeSettingsModal];
    btnIds.forEach((id, i) => { const el = document.getElementById(id); if (el) el.addEventListener('click', actions[i]); });

    const darkModeToggleBtn = document.getElementById('darkModeToggleBtn');
    if (darkModeToggleBtn) darkModeToggleBtn.addEventListener('click', () => window.applyTheme(!state.darkMode));

    const settingsModal = document.getElementById('settingsModal');
    if (settingsModal) settingsModal.addEventListener('click', (e) => { if (e.target === settingsModal) window.closeSettingsModal(); });

    const backToTopBtn = document.getElementById('backToTopBtn');
    if (backToTopBtn) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 400) { backToTopBtn.classList.add('show'); } 
        else { backToTopBtn.classList.remove('show'); }
      });
      backToTopBtn.addEventListener('click', () => { window.scrollTo({ top: 0, behavior: 'smooth' }); });
    }

    document.querySelectorAll('.facility-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const key = btn.getAttribute('data-fac-key');
        if (key) window.selectFacility(key);
      });
    });

    document.querySelectorAll('.gallery-filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');
        if (filter) window.filterGalleryCategory(filter);
      });
    });

    const lightboxCloseBtn = document.getElementById('lightboxCloseBtn');
    if (lightboxCloseBtn) lightboxCloseBtn.addEventListener('click', window.closeLightbox);

    const lightboxBackdrop = document.getElementById('lightboxBackdrop');
    if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', window.closeLightbox);

    const lightboxNextBtn = document.getElementById('lightboxNextBtn');
    if (lightboxNextBtn) lightboxNextBtn.addEventListener('click', window.nextLightbox);

    const lightboxPrevBtn = document.getElementById('lightboxPrevBtn');
    if (lightboxPrevBtn) lightboxPrevBtn.addEventListener('click', window.prevLightbox);

    const aiIds = ['heroAskAiBtn', 'aiCloseBtn', 'aiSendBtn'];
    const aiActions = [window.openAiChat, window.closeAiChat, window.sendAiMessage];
    aiIds.forEach((id, i) => { const el = document.getElementById(id); if (el) el.addEventListener('click', aiActions[i]); });

    const aiInput = document.getElementById('aiUserInput');
    if (aiInput) { aiInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') window.sendAiMessage(); }); }
    
    // Close AI Chat when clicking the dark backdrop
    const aiBackdrop = document.getElementById('aiBackdrop');
    if (aiBackdrop) aiBackdrop.addEventListener('click', window.closeAiChat);

    const inquiryForm = document.getElementById('inquiryForm');
    if (inquiryForm) {
      inquiryForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert("Thank you! Your admission inquiry has been successfully submitted.");
        inquiryForm.reset();
      });
    }

    document.querySelectorAll('.main-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const tabId = btn.getAttribute('data-tab-target');
        if (tabId) window.switchMainTab(tabId);
      });
    });
  }

  if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', initApp); } else { initApp(); }

  // Modern Mobile Accordion Drawer Toggle Logic (3-line button)
  const mobileNavToggle = document.getElementById('mobileNavToggle');
  const navMenu = document.getElementById('navMenu');
  const drawerCloseBtn = document.getElementById('drawerCloseBtn');
  const navToggleIcon = document.getElementById('navToggleIcon');

  if (mobileNavToggle && navMenu) {
    mobileNavToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const isOpen = navMenu.classList.contains('open');
      if (navToggleIcon) {
        navToggleIcon.className = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
      }
    });
  }

  if (drawerCloseBtn && navMenu) {
    drawerCloseBtn.addEventListener('click', () => {
      navMenu.classList.remove('open');
      if (navToggleIcon) navToggleIcon.className = "fa-solid fa-bars";
    });
  }

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu) navMenu.classList.remove('open');
      if (navToggleIcon) navToggleIcon.className = "fa-solid fa-bars";
    });
  });

})();
