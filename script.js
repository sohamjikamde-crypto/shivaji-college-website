/**
 * Shivaji English School & Junior College | Official Portal Script
 * Settings Engine (Language, Font Scale, Dark Mode, Smart Board) & AI Assistant
 */

// Application State
let appSettings = {
  lang: localStorage.getItem('sesjc_lang') || 'en',
  fontSize: localStorage.getItem('sesjc_font') || 'md',
  darkMode: localStorage.getItem('sesjc_dark') === 'true',
  smartBoard: localStorage.getItem('sesjc_smartboard') === 'true'
};

// Initialize all features on load
document.addEventListener('DOMContentLoaded', () => {
  applyAllSettings();
  initNoticeFilters();
  initFacilityViewer();
});

/* ==========================================================================
   1. Settings Modal Controls
   ========================================================================== */
function toggleSettingsModal() {
  const modal = document.getElementById('settingsModal');
  if (modal) {
    modal.classList.toggle('open');
  }
}

function handleModalBackdropClick(e) {
  if (e.target.id === 'settingsModal') {
    toggleSettingsModal();
  }
}

function resetAllSettings() {
  appSettings = {
    lang: 'en',
    fontSize: 'md',
    darkMode: false,
    smartBoard: false
  };
  localStorage.clear();
  applyAllSettings();
  alert(appSettings.lang === 'mr' ? 'सर्व सेटिंग्ज पूर्ववत करण्यात आल्या आहेत.' : 'All settings reset to default.');
}

function applyAllSettings() {
  // Apply Language
  setLanguage(appSettings.lang, false);

  // Apply Font Size
  changeFontSize(appSettings.fontSize, false);

  // Apply Dark Mode
  const darkBtn = document.getElementById('darkModeBtn');
  if (appSettings.darkMode) {
    document.body.classList.add('dark-theme');
    if (darkBtn) darkBtn.innerHTML = '<i class="fa-solid fa-moon"></i> On';
    if (darkBtn) darkBtn.classList.add('active');
  } else {
    document.body.classList.remove('dark-theme');
    if (darkBtn) darkBtn.innerHTML = '<i class="fa-solid fa-circle-half-stroke"></i> Off';
    if (darkBtn) darkBtn.classList.remove('active');
  }

  // Apply Smart Board View
  const smartBtn = document.getElementById('smartBoardBtn');
  if (appSettings.smartBoard) {
    document.body.classList.add('smartboard-mode');
    if (smartBtn) smartBtn.innerHTML = '<i class="fa-solid fa-display"></i> On';
    if (smartBtn) smartBtn.classList.add('active');
  } else {
    document.body.classList.remove('smartboard-mode');
    if (smartBtn) smartBtn.innerHTML = '<i class="fa-solid fa-display"></i> Off';
    if (smartBtn) smartBtn.classList.remove('active');
  }
}

/* ==========================================================================
   2. Font Size Adjuster
   ========================================================================== */
function changeFontSize(size, save = true) {
  document.body.classList.remove('font-sm', 'font-md', 'font-lg', 'font-xl');
  document.body.classList.add(`font-${size}`);

  if (save) {
    appSettings.fontSize = size;
    localStorage.setItem('sesjc_font', size);
  }

  // Highlight active button in settings
  const buttons = document.querySelectorAll('.font-btn-group .btn-setting-toggle');
  buttons.forEach(btn => btn.classList.remove('active'));
  const sizeMap = { sm: 0, md: 1, lg: 2, xl: 3 };
  if (buttons[sizeMap[size]]) {
    buttons[sizeMap[size]].classList.add('active');
  }
}

/* ==========================================================================
   3. Dark Mode & Smart Board Toggles
   ========================================================================== */
function toggleDarkMode() {
  appSettings.darkMode = !appSettings.darkMode;
  localStorage.setItem('sesjc_dark', appSettings.darkMode);
  
  const darkBtn = document.getElementById('darkModeBtn');
  if (appSettings.darkMode) {
    document.body.classList.add('dark-theme');
    if (darkBtn) {
      darkBtn.innerHTML = '<i class="fa-solid fa-moon"></i> On';
      darkBtn.classList.add('active');
    }
  } else {
    document.body.classList.remove('dark-theme');
    if (darkBtn) {
      darkBtn.innerHTML = '<i class="fa-solid fa-circle-half-stroke"></i> Off';
      darkBtn.classList.remove('active');
    }
  }
}

function toggleSmartBoard() {
  appSettings.smartBoard = !appSettings.smartBoard;
  localStorage.setItem('sesjc_smartboard', appSettings.smartBoard);

  const smartBtn = document.getElementById('smartBoardBtn');
  if (appSettings.smartBoard) {
    document.body.classList.add('smartboard-mode');
    if (smartBtn) {
      smartBtn.innerHTML = '<i class="fa-solid fa-display"></i> On';
      smartBtn.classList.add('active');
    }
  } else {
    document.body.classList.remove('smartboard-mode');
    if (smartBtn) {
      smartBtn.innerHTML = '<i class="fa-solid fa-display"></i> Off';
      smartBtn.classList.remove('active');
    }
  }
}

/* ==========================================================================
   4. Language Engine (English <-> मराठी)
   ========================================================================== */
