/**
 * Shivaji English School & Junior College | Official Portal Script
 * Global Engine: Settings Modal, 8 Campus Facilities, Bilingual Translation & AI
 */

// Global State
window.appState = {
  lang: localStorage.getItem('sesjc_lang') || 'en',
  fontSize: localStorage.getItem('sesjc_font') || 'md',
  darkMode: localStorage.getItem('sesjc_dark') === 'true',
  smartBoard: localStorage.getItem('sesjc_smart') === 'true'
};

// Complete 8 Campus Facilities Data
const campusFacilities = {
  smartClass: {
    icon: 'fa-solid fa-chalkboard',
    title: { en: 'Interactive Smart Classrooms', mr: 'डिजिटल स्मार्ट वर्गखोल्या' },
    desc: {
      en: 'Equipped with ultra-responsive interactive touch smart-boards, high-definition audio-visual projection systems, and high-speed internet connectivity for engaging multimedia delivery.',
      mr: 'टच स्क्रीन डिजिटल स्मार्ट बोर्ड, ऑडिओ-व्हिज्युअल मीडिया आणि आधुनिक ई-लर्निंग सुविधांनी सुसज्ज वर्गखोल्या.'
    },
    tags: { en: ['Touch Enabled', 'Audio-Visual', 'E-Learning'], mr: ['टच स्क्रीन', 'ऑडिओ-व्हिज्युअल', 'ई-लर्निंग'] }
  },
  compLab: {
    icon: 'fa-solid fa-desktop',
    title: { en: 'Computer & IT Laboratory', mr: 'अद्ययावत संगणक व IT लॅब' },
    desc: {
      en: 'Over 50 high-performance computer workstations with Linux/Windows, HTML5/CSS3/JavaScript IDEs, and 1:1 student PC access for 12th IT practicals.',
      mr: '५० पेक्षा जास्त संगणक, हाय-स्पीड इंटरनेट आणि १२वी IT प्रॅक्टिकल्ससाठी लागणारे आधुनिक सॉफ्टवेअर्स.'
    },
    tags: { en: ['High-Speed Wi-Fi', 'Linux & Windows', '1:1 PC Ratio'], mr: ['हाय-स्पीड इंटरनेट', 'लिनक्स व विंडोज', '१:१ कॉम्प्युटर'] }
  },
  physicsLab: {
    icon: 'fa-solid fa-atom',
    title: { en: 'Physics Laboratory', mr: 'भौतिकशास्त्र प्रयोगशाळा' },
    desc: {
      en: 'Specialized optics benches, electrical circuit trainers, vernier calipers, and resonance apparatus adhering to State Board practical standards.',
      mr: 'प्रकाशशास्त्र, विद्युत परिपथ, स्क्रू गेज व आधुनिक उपकरणांनी सुसज्ज स्वतंत्र भौतिकशास्त्र प्रयोगशाळा.'
    },
    tags: { en: ['Optics Benches', 'Circuit Kits', 'Board Certified'], mr: ['ऑप्टिक्स साधने', 'विद्युत किट', 'बोर्ड प्रमाणित'] }
  },
  chemLab: {
    icon: 'fa-solid fa-flask',
    title: { en: 'Chemistry Laboratory', mr: 'रसायनशास्त्र प्रयोगशाळा' },
    desc: {
      en: 'Dedicated chemical titration stations, digital weighing scales, reagent racks, and modern exhaust hoods with strict student safety measures.',
      mr: 'रासायनिक टायट्रेशन स्टेशन्स, डिजिटल वजनकाटे आणि सुरक्षित उपकरणांनी सुसज्ज रसायनशास्त्र प्रयोगशाळा.'
    },
    tags: { en: ['Safety Fume Hoods', 'Analytical Reagents', 'Practical Kits'], mr: ['सुरक्षित व्यवस्था', 'रासायनिक अभिकर्मके', 'प्रॅक्टिकल किट्स'] }
  },
  bioLab: {
    icon: 'fa-solid fa-dna',
    title: { en: 'Biology & Botany Laboratory', mr: 'जीवशास्त्र व वनस्पतीशास्त्र प्रयोगशाळा' },
    desc: {
      en: 'High-magnification compound microscopes, botanical specimens, permanent tissue slides, and human anatomy models for practical mastery.',
      mr: 'हाय-पॉवर सूक्ष्मदर्शक, वनस्पती नमुने, पेशींच्या स्लाइड्स आणि मानवी शरीररचनेचे प्रतिकृती मॉडेल्स.'
    },
    tags: { en: ['Compound Microscopes', 'Specimen Jars', 'Anatomy Models'], mr: ['संयुक्त सूक्ष्मदर्शक', 'वनस्पती नमुने', 'अ‍ॅनाटॉमी मॉडेल्स'] }
  },
  library: {
    icon: 'fa-solid fa-book-bookmark',
    title: { en: 'Central Knowledge Library', mr: 'मध्यवर्ती ज्ञान ग्रंथालय व अभ्यासिका' },
    desc: {
      en: 'Over 12,000 reference textbooks, state board guides, competitive entrance manuals (CET/NEET/JEE), regional literature, and quiet reading hall.',
      mr: '१२,००० हून अधिक पुस्तके, संदर्भ ग्रंथ, स्पर्धा परीक्षा मार्गदर्शिका (CET/NEET/JEE) व शांत अभ्यासिका कक्ष.'
    },
    tags: { en: ['12,000+ Books', 'Reading Hall', 'Entrance Guides'], mr: ['१२,०००+ पुस्तके', 'वाचन कक्ष', 'प्रवेश परीक्षा संदर्भ'] }
  },
  sports: {
    icon: 'fa-solid fa-volleyball',
    title: { en: 'Playground & Sports Complex', mr: 'विशाल क्रीडांगण व क्रीडा सुविधा' },
    desc: {
      en: 'Expansive outdoor playground for volleyball, kabaddi, kho-kho, cricket, and athletics, alongside indoor facilities for chess, table tennis, and carrom.',
      mr: 'व्हॉलीबॉल, कबड्डी, खो-खो, क्रिकेट आणि इनडोअर खेळांसाठी (बुद्धिबळ, कॅरम) प्रशस्त क्रीडांगण व साहित्य.'
    },
    tags: { en: ['Large Ground', 'District Coaching', 'Indoor Arena'], mr: ['मोठे मैदान', 'क्रीडा प्रशिक्षण', 'इनडोअर गेम्स'] }
  },
  auditorium: {
    icon: 'fa-solid fa-masks-theater',
    title: { en: 'Auditorium & Cultural Hall', mr: 'सभागृह व सांस्कृतिक रंगमंच' },
    desc: {
      en: 'Spacious multi-purpose auditorium with acoustic sound systems, stage lighting, and podium for annual gatherings, debates, and seminars.',
      mr: 'वार्षिक स्नेहसंमेलन, वादविवाद स्पर्धा व चर्चासत्रांसाठी आधुनिक ध्वनी-प्रकाश व्यवस्थेसह प्रशस्त सभागृह.'
    },
    tags: { en: ['Acoustic Sound', 'Cultural Stage', '500+ Seating'], mr: ['उत्कृष्ट ध्वनीव्यवस्था', 'सांस्कृतिक मंच', '५००+ बैठक क्षमता'] }
  }
};