const siteDictionary = {
  en: {
    settingsLabel: 'Settings / सेटिंग्ज',
    topAddr: 'Pandur Titha, Kudal, Sindhudurg - 416528',
    topAided: 'Estd. 1960 | Private-Aided',
    brandName: 'SHIVAJI ENGLISH SCHOOL',
    brandSub: '& Junior College of Arts, Science & Commerce',
    brandLoc: 'Pandur Titha, Sindhudurg',
    navHome: 'Home',
    navAbout: 'About',
    navAcademics: 'Academics',
    navNotices: 'Notices',
    navHub: 'Student Hub',
    navCampus: 'Campus',
    navFaculty: 'Faculty',
    navContact: 'Contact',
    heroBadge: '<i class="fa-solid fa-star"></i> 60+ Years of Academic Excellence (Since 1960)',
    heroTitle: 'Empowering Minds, <br><span class="text-highlight">Shaping Leaders</span> in Sindhudurg.',
    heroDesc: 'A premier co-educational, private-aided institution imparting high-quality education from Grades 5 through 12 in General Secondary, Arts, Commerce, Science, and Information Technology.',
    btnExplore: '<i class="fa-solid fa-compass"></i> Explore Courses',
    btnNotices: '<i class="fa-solid fa-bell"></i> Notice Board',
    btnAskAi: 'Ask College AI',
    stat1: 'Year Established',
    stat2: 'Students Enrolled',
    stat3: 'Board Exam Result',
    stat4: 'Expert Educators',
    kioskTitle: '<i class="fa-solid fa-display"></i> Campus Digital Kiosk',
    kioskBadge: '<i class="fa-solid fa-satellite-dish"></i> LIVE ADMISSIONS & UPDATES',
    kioskHead: 'Admissions Open for 2026–27',
    kioskDesc: 'Grades 5th to 10th (Semi-English & English) and 11th/12th (Science, Commerce, Arts & IT).',
    chip1: 'Exam Dates',
    chip2: 'Question Banks',
    chip3: 'Admission Info',
    chip4: '12th IT Syllabus',
    kioskAffiliation: '<i class="fa-solid fa-shield-halved"></i> Maharashtra State Board Affiliated (Pune Board)',
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
    ribbon1: '<i class="fa-solid fa-check-circle"></i> Government Recognized & Aided',
    ribbon2: '<i class="fa-solid fa-check-circle"></i> Co-Educational Campus',
    ribbon3: '<i class="fa-solid fa-check-circle"></i> Advanced Science & IT Labs',
    ribbon4: '<i class="fa-solid fa-check-circle"></i> Interactive Smart Classrooms',
    acadSub: 'Programs Offered',
    acadTitle: 'Academic Streams & Curriculum',
    acadLead: 'Comprehensive schooling from Grade 5 through 12 with specialized junior college wings.',
    course1Title: 'Secondary Schooling',
    course1Desc: 'Rigorous foundation adhering to Maharashtra State Board curriculum. Semi-English & English medium options with cultural activities.',
    course2Title: 'Science Stream',
    course2Desc: 'Physics, Chemistry, Mathematics, Biology, and Information Technology (IT) with hands-on laboratory coaching for CET/NEET.',
    course3Title: 'Commerce Stream',
    course3Desc: 'Book Keeping & Accountancy, Organization of Commerce, Economics, and Secretarial Practice / IT for corporate finance acumen.',
    course4Title: 'Arts & Humanities',
    course4Desc: 'History, Geography, Political Science, English, Marathi and Hindi literature fostering critical thinking and civil services prep.',
    noticeSub: 'Real-Time Bulletin',
    noticeTitle: 'Official Notice Board',
    noticeLead: 'Stay updated with latest announcements, meeting circulars, and exam schedules.',
    noticeParentTitle: 'Urgent Parent-Management Meeting with Principal',
    noticeParentDesc: 'All parents are hereby informed that an important meeting with the Institution Management and Principal is scheduled on Saturday, 22/08/2026 at 10:00 AM sharp in the school premises. All parents are requested to attend without fail. — Principal',
    contactSub: 'Reach Out',
    contactTitle: 'Contact & Location',
    contactLead: 'Visit our campus at Pandur Titha or connect with the administrative office.',
    contactCardHead: 'School Office Details',
    contactCardSub: 'For admissions, verification, certificates, and student inquiries:',
    contactLblAddr: 'Campus Address:',
    contactValAddr: 'Shivaji English School & Junior College,<br>Pandur Titha, Taluka: Kudal,<br>District: Sindhudurg, Maharashtra - 416528',
    contactLblPhone: 'Phone:',
    contactLblEmail: 'Email:',
    contactLblHours: 'Office Hours:',
    contactValHours: 'Monday – Saturday: 9:30 AM to 5:00 PM',
    inquiryHead: 'Send an Inquiry / Message',
    lblFormName: 'Student / Parent Name',
    lblFormPhone: 'Phone Number',
    lblFormPurpose: 'Inquiry Purpose',
    lblFormMsg: 'Message / Details',
    btnSubmitForm: '<i class="fa-solid fa-paper-plane"></i> Submit Inquiry',
    aiFloatingBtnText: 'Shivaji AI Assistant'
  },
  mr: {
    settingsLabel: 'सेटिंग्ज / Settings',
    topAddr: 'पांडुर तिठा, कुडाळ, सिंधुदुर्ग - ४१६५२८',
    topAided: 'स्थापना १९६० | शासकीय अनुदानित',
    brandName: 'शिवाजी इंग्लिश स्कूल',
    brandSub: '& कनिष्ठ महाविद्यालय (कला, वाणिज्य, विज्ञान व आयटी)',
    brandLoc: 'पांडुर तिठा, सिंधुदुर्ग',
    navHome: 'मुख्यपृष्ठ',
    navAbout: 'परिचय',
    navAcademics: 'अभ्यासक्रम',
    navNotices: 'सूचना फलक',
    navHub: 'विद्यार्थी मंच',
    navCampus: 'परिसर',
    navFaculty: 'शिक्षक वर्ग',
    navContact: 'संपर्क',
    heroBadge: '<i class="fa-solid fa-star"></i> ६०+ वर्षांची उज्ज्वल शैक्षणिक परंपरा (स्थापना १९६०)',
    heroTitle: 'ज्ञान, संस्कार आणि <br><span class="text-highlight">उज्ज्वल भविष्य</span> घडवणारी संस्था.',
    heroDesc: 'इयत्ता ५ वी ते १२ वी पर्यंत सेमी-इंग्रजी/इंग्रजी माध्यम, कला, वाणिज्य, विज्ञान आणि माहिती तंत्रज्ञान (IT) चे दर्जेदार शिक्षण देणारी सिंधुदुर्गातील नामांकित खाजगी अनुदानित संस्था.',
    btnExplore: '<i class="fa-solid fa-compass"></i> अभ्यासक्रम पहा',
    btnNotices: '<i class="fa-solid fa-bell"></i> सूचना फलक',
    btnAskAi: 'शिवाजी AI मदतनीस',
    stat1: 'स्थापना वर्ष',
    stat2: 'विद्यार्थी संख्या',
    stat3: 'बोर्ड परीक्षा निकाल',
    stat4: 'अनुभवी शिक्षकवृंद',
    kioskTitle: '<i class="fa-solid fa-display"></i> डिजिटल सूचना केंद्र',
    kioskBadge: '<i class="fa-solid fa-satellite-dish"></i> थेट प्रवेश व अपडेट्स',
    kioskHead: 'शैक्षणिक वर्ष २०२६-२७ प्रवेश सुरू',
    kioskDesc: 'इयत्ता ५ वी ते १० वी आणि ११ वी/१२ वी (विज्ञान, वाणिज्य, कला व IT शाखा).',
    chip1: 'परीक्षा वेळापत्रक',
    chip2: 'प्रश्नपत्रिका संच',
    chip3: 'प्रवेश माहिती',
    chip4: '१२वी IT अभ्यासक्रम',
    kioskAffiliation: '<i class="fa-solid fa-shield-halved"></i> महाराष्ट्र राज्य माध्यमिक व उच्च माध्यमिक शिक्षण मंडळ (पुणे)',
    aboutSub: 'परंपरा व ध्येय',
    aboutTitle: 'आमच्या संस्थेविषयी',
    aboutLead: 'गेल्या ६ दशकांपासून सिंधुदुर्ग जिल्ह्यातील विद्यार्थ्यांना संस्कारक्षम व गुणवत्तापूर्ण शिक्षण देत आहोत.',
    aboutHistTitle: 'आमचा गौरवशाली इतिहास (स्थापना १९६०)',
    aboutHistP1: 'पांडुर तिठा येथे १९६० साली स्थापन झालेले शिवाजी इंग्लिश स्कूल व कनिष्ठ महाविद्यालय हे ग्रामीण भागातील विद्यार्थ्यांना दर्जेदार शिक्षण देण्यासाठी अविरत कार्यरत आहे.',
    aboutHistP2: 'शाळेने आजवर अनेक गुणवत्तावंत विद्यार्थी, क्रीडापटू, डॉक्टर, इंजिनिअर व समाजसेवक घडवले आहेत.',
    aboutVisTitle: 'आमचे ध्येय (Vision)',
    aboutVisP: 'नैतिक मूल्ये, बौद्धिक प्रगल्भता आणि आधुनिक तंत्रज्ञानाने सुसज्ज असलेली आत्मनिर्भर पिढी घडवणे.',
    aboutMisTitle: 'आमची उद्दिष्टे (Mission)',
    aboutMisP: 'स्मार्ट वर्गखोल्या, अद्ययावत प्रयोगशाळा, संगणक शिक्षण व क्रीडा मार्गदर्शनाद्वारे विद्यार्थ्यांचा सर्वांगीण विकास साधणे.',
    ribbon1: '<i class="fa-solid fa-check-circle"></i> शासनमान्य व पूर्ण अनुदानित',
    ribbon2: '<i class="fa-solid fa-check-circle"></i> सह-शिक्षण (मुले व मुली)',
    ribbon3: '<i class="fa-solid fa-check-circle"></i> अद्ययावत विज्ञान व संगणक लॅब',
    ribbon4: '<i class="fa-solid fa-check-circle"></i> डिजिटल स्मार्ट वर्गखोल्या',
    acadSub: 'उपलब्ध शाखा',
    acadTitle: 'शालेय व कनिष्ठ महाविद्यालयीन अभ्यासक्रम',
    acadLead: 'इयत्ता ५ वी ते १० वी माध्यमिक शाळा आणि ११ वी व १२ वी उच्च माध्यमिक शाखा.',
    course1Title: 'माध्यमिक शाळा (इ. ५ वी ते १० वी)',
    course1Desc: 'महाराष्ट्र राज्य बोर्डाचा अभ्यासक्रम. सेमी-इंग्रजी व इंग्रजी माध्यम, विज्ञान प्रात्यक्षिके, स्काऊट-गाइड आणि व्यक्तिमत्त्व विकास.',
    course2Title: 'विज्ञान शाखा (११वी व १२वी)',
    course2Desc: 'भौतिकशास्त्र, रसायन, गणित, जीवशास्त्र व माहिती तंत्रज्ञान (IT). MHT-CET, NEET साठी अद्ययावत प्रयोगशाळांसह विशेष मार्गदर्शन.',
    course3Title: 'वाणिज्य शाखा (११वी व १२वी)',
    course3Desc: 'बुक कीपिंग, ऑर्गनायझेशन ऑफ कॉमर्स, अर्थशास्त्र आणि सेक्रेटरीयल प्रॅक्टिस / IT सह बँकिंग व कॉर्पोरेट वित्त शिक्षण.',
    course4Title: 'कला शाखा (११वी व १२वी)',
    course4Desc: 'इतिहास, भूगोल, राज्यशास्त्र, मराठी, हिंदी व इंग्रजी साहित्यासह स्पर्धा परीक्षांसाठी (MPSC/UPSC) पायाभूत तयारी.',
    noticeSub: 'ताज्या घडामोडी',
    noticeTitle: 'अधिकृत सूचना फलक',
    noticeLead: 'शाळेतील सर्व महत्त्वाच्या सूचना, सभा व परीक्षांचे वेळापत्रक.',
    noticeParentTitle: 'पालक-संस्थाचालक व मुख्याध्यापक संयुक्त सभा सूचना',
    noticeParentDesc: 'सर्व विद्यार्थ्यांच्या पालकांना कळविण्यात येते की शनिवार दिनांक २२/०८/२०२६ रोजी शाळेत सकाळी ठीक १०.०० वाजता संस्थाचालक व मुख्याध्यापक यांच्या समवेत सभा आयोजित केली आहे. तरी सर्व पालकांनी आवर्जून उपस्थित राहावे. — मुख्याध्यापक',
    contactSub: 'संपर्क करा',
    contactTitle: 'पत्ता व संपर्क तपशील',
    contactLead: 'पांडुर तिठा येथील कार्यालयास भेट द्या किंवा थेट संपर्क साधा.',
    contactCardHead: 'शालेय कार्यालय तपशील',
    contactCardSub: 'प्रवेश, दाखले, गुणपत्रिका व इतर चौकशीसाठी:',
    contactLblAddr: 'शाळेचा पत्ता:',
    contactValAddr: 'शिवाजी इंग्लिश स्कूल व कनिष्ठ महाविद्यालय,<br>पांडुर तिठा, ता. कुडाळ,<br>जि. सिंधुदुर्ग, महाराष्ट्र - ४१६५२८',
    contactLblPhone: 'फोन नंबर:',
    contactLblEmail: 'ईमेल:',
    contactLblHours: 'कार्यालयीन वेळ:',
    contactValHours: 'सोमवार ते शनिवार: सकाळी ९:३० ते संध्याकाळी ५:००',
    inquiryHead: 'संदेश / चौकशी पाठवा',
    lblFormName: 'विद्यार्थी / पालकांचे नाव',
    lblFormPhone: 'मोबाईल नंबर',
    lblFormPurpose: 'चौकशीचा विषय',
    lblFormMsg: 'संदेश / तपशील',
    btnSubmitForm: '<i class="fa-solid fa-paper-plane"></i> संदेश पाठवा',
    aiFloatingBtnText: 'शिवाजी AI मदतनीस'
  }
};

function setLanguage(lang, save = true) {
  if (save) {
    appSettings.lang = lang;
    localStorage.setItem('sesjc_lang', lang);
  }

  const dict = siteDictionary[lang];
  if (!dict) return;

  // Toggle active class on language buttons in Settings
  const enBtn = document.getElementById('langEnBtn');
  const mrBtn = document.getElementById('langMrBtn');
  if (enBtn && mrBtn) {
    if (lang === 'mr') {
      mrBtn.classList.add('active');
      enBtn.classList.remove('active');
    } else {
      enBtn.classList.add('active');
      mrBtn.classList.remove('active');
    }
  }

  // Safe DOM text updater
  const updateText = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  };
  const updateHtml = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = val;
  };
  const updateClassText = (cls, val) => {
    const el = document.querySelector(`.${cls}`);
    if (el) el.textContent = val;
  };

  // Update Top Bar & Brand
  updateText('settingsBtnLabel', dict.settingsLabel);
  updateText('topBarAddress', dict.topAddr);
  updateText('topBarAided', dict.topAided);
  updateClassText('college-name', dict.brandName);
  updateClassText('college-sub', dict.brandSub);
  updateClassText('location-tag', dict.brandLoc);

  // Update Navigation
  updateClassText('nav-txt-home', dict.navHome);
  updateClassText('nav-txt-about', dict.navAbout);
  updateClassText('nav-txt-academics', dict.navAcademics);
  updateClassText('nav-txt-notices', dict.navNotices);
  updateClassText('nav-txt-hub', dict.navHub);
  updateClassText('nav-txt-campus', dict.navCampus);
  updateClassText('nav-txt-faculty', dict.navFaculty);
  updateClassText('nav-txt-contact', dict.navContact);

  // Update Hero Section
  updateHtml('heroBadge', dict.heroBadge);
  updateHtml('heroTitle', dict.heroTitle);
  updateText('heroDesc', dict.heroDesc);
  updateHtml('btnExploreCourses', dict.btnExplore);
  updateHtml('btnNoticeBoard', dict.btnNotices);
  updateText('btnAskAi', dict.btnAskAi);
  updateText('statLabel1', dict.stat1);
  updateText('statLabel2', dict.stat2);
  updateText('statLabel3', dict.stat3);
  updateText('statLabel4', dict.stat4);

  // Update Digital Kiosk
  updateHtml('kioskTitle', dict.kioskTitle);
  updateHtml('kioskLiveBadge', dict.kioskBadge);
  updateText('kioskHeading', dict.kioskHead);
  updateText('kioskDesc', dict.kioskDesc);
  updateText('chip1', dict.chip1);
  updateText('chip2', dict.chip2);
  updateText('chip3', dict.chip3);
  updateText('chip4', dict.chip4);
  updateHtml('kioskFooterNote', dict.kioskAffiliation);

  // Update About Section
  updateText('aboutSub', dict.aboutSub);
  updateText('aboutTitle', dict.aboutTitle);
  updateText('aboutLead', dict.aboutLead);
  updateText('aboutHistTitle', dict.aboutHistTitle);
  updateHtml('aboutHistP1', dict.aboutHistP1);
  updateHtml('aboutHistP2', dict.aboutHistP2);
  updateText('aboutVisTitle', dict.aboutVisTitle);
  updateText('aboutVisP', dict.aboutVisP);
  updateText('aboutMisTitle', dict.aboutMisTitle);
  updateText('aboutMisP', dict.aboutMisP);
  updateHtml('ribbon1', dict.ribbon1);
  updateHtml('ribbon2', dict.ribbon2);
  updateHtml('ribbon3', dict.ribbon3);
  updateHtml('ribbon4', dict.ribbon4);

  // Update Academics Section
  updateText('acadSub', dict.acadSub);
  updateText('acadTitle', dict.acadTitle);
  updateText('acadLead', dict.acadLead);
  updateText('course1Title', dict.course1Title);
  updateText('course1Desc', dict.course1Desc);
  updateText('course2Title', dict.course2Title);
  updateText('course2Desc', dict.course2Desc);
  updateText('course3Title', dict.course3Title);
  updateText('course3Desc', dict.course3Desc);
  updateText('course4Title', dict.course4Title);
  updateText('course4Desc', dict.course4Desc);

  // Update Notice Section
  updateText('noticeSub', dict.noticeSub);
  updateText('noticeTitle', dict.noticeTitle);
  updateText('noticeLead', dict.noticeLead);
  updateText('noticeParentTitle', dict.noticeParentTitle);
  updateText('noticeParentDesc', dict.noticeParentDesc);

  // Update Contact Section
  updateText('contactSub', dict.contactSub);
  updateText('contactTitle', dict.contactTitle);
  updateText('contactLead', dict.contactLead);
  updateText('contactCardHead', dict.contactCardHead);
  updateText('contactCardSub', dict.contactCardSub);
  updateText('contactLblAddr', dict.contactLblAddr);
  updateHtml('contactValAddr', dict.contactValAddr);
  updateText('contactLblPhone', dict.contactLblPhone);
  updateText('contactLblEmail', dict.contactLblEmail);
  updateText('contactLblHours', dict.contactLblHours);
  updateText('contactValHours', dict.contactValHours);
  updateText('inquiryHead', dict.inquiryHead);
  updateText('lblFormName', dict.lblFormName);
  updateText('lblFormPhone', dict.lblFormPhone);
  updateText('lblFormPurpose', dict.lblFormPurpose);
  updateText('lblFormMsg', dict.lblFormMsg);
  updateHtml('btnSubmitForm', dict.btnSubmitForm);

  // Update Floating AI Button
  updateText('aiFloatingBtnText', dict.aiFloatingBtnText);

  // Update Campus Facility Names
  updateFacilityLanguage(lang);
}