let activeFacilityKey = 'smartClass';

// Complete Bilingual Dictionary (English <-> मराठी)
const fullDictionary = {
  en: {
    settingsBtnLabel: 'Settings / सेटिंग्ज',
    settingsModalHeading: 'Preferences & Settings',
    lblSetLang: 'Language / भाषा',
    subSetLang: 'Switch entire website between English and Marathi',
    lblSetFont: 'Text Size / अक्षरांचा आकार',
    subSetFont: 'Enlarge or reduce readability font size',
    lblSetDark: 'Dark Mode / नाईट मोड',
    subSetDark: 'Comfortable night reading palette',
    lblSetSmart: 'Smart Board View / स्मार्ट बोर्ड',
    subSetSmart: 'Large touch buttons & presenter view for classrooms',
    btnResetSettings: 'Reset Defaults',
    btnCloseSettings: 'Done',
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
    kioskHeading: 'Admissions Open for 2026–27',
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
    hubSub: 'Academic Resources',
    hubTitle: 'Student Learning Hub',
    hubLead: 'Quick access to board curriculum, IT practical materials, and previous year question papers.',
    hub1Title: '12th Standard IT Hub',
    hub1Desc: 'HTML5, CSS3, JavaScript, Advanced Web Designing SOPs, and SEO study modules as per Maharashtra State Board.',
    hub1Btn: 'View IT SOPs',
    hub2Title: 'Science Lab Manuals',
    hub2Desc: 'Physics, Chemistry, and Biology experimental handbooks, formula cheat sheets, and practical Viva guides.',
    hub2Btn: 'Open Manuals',
    hub3Title: 'Commerce & Accounts Vault',
    hub3Desc: 'Solved balance sheet templates, ledger practice questions, and business mathematics formulae.',
    hub3Btn: 'Practice Sheets',
    hub4Title: 'Previous Board Papers',
    hub4Desc: 'HSC and SSC question papers from 2021 to 2026 with official model answers and marking schemes.',
    hub4Btn: 'Browse Papers',
    campusSub: 'Infrastructure',
    campusTitle: 'Interactive Campus & Facilities',
    campusLead: 'Tap any facility below to inspect the infrastructure on your screen or smart board.',
    facBtn1: 'Smart Classrooms',
    facBtn2: 'Computer & IT Lab',
    facBtn3: 'Physics Laboratory',
    facBtn4: 'Chemistry Laboratory',
    facBtn5: 'Biology Laboratory',
    facBtn6: 'Central Library',
    facBtn7: 'Playground & Sports',
    facBtn8: 'Auditorium & Stage',
    facSub: 'Our Mentors',
    facTitle: 'Faculty & Administration',
    facLead: 'Experienced educators devoted to academic nurturing and student character building.',
    fac1Name: "Principal's Desk",
    fac1Role: 'Head of Institution',
    fac1Msg: '"Guiding every student to achieve their highest intellectual and ethical potential."',
    fac2Name: 'Dept. of Science',
    fac2Role: 'Senior Lecturers',
    fac2Msg: 'Specialized in competitive guidance, practical mastery, and conceptual clarity.',
    fac3Name: 'Dept. of IT & Computers',
    fac3Role: 'IT Faculty & Lab Staff',
    fac3Msg: 'Instructing web technologies, coding, database systems, and modern digital skills.',
    fac4Name: 'Dept. of Commerce & Arts',
    fac4Role: 'Senior Lecturers',
    fac4Msg: 'Fostering financial intelligence, critical analysis, and communicative excellence.',
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
    settingsBtnLabel: 'सेटिंग्ज / Settings',
    settingsModalHeading: 'सेटिंग्ज व प्राधान्ये',
    lblSetLang: 'Language / भाषा निवडा',
    subSetLang: 'वेबसाईट मराठी किंवा इंग्रजी भाषेत बदला',
    lblSetFont: 'Text Size / अक्षरांचा आकार',
    subSetFont: 'वाचण्यास सोपे जाण्यासाठी अक्षरे मोठी करा',
    lblSetDark: 'Dark Mode / नाईट मोड',
    subSetDark: 'डोळ्यांना त्रास न होणारा गडद रंग मोड',
    lblSetSmart: 'Smart Board View / स्मार्ट बोर्ड',
    subSetSmart: 'स्मार्ट बोर्ड व टच स्क्रीनसाठी मोठी बटणे',
    btnResetSettings: 'मूळ सेटिंग्ज',
    btnCloseSettings: 'पूर्ण झाले',
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
    kioskHeading: 'शैक्षणिक वर्ष २०२६-२७ प्रवेश सुरू',
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
    hubSub: 'शैक्षणिक साहित्य',
    hubTitle: 'विद्यार्थी अभ्यास मंच',
    hubLead: '१२वी IT प्रॅक्टिकल्स, प्रयोग पुस्तिका आणि मागील वर्षांच्या प्रश्नपत्रिका.',
    hub1Title: '१२वी IT अभ्यास केंद्र',
    hub1Desc: 'HTML5, CSS3, JavaScript, वेब डिझाईनिंग SOPs आणि SEO मार्गदर्शन.',
    hub1Btn: 'IT SOPs पहा',
    hub2Title: 'विज्ञान प्रयोग पुस्तिका',
    hub2Desc: 'भौतिकशास्त्र, रसायनशास्त्र व जीवशास्त्र प्रयोग मार्गदर्शिका आणि तोंडी परीक्षा (Viva) नोट्स.',
    hub2Btn: 'पुस्तिका उघडा',
    hub3Title: 'वाणिज्य व लेजर बँक',
    hub3Desc: 'सोडवलेले बॅलन्स शीट, खातेवही सराव प्रश्न आणि व्यावसायिक गणित सूत्रे.',
    hub3Btn: 'सराव पत्रके',
    hub4Title: 'मागील बोर्ड प्रश्नपत्रिका',
    hub4Desc: 'HSC आणि SSC बोर्डाच्या २०२१ ते २०२६ च्या प्रश्नपत्रिका व आदर्श उत्तरे.',
    hub4Btn: 'प्रश्नपत्रिका पहा',
    campusSub: 'शालेय पायाभूत सुविधा',
    campusTitle: 'आमचा परिसर व शैक्षणिक सुविधा',
    campusLead: 'तपशील पाहण्यासाठी खालील कोणत्याही सुविधेवर स्पर्श करा.',
    facBtn1: 'स्मार्ट वर्गखोल्या',
    facBtn2: 'संगणक व IT लॅब',
    facBtn3: 'भौतिकशास्त्र लॅब',
    facBtn4: 'रसायनशास्त्र लॅब',
    facBtn5: 'जीवशास्त्र लॅब',
    facBtn6: 'मध्यवर्ती ग्रंथालय',
    facBtn7: 'क्रीडांगण व मैदाने',
    facBtn8: 'सभागृह व रंगमंच',
    facSub: 'मार्गदर्शक',
    facTitle: 'शिक्षकवृंद व प्रशासन',
    facLead: 'विद्यार्थ्यांना ज्ञानदान करणारे अनुभवी व उच्चशिक्षित शिक्षकवृंद.',
    fac1Name: 'मुख्याध्यापक कक्ष',
    fac1Role: 'संस्था प्रमुख',
    fac1Msg: '"प्रत्येक विद्यार्थ्याचा सर्वांगीण विकास घडवणे हेच आमचे अंतिम उद्दिष्ट आहे."',
    fac2Name: 'विज्ञान विभाग',
    fac2Role: 'वरिष्ठ प्राध्यापक',
    fac2Msg: 'प्रात्यक्षिके, संकल्पना स्पष्टता आणि स्पर्धा परीक्षांचे विशेष मार्गदर्शन.',
    fac3Name: 'माहिती तंत्रज्ञान विभाग',
    fac3Role: 'IT प्राध्यापक व लॅब समन्वयक',
    fac3Msg: 'आधुनिक कोडिंग, वेब तंत्रज्ञान व डिजिटल कौशल्ये शिकवण्यावर भर.',
    fac4Name: 'वाणिज्य व कला विभाग',
    fac4Role: 'वरिष्ठ प्राध्यापक',
    fac4Msg: 'आर्थिक साक्षरता, व्यावसायिक कौशल्ये व भाषा प्रभुत्व निर्माण करणे.',
    contactSub: 'संपर्क साधा',
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

/* ==========================================================================
   Global Functions (Attached to window for 100% execution guarantee)
   ========================================================================== */

window.toggleSettingsModal = function(e) {
  if (e) e.stopPropagation();
  const modal = document.getElementById('settingsModal');
  if (modal) modal.classList.toggle('open');
};

window.handleBackdropClick = function(e) {
  if (e.target.id === 'settingsModal') {
    window.toggleSettingsModal();
  }
};

window.applyLanguage = function(lang) {
  window.appState.lang = lang;
  localStorage.setItem('sesjc_lang', lang);

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

  const dict = fullDictionary[lang];
  if (!dict) return;

  // Safe DOM string updates
  for (let key in dict) {
    const el = document.getElementById(key);
    if (el) {
      if (dict[key].includes('<')) {
        el.innerHTML = dict[key];
      } else {
        el.textContent = dict[key];
      }
    }
  }

  // Update Class-based items
  const updateByClass = (cls, text) => {
    const el = document.querySelector(`.${cls}`);
    if (el) el.textContent = text;
  };
  updateByClass('college-name', dict.brandName);
  updateByClass('college-sub', dict.brandSub);
  updateByClass('location-tag', dict.brandLoc);
  updateByClass('nav-txt-home', dict.navHome);
  updateByClass('nav-txt-about', dict.navAbout);
  updateByClass('nav-txt-academics', dict.navAcademics);
  updateByClass('nav-txt-notices', dict.navNotices);
  updateByClass('nav-txt-hub', dict.navHub);
  updateByClass('nav-txt-campus', dict.navCampus);
  updateByClass('nav-txt-faculty', dict.navFaculty);
  updateByClass('nav-txt-contact', dict.navContact);

  // Update Active Campus Facility
  window.selectFacility(activeFacilityKey);
};

window.applyFontSize = function(size) {
  window.appState.fontSize = size;
  localStorage.setItem('sesjc_font', size);

  document.body.classList.remove('font-sm', 'font-md', 'font-lg', 'font-xl');
  document.body.classList.add(`font-${size}`);

  const fontBtns = {
    sm: document.getElementById('fontSmBtn'),
    md: document.getElementById('fontMdBtn'),
    lg: document.getElementById('fontLgBtn'),
    xl: document.getElementById('fontXlBtn')
  };
  for (let s in fontBtns) {
    if (fontBtns[s]) {
      if (s === size) fontBtns[s].classList.add('active');
      else fontBtns[s].classList.remove('active');
    }
  }
};

window.toggleDarkMode = function() {
  window.appState.darkMode = !window.appState.darkMode;
  localStorage.setItem('sesjc_dark', window.appState.darkMode);

  const btn = document.getElementById('darkModeToggleBtn');
  const txt = document.getElementById('txtDarkStatus');

  if (window.appState.darkMode) {
    document.body.classList.add('dark-theme');
    if (btn) btn.classList.add('active');
    if (txt) txt.textContent = 'On';
  } else {
    document.body.classList.remove('dark-theme');
    if (btn) btn.classList.remove('active');
    if (txt) txt.textContent = 'Off';
  }
};

window.toggleSmartBoardMode = function() {
  window.appState.smartBoard = !window.appState.smartBoard;
  localStorage.setItem('sesjc_smart', window.appState.smartBoard);

  const btn = document.getElementById('smartBoardToggleBtn');
  const txt = document.getElementById('txtSmartStatus');

  if (window.appState.smartBoard) {
    document.body.classList.add('smartboard-mode');
    if (btn) btn.classList.add('active');
    if (txt) txt.textContent = 'On';
  } else {
    document.body.classList.remove('smartboard-mode');
    if (btn) btn.classList.remove('active');
    if (txt) txt.textContent = 'Off';
  }
};

window.resetAllDefaults = function() {
  localStorage.clear();
  window.appState = { lang: 'en', fontSize: 'md', darkMode: false, smartBoard: false };
  window.applyLanguage('en');
  window.applyFontSize('md');
  if (document.body.classList.contains('dark-theme')) window.toggleDarkMode();
  if (document.body.classList.contains('smartboard-mode')) window.toggleSmartBoardMode();
  alert('All settings have been reset to default.');
};

window.selectFacility = function(key, btnElement = null) {
  activeFacilityKey = key;
  const data = campusFacilities[key];
  if (!data) return;

  const buttons = document.querySelectorAll('.facility-btn');
  buttons.forEach(b => b.classList.remove('active'));

  if (btnElement) {
    btnElement.classList.add('active');
  } else {
    const matchingBtn = document.querySelector(`.facility-btn[onclick*="${key}"]`);
    if (matchingBtn) matchingBtn.classList.add('active');
  }

  const lang = window.appState.lang;
  const icon = document.getElementById('facilityIcon');
  const title = document.getElementById('facilityTitle');
  const desc = document.getElementById('facilityDesc');
  const tagsContainer = document.getElementById('facilityTags');

  if (icon) icon.innerHTML = `<i class="${data.icon}"></i>`;
  if (title) title.textContent = data.title[lang] || data.title.en;
  if (desc) desc.textContent = data.desc[lang] || data.desc.en;

  const tags = data.tags[lang] || data.tags.en;
  if (tagsContainer && tags) {
    tagsContainer.innerHTML = tags.map(t => `<span class="badge">${t}</span>`).join('');
  }
};

window.toggleMobileMenu = function() {
  const menu = document.getElementById('navMenu');
  if (menu) menu.classList.toggle('open');
};

window.navigateToSection = function(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

window.alertNoticeDetails = function() {
  const msg = window.appState.lang === 'mr'
    ? 'पालक-संस्थाचालक व मुख्याध्यापक संयुक्त सभा शनिवार दि. २२/०८/२०२६ रोजी सकाळी १०:०० वाजता शाळेत आयोजित केली आहे. सर्व पालकांनी आवर्जून उपस्थित राहावे.\n— मुख्याध्यापक, शिवाजी इंग्लिश स्कूल'
    : 'Parent-Management Meeting with Principal is scheduled on Saturday, 22/08/2026 at 10:00 AM sharp in the school premises. All parents are requested to attend.\n— Principal, Shivaji English School';
  alert(msg);
};

window.handleInquirySubmit = function(e) {
  e.preventDefault();
  const name = document.getElementById('fullName').value;
  const feedback = document.getElementById('formFeedback');
  if (feedback) {
    feedback.innerHTML = window.appState.lang === 'mr'
      ? `<span style="color: #059669;"><i class="fa-solid fa-circle-check"></i> धन्यवाद, ${name}! आपला संदेश शाळेच्या कार्यालयास प्राप्त झाला आहे.</span>`
      : `<span style="color: #059669;"><i class="fa-solid fa-circle-check"></i> Thank you, ${name}! Your inquiry has been received.</span>`;
  }
  document.getElementById('inquiryForm').reset();
};

/* ==========================================================================
   Shivaji AI Assistant (Bilingual)
   ========================================================================== */
window.toggleAiChat = function() {
  const win = document.getElementById('aiChatWindow');
  if (win) win.classList.toggle('open');
};

window.openAssistant = function() {
  const win = document.getElementById('aiChatWindow');
  if (win) {
    win.classList.add('open');
    const input = document.getElementById('aiUserInput');
    if (input) input.focus();
  }
};

window.askAiQuestion = function(query) {
  window.openAssistant();
  const input = document.getElementById('aiUserInput');
  if (input) {
    input.value = query;
    window.sendAiMessage();
  }
};

window.sendAiMessage = function() {
  const input = document.getElementById('aiUserInput');
  const container = document.getElementById('aiChatMessages');
  if (!input || !container) return;

  const text = input.value.trim();
  if (!text) return;

  // Add User bubble
  const userBubble = document.createElement('div');
  userBubble.className = 'chat-bubble user';
  userBubble.textContent = text;
  container.appendChild(userBubble);
  input.value = '';

  // Add typing bubble
  const typingBubble = document.createElement('div');
  typingBubble.className = 'chat-bubble ai';
  typingBubble.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> ' + (window.appState.lang === 'mr' ? 'माहिती शोधत आहे...' : 'Thinking...');
  container.appendChild(typingBubble);
  container.scrollTop = container.scrollHeight;

  setTimeout(() => {
    container.removeChild(typingBubble);
    const reply = generateAiAnswer(text.toLowerCase());
    const aiBubble = document.createElement('div');
    aiBubble.className = 'chat-bubble ai';
    aiBubble.innerHTML = reply;
    container.appendChild(aiBubble);
    container.scrollTop = container.scrollHeight;
  }, 350);
};

function generateAiAnswer(query) {
  const isMr = window.appState.lang === 'mr' || /[\u0900-\u097F]/.test(query);

  if (isMr) {
    if (query.includes('नमस्कार') || query.includes('hello') || query.includes('hi')) {
      return 'नमस्ते! शिवाजी इंग्लिश स्कूल आणि कनिष्ठ महाविद्यालय AI मदतनीस मध्ये आपले स्वागत आहे. मी आपल्याला कशी मदत करू?';
    }
    if (query.includes('इतिहास') || query.includes('स्थापना') || query.includes('1960')) {
      return '🏛️ <strong>शाळेचा इतिहास:</strong><br>शिवाजी इंग्लिश स्कूल व कनिष्ठ महाविद्यालयाची स्थापना <strong>१९६०</strong> मध्ये पांडुर तिठा येथे झाली. ही संस्था खाजगी अनुदानित असून इयत्ता ५ वी ते १२ वी पर्यंतचे दर्जेदार शिक्षण देते.';
    }
    if (query.includes('शाखा') || query.includes('प्रवेश') || query.includes('अभ्यासक्रम')) {
      return '📚 <strong>उपलब्ध शाखा:</strong><br>• माध्यमिक: इयत्ता ५ वी ते १० वी<br>• विज्ञान शाखा (११वी व १२वी): PCMB + IT<br>• वाणिज्य शाखा: BK, OCM, Eco, SP / IT<br>• कला शाखा: इतिहास, भूगोल, राज्यशास्त्र, भाषा.';
    }
    if (query.includes('आयटी') || query.includes('it') || query.includes('sop')) {
      return '💻 <strong>१२वी IT अभ्यासक्रम:</strong><br>१. Advanced Web Designing (HTML5/CSS3 Grid)<br>२. Client-Side Scripting (JavaScript Validation)<br>३. Server-Side (PHP Basics)<br>४. Emerging Tech (Cloud, AI, IoT)<br>५. E-Commerce & Cyber Law.';
    }
    if (query.includes('पत्ता') || query.includes('संपर्क') || query.includes('फोन')) {
      return '📍 <strong>संपर्क:</strong><br>पांडुर तिठा, ता. कुडाळ, जि. सिंधुदुर्ग - ४१६५२८.<br>फोन: +91 2362 232000 (सकाळी ९:३० ते संध्याकाळी ५:००).';
    }
    return 'मी आपल्याला <strong>प्रवेश</strong>, <strong>११वी/१२वी शाखा (विज्ञान, वाणिज्य, कला, IT)</strong>, <strong>शाळेचा इतिहास</strong> किंवा <strong>१२वी IT प्रॅक्टिकल्स</strong> बाबत माहिती देऊ शकतो.';
  }

  // English Knowledge Base
  if (query.includes('hi') || query.includes('hello') || query.includes('namaste')) {
    return 'Namaste! Welcome to Shivaji English School & Junior College AI Assistant. How can I assist you today?';
  }
  if (query.includes('establish') || query.includes('history') || query.includes('1960')) {
    return '🏛️ <strong>About Institution:</strong><br>Established in <strong>1960</strong> at Pandur Titha, Sindhudurg, Maharashtra. It is a premier co-educational, private-aided institution providing education for Grades 5 through 12.';
  }
  if (query.includes('stream') || query.includes('course') || query.includes('admission')) {
    return '📚 <strong>Academic Programs:</strong><br>• Secondary School: Grades 5–10<br>• Science (11th & 12th): PCMB + IT<br>• Commerce (11th & 12th): BK, OCM, Eco, SP / IT<br>• Arts (11th & 12th): History, Geography, Political Science, Languages.';
  }
  if (query.includes('it') || query.includes('sop')) {
    return '💻 <strong>12th Standard IT Syllabus:</strong><br>1. Advanced Web Designing (HTML5/CSS3)<br>2. Client-Side Scripting (JavaScript)<br>3. Server-Side Scripting (PHP)<br>4. Emerging Tech (Cloud, AI, 5G)<br>5. E-Commerce & Cyber Law.';
  }
  if (query.includes('contact') || query.includes('location') || query.includes('address')) {
    return '📍 <strong>Contact Details:</strong><br>Pandur Titha, Taluka Kudal, Sindhudurg, MH - 416528.<br>Phone: +91 2362 232000 (Mon–Sat, 9:30 AM to 5:00 PM).';
  }
  return 'You can ask me about <strong>Admissions</strong>, <strong>Junior College Streams (Science, Commerce, Arts, IT)</strong>, <strong>School History</strong>, or <strong>12th IT Practical SOPs</strong>.';
}

// Initial Bootstrapping
window.addEventListener('load', () => {
  window.applyLanguage(window.appState.lang);
  window.applyFontSize(window.appState.fontSize);
  if (window.appState.darkMode) {
    document.body.classList.add('dark-theme');
    const dBtn = document.getElementById('darkModeToggleBtn');
    const dTxt = document.getElementById('txtDarkStatus');
    if (dBtn) dBtn.classList.add('active');
    if (dTxt) dTxt.textContent = 'On';
  }
  if (window.appState.smartBoard) {
    document.body.classList.add('smartboard-mode');
    const sBtn = document.getElementById('smartBoardToggleBtn');
    const sTxt = document.getElementById('txtSmartStatus');
    if (sBtn) sBtn.classList.add('active');
    if (sTxt) sTxt.textContent = 'On';
  }
  window.selectFacility('smartClass');
});