/* ==========================================================================
   5. Interactive Facilities Viewer
   ========================================================================== */
const facilityContent = {
  smartClass: {
    icon: 'fa-solid fa-chalkboard',
    title: { en: 'Interactive Smart Classrooms', mr: 'डिजिटल स्मार्ट वर्गखोल्या' },
    desc: {
      en: 'Equipped with ultra-responsive interactive touch smart-boards, high-definition audio-visual systems, and broadband internet for dynamic multimedia lectures.',
      mr: 'टच स्क्रीन डिजिटल स्मार्ट बोर्ड, ऑडिओ-व्हिज्युअल मीडिया आणि आधुनिक ई-लर्निंग सुविधांनी सुसज्ज वर्गखोल्या.'
    },
    tags: { en: ['Touch Enabled', 'Audio-Visual', 'E-Learning'], mr: ['टच स्क्रीन', 'ऑडिओ-व्हिज्युअल', 'ई-लर्निंग'] }
  },
  computerLab: {
    icon: 'fa-solid fa-desktop',
    title: { en: 'Advanced Computer & IT Lab', mr: 'अद्ययावत संगणक व IT लॅब' },
    desc: {
      en: 'Over 40 high-performance computer workstations with Linux/Windows, HTML5/CSS3/JavaScript IDEs, and 1:1 student PC access.',
      mr: '४० पेक्षा जास्त संगणक, हाय-स्पीड इंटरनेट आणि १२वी IT प्रॅक्टिकल्ससाठी लागणारे आधुनिक सॉफ्टवेअर्स.'
    },
    tags: { en: ['High-Speed Wi-Fi', 'Linux & Windows', '1:1 PC Ratio'], mr: ['हाय-स्पीड इंटरनेट', 'लिनक्स व विंडोज', '१:१ कॉम्प्युटर'] }
  },
  scienceLab: {
    icon: 'fa-solid fa-atom',
    title: { en: 'Specialized Science Laboratories', mr: 'विज्ञान प्रयोगशाळा (भौतिक, रसायन व जीवशास्त्र)' },
    desc: {
      en: 'Individual Physics, Chemistry, and Biology laboratories equipped with modern precision apparatus and safety measures.',
      mr: 'भौतिकशास्त्र, रसायनशास्त्र आणि जीवशास्त्राच्या अत्याधुनिक उपकरणांनी सुसज्ज स्वतंत्र व सुरक्षित प्रयोगशाळा.'
    },
    tags: { en: ['Modern Apparatus', 'Physics & Chem', 'Safety Certified'], mr: ['अद्ययावत उपकरणे', 'सुरक्षित प्रयोगशाळा', 'बोर्ड प्रॅक्टिकल'] }
  },
  library: {
    icon: 'fa-solid fa-book-bookmark',
    title: { en: 'Central Knowledge Library', mr: 'मध्यवर्ती ज्ञान ग्रंथालय व अभ्यासिका' },
    desc: {
      en: 'Over 10,000 reference books, state board textbooks, competitive exam guides (CET/NEET/JEE), and quiet reading hall.',
      mr: '१०,००० हून अधिक पुस्तके, संदर्भ ग्रंथ, स्पर्धा परीक्षा मार्गदर्शिका व शांत अभ्यासिका कक्ष.'
    },
    tags: { en: ['10,000+ Books', 'Reading Hall', 'Competitive Guides'], mr: ['१०,०००+ पुस्तके', 'अभ्यासिका', 'मार्गदर्शन'] }
  },
  sports: {
    icon: 'fa-solid fa-volleyball',
    title: { en: 'Playground & Sports Complex', mr: 'विशाल क्रीडांगण व क्रीडा सुविधा' },
    desc: {
      en: 'Expansive playground supporting volleyball, kabaddi, kho-kho, cricket, and indoor arenas for chess and carrom.',
      mr: 'व्हॉलीबॉल, कबड्डी, खो-खो, क्रिकेट आणि इनडोअर खेळांसाठी प्रशस्त क्रीडांगण व साहित्य.'
    },
    tags: { en: ['Large Ground', 'District Coaching', 'Indoor Arena'], mr: ['मोठे मैदान', 'क्रीडा प्रशिक्षण', 'इनडोअर गेम्स'] }
  }
};

let currentFacilityKey = 'smartClass';

function initFacilityViewer() {
  switchFacility('smartClass');
}

function switchFacility(key, btnElement = null) {
  currentFacilityKey = key;
  const data = facilityContent[key];
  if (!data) return;

  if (btnElement) {
    const btns = document.querySelectorAll('.facility-btn');
    btns.forEach(b => b.classList.remove('active'));
    btnElement.classList.add('active');
  }

  const icon = document.getElementById('facilityIcon');
  const title = document.getElementById('facilityTitle');
  const desc = document.getElementById('facilityDesc');
  const tagsContainer = document.getElementById('facilityTags');

  const lang = appSettings.lang;
  if (icon) icon.innerHTML = `<i class="${data.icon}"></i>`;
  if (title) title.textContent = data.title[lang] || data.title.en;
  if (desc) desc.textContent = data.desc[lang] || data.desc.en;

  const tagList = data.tags[lang] || data.tags.en;
  if (tagsContainer && tagList) {
    tagsContainer.innerHTML = tagList.map(t => `<span class="badge">${t}</span>`).join('');
  }
}

function updateFacilityLanguage(lang) {
  const facBtnMap = {
    facBtn1: { en: 'Smart Classrooms', mr: 'स्मार्ट वर्गखोल्या' },
    facBtn2: { en: 'Computer & IT Lab', mr: 'संगणक व IT लॅब' },
    facBtn3: { en: 'Science Laboratories', mr: 'विज्ञान प्रयोगशाळा' },
    facBtn4: { en: 'Central Library', mr: 'मध्यवर्ती ग्रंथालय' },
    facBtn5: { en: 'Playground & Sports', mr: 'क्रीडांगण व क्रीडा' }
  };
  for (let id in facBtnMap) {
    const el = document.getElementById(id);
    if (el) el.textContent = facBtnMap[id][lang] || facBtnMap[id].en;
  }
  switchFacility(currentFacilityKey);
}

/* ==========================================================================
   6. Navigation & Mobile Menu
   ========================================================================== */
function toggleMobileMenu() {
  const navMenu = document.getElementById('navMenu');
  const toggleBtn = document.getElementById('mobileNavToggle');
  if (navMenu) {
    navMenu.classList.toggle('open');
    if (toggleBtn) {
      const icon = toggleBtn.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
      }
    }
  }
}

function navigateToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

function initNoticeFilters() {
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      const navMenu = document.getElementById('navMenu');
      if (navMenu) navMenu.classList.remove('open');
    });
  });
}

function viewNoticeAlert() {
  const msg = appSettings.lang === 'mr'
    ? `अधिकृत सूचना:\n\nपालक-संस्थाचालक व मुख्याध्यापक संयुक्त सभा शनिवार दि. २२/०८/२०२६ रोजी सकाळी १०:०० वाजता आयोजित केली आहे. सर्व पालकांनी आवर्जून उपस्थित राहावे.\n— मुख्याध्यापक, शिवाजी इंग्लिश स्कूल`
    : `Official Notice:\n\nParent-Management Meeting with the Principal is scheduled on Saturday, 22/08/2026 at 10:00 AM sharp in the school campus. All parents are requested to attend.\n— Principal, Shivaji English School`;
  alert(msg);
}

function handleFormSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('fullName').value;
  const feedback = document.getElementById('formFeedback');
  if (feedback) {
    const msg = appSettings.lang === 'mr'
      ? `<span style="color: #059669;"><i class="fa-solid fa-circle-check"></i> धन्यवाद, ${name}! आपला संदेश शाळेच्या कार्यालयास प्राप्त झाला आहे.</span>`
      : `<span style="color: #059669;"><i class="fa-solid fa-circle-check"></i> Thank you, ${name}! Your inquiry has been received by the school administration.</span>`;
    feedback.innerHTML = msg;
  }
  document.getElementById('inquiryForm').reset();
}

/* ==========================================================================
   7. Shivaji AI Assistant
   ========================================================================== */
function toggleAiChat() {
  const chat = document.getElementById('aiChatWindow');
  if (chat) chat.classList.toggle('open');
}

function openAssistantModal() {
  const chat = document.getElementById('aiChatWindow');
  if (chat) {
    chat.classList.add('open');
    const input = document.getElementById('aiUserInput');
    if (input) input.focus();
  }
}

function sendPrompt(query) {
  const input = document.getElementById('aiUserInput');
  if (input) {
    input.value = query;
    handleAiUserMessage();
  }
}

function openAssistantWithQuery(query) {
  openAssistantModal();
  sendPrompt(query);
}

function handleAiUserMessage() {
  const input = document.getElementById('aiUserInput');
  const container = document.getElementById('aiChatMessages');
  if (!input || !container) return;

  const rawText = input.value.trim();
  if (!rawText) return;

  // Add User bubble
  appendChatBubble(rawText, 'user');
  input.value = '';

  // Add Typing indicator
  const typing = document.createElement('div');
  typing.className = 'chat-bubble ai';
  typing.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> ' + (appSettings.lang === 'mr' ? 'माहिती शोधत आहे...' : 'Thinking...');
  container.appendChild(typing);
  container.scrollTop = container.scrollHeight;

  setTimeout(() => {
    container.removeChild(typing);
    const reply = getBilingualAiResponse(rawText.toLowerCase());
    appendChatBubble(reply, 'ai');
  }, 400);
}

function appendChatBubble(html, sender) {
  const container = document.getElementById('aiChatMessages');
  if (!container) return;
  const bubble = document.createElement('div');
  bubble.className = `chat-bubble ${sender}`;
  bubble.innerHTML = html;
  container.appendChild(bubble);
  container.scrollTop = container.scrollHeight;
}

function getBilingualAiResponse(query) {
  const isMarathi = (appSettings.lang === 'mr') || /[\u0900-\u097F]/.test(query);

  if (isMarathi) {
    if (query.includes('नमस्कार') || query.includes('hello') || query.includes('hi')) {
      return `नमस्ते! शिवाजी इंग्लिश स्कूल आणि कनिष्ठ महाविद्यालय AI मदतनीस मध्ये आपले स्वागत आहे. मी आपल्याला प्रवेश, १२वी आयटी किंवा अभ्यासक्रमाबद्दल कशी मदत करू शकतो?`;
    }
    if (query.includes('इतिहास') || query.includes('स्थापना') || query.includes('1960') || query.includes('माहिती')) {
      return `🏛️ <strong>शाळेचा इतिहास:</strong><br>शिवाजी इंग्लिश स्कूल व कनिष्ठ महाविद्यालयाची स्थापना <strong>१९६०</strong> मध्ये पांडुर तिठा येथे झाली. ही संस्था खाजगी अनुदानित असून इयत्ता ५ वी ते १२ वी पर्यंतचे दर्जेदार शिक्षण देते.`;
    }
    if (query.includes('शाखा') || query.includes('प्रवेश') || query.includes('विषय') || query.includes('अभ्यासक्रम')) {
      return `📚 <strong>उपलब्ध शाखा:</strong><br>
      • <strong>माध्यमिक:</strong> इयत्ता ५ वी ते १० वी (सेमी-इंग्रजी व इंग्रजी माध्यम)<br>
      • <strong>विज्ञान शाखा (११वी व १२वी):</strong> भौतिकशास्त्र, रसायन, गणित, जीवशास्त्र व IT<br>
      • <strong>वाणिज्य शाखा:</strong> बुक कीपिंग, OCM, अर्थशास्त्र, SP / IT<br>
      • <strong>कला शाखा:</strong> इतिहास, भूगोल, राज्यशास्त्र व भाषा विषय.`;
    }
    if (query.includes('आयटी') || query.includes('it') || query.includes('प्रॅक्टिकल') || query.includes('sop')) {
      return `💻 <strong>१२वी आयटी (IT) अभ्यासक्रम:</strong><br>
      १. Advanced Web Designing (HTML5, CSS3 Grid/Flexbox)<br>
      २. Client-Side Scripting (JavaScript DOM & Validation)<br>
      ३. Advanced JavaScript व Server-Side (PHP Basics)<br>
      ४. Emerging Technologies (Cloud Computing, AI, 5G)<br>
      ५. E-Commerce & E-Governance.`;
    }
    if (query.includes('पत्ता') || query.includes('संपर्क') || query.includes('फोन') || query.includes('कुठे')) {
      return `📍 <strong>पत्ता व संपर्क:</strong><br>
      • <strong>पत्ता:</strong> शिवाजी इंग्लिश स्कूल व कनिष्ठ महाविद्यालय, पांडुर तिठा, ता. कुडाळ, जि. सिंधुदुर्ग - ४१६५२८.<br>
      • <strong>फोन:</strong> +91 2362 232000<br>
      • <strong>कार्यालयीन वेळ:</strong> सोम-शनि, सकाळी ९:३० ते संध्याकाळी ५:००.`;
    }
    return `मी आपल्याला <strong>प्रवेश प्रक्रिया</strong>, <strong>११वी/१२वी शाखा (विज्ञान, वाणिज्य, कला, IT)</strong>, <strong>शाळेचा इतिहास</strong> किंवा <strong>१२वी IT प्रॅक्टिकल्स</strong> बाबत माहिती देऊ शकतो.`;
  }

  // English Knowledge Base
  if (query.includes('hi') || query.includes('hello') || query.includes('namaste')) {
    return `Namaste! Welcome to Shivaji English School & Junior College AI Assistant. How can I help you with admissions, IT syllabus, or courses today?`;
  }
  if (query.includes('establish') || query.includes('history') || query.includes('1960') || query.includes('about')) {
    return `🏛️ <strong>About Institution:</strong><br>Established in <strong>1960</strong> at Pandur Titha, Sindhudurg, Maharashtra. It is a premier co-educational, private-aided institution providing education for Grades 5 through 12.`;
  }
  if (query.includes('stream') || query.includes('course') || query.includes('subject') || query.includes('admission')) {
    return `📚 <strong>Academic Programs:</strong><br>
    • <strong>Secondary School:</strong> Grades 5–10<br>
    • <strong>Science (11th & 12th):</strong> PCMB + Information Technology (IT)<br>
    • <strong>Commerce (11th & 12th):</strong> BK, OCM, Economics, SP / IT<br>
    • <strong>Arts (11th & 12th):</strong> History, Geography, Political Science, Languages.`;
  }
  if (query.includes('it') || query.includes('sop') || query.includes('project')) {
    return `💻 <strong>12th Standard IT Syllabus:</strong><br>
    1. Advanced Web Designing (HTML5/CSS3)<br>
    2. Client-Side Scripting (JavaScript Validation)<br>
    3. Server-Side Scripting (PHP)<br>
    4. Emerging Tech (Cloud, AI, 5G)<br>
    5. E-Commerce & Cyber Law.`;
  }
  if (query.includes('contact') || query.includes('location') || query.includes('where') || query.includes('address')) {
    return `📍 <strong>Contact Details:</strong><br>
    • <strong>Address:</strong> Pandur Titha, Taluka Kudal, Sindhudurg, MH - 416528.<br>
    • <strong>Phone:</strong> +91 2362 232000 (Mon–Sat, 9:30 AM to 5:00 PM).`;
  }

  return `You can ask me about <strong>Admissions</strong>, <strong>Junior College Streams (Science, Commerce, Arts, IT)</strong>, <strong>School History</strong>, or <strong>12th IT Practical SOPs</strong>.`;
}
