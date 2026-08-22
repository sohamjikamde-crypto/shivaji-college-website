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

  const translations = {
    en: {
      "topAddr": "Pandur Titha, Sindhudurg, Maharashtra",
      "topAided": "Estd. 1960 | UDISE: 27330408903",
      "settingsBtnLabel": "Settings",
      "settingsModalHeading": "Preferences & Settings",
      "lblSetLang": "Language / भाषा",
      "subSetLang": "Switch entire website between English and Marathi",
      "lblSetFont": "Text Size / अक्षरांचा आकार",
      "subSetFont": "Enlarge or reduce readability font size",
      "lblSetDark": "Dark Mode / नाईट मोड",
      "subSetDark": "Comfortable night reading palette",
      "lblSetSmart": "Smart Board View / स्मार्ट बोर्ड",
      "subSetSmart": "Large touch buttons & presenter view for classroom interactive boards",
      "txtResetSettings": "Reset Defaults",
      "txtDoneSettings": "Done",
      "navTxtAbout": "About Our Institution",
      "navTxtKiosk": "Admissions & Kiosk",
      "navTxtNotices": "Official Notice Board",
      "navTxtHub": "Academic Streams & Hub",
      "navTxtCampus": "Interactive Campus & Facilities",
      "navTxtGallery": "Campus Life & Gallery",
      "navTxtContact": "Send an Inquiry",
      "heroBadge": "<i class=\"fa-solid fa-star\"></i> 60+ Years of Academic Excellence (Since 1960)",
      "heroTitle": "Empowering Minds,<br><span class=\"text-highlight\">Shaping Leaders</span> in<br>Sindhudurg.",
      "heroDesc": "A premier co-educational, private-aided institution imparting high-quality education from Grades 5 through 12 in General Secondary, Arts, Commerce, Science, and Information Technology.",
      "btnExplore": "<i class=\"fa-solid fa-compass\"></i> Explore Courses",
      "btnNotices": "<i class=\"fa-solid fa-bell\"></i> Notice Board",
      "btnAskAi": "<i class=\"fa-solid fa-robot\"></i> Ask College AI",
      "aiFloatingBtnText": "Ai Assistant",
      "aiChatTitle": "Ai Assistant",
      "stat1": "Year Established",
      "stat2": "Students Enrolled",
      "stat3": "Board Exam Result",
      "stat4": "Expert Educators",
      "kioskBadge": "Campus Digital Kiosk",
      "kioskHeading": "LIVE ADMISSIONS &amp; UPDATES",
      "kioskTitle": "Admissions Open for 2026–27",
      "kioskDesc": "Grades 5th to 10th (Semi-English &amp; English) and 11th/12th (Science, Commerce, Arts &amp; IT).",
      "chip1": "Exam Dates",
      "chip2": "Question Banks",
      "chip3": "Admission Info",
      "chip4": "12th IT Syllabus",
      "kioskAffiliation": "<i class=\"fa-solid fa-building-columns\"></i> Maharashtra State Board Affiliated (Pune Division)",
      "aboutSub": "Heritage &amp; Vision",
      "aboutTitle": "About Our Institution",
      "aboutLead": "Serving Sindhudurg district with dedicated educational excellence for over six decades.",
      "aboutHistTitle": "Our Glorious History (Since 1960)",
      "aboutHistP1": "Founded in 1960 at Pandur Titha, Shivaji English School and Junior College was established with a noble mission to provide accessible, value-based, and progressive education to rural and semi-urban youth of Sindhudurg.",
      "aboutHistP2": "Over the decades, it has evolved into a premier private-aided educational center, producing district toppers, sports champions, civil servants, engineers, doctors, and responsible citizens.",
      "aboutVisTitle": "Our Vision",
      "aboutVisP": "To cultivate intellectually enlightened, morally upright, culturally rooted, and technologically empowered youth who positively contribute to Maharashtra and the nation.",
      "aboutMisTitle": "Our Mission",
      "aboutMisP": "Delivering holistic learning through interactive smart classrooms, state-of-the-art science laboratories, IT curriculum, sports coaching, and community values.",
      "ribbon1": "<i class=\"fa-solid fa-award\"></i> Government Recognized &amp; Aided",
      "ribbon2": "<i class=\"fa-solid fa-users\"></i> Co-Educational Campus",
      "ribbon3": "<i class=\"fa-solid fa-flask-vial\"></i> Advanced Science &amp; IT Labs",
      "ribbon4": "<i class=\"fa-solid fa-chalkboard-user\"></i> Interactive Smart Classrooms",
      "acadSub": "Programs Offered",
      "acadTitle": "Academic Streams &amp; Curriculum",
      "acadLead": "Comprehensive schooling from Grade 5 through 12 with specialized junior college wings.",
      "course1Title": "Secondary Schooling",
      "course1Desc": "Rigorous foundation adhering to Maharashtra State Board curriculum. Semi-English &amp; English medium options with cultural activities and sports training.",
      "course2Title": "Science Stream",
      "course2Desc": "Physics, Chemistry, Mathematics, Biology, and Information Technology (IT) with hands-on laboratory coaching for CET/NEET/JEE aspirants.",
      "course3Title": "Commerce Stream",
      "course3Desc": "Book Keeping &amp; Accountancy, Organization of Commerce &amp; Management, Economics, and Secretarial Practice / IT for corporate finance acumen.",
      "course4Title": "Arts &amp; Humanities",
      "course4Desc": "History, Geography, Political Science, English, Marathi and Hindi literature fostering critical thinking and civil services exam foundations.",
      "noticeSub": "Real-Time Bulletin",
      "noticeTitle": "Official Notice Board",
      "noticeLead": "Stay updated with latest announcements, meeting circulars, and exam schedules.",
      "noticeParentTitle": "Urgent Parent-Management Meeting with Principal",
      "noticeParentDesc": "All parents are hereby informed that an important meeting with the Institution Management and Principal is scheduled on Saturday, 22/08/2026 at 10:00 AM sharp in the school premises. All parents are requested to attend without fail. — Principal",
      "noticeItTitle": "12th Standard IT Practical Journal Submission",
      "noticeItDesc": "Class 12th Science &amp; Commerce IT students must submit their complete SOP Practical Journals (HTML5, Advanced Web Designing, JavaScript Validation &amp; SEO) to the IT department by 28th August 2026.",
      "noticeTeachersTitle": "Teachers' Day &amp; Annual Cultural Gathering Announcement",
      "noticeTeachersDesc": "Special felicitation program on 5th September 2026 followed by rehearsal schedule for Annual Gathering traditional folk dance and sports competitions.",
      "hubSub": "Academic Resources",
      "hubTitle": "Student Learning Hub",
      "hubLead": "Quick access to board curriculum, IT practical materials, and previous year question papers.",
      "hub1Title": "12th Standard IT Hub",
      "hub1Desc": "HTML5, CSS3, JavaScript, Advanced Web Designing SOPs (SOP 1 to 6), and SEO study modules as per Maharashtra State Board.",
      "hub1Btn": "View IT SOPs &amp; Code",
      "hub2Title": "JEE, NEET &amp; Science Labs",
      "hub2Desc": "Physics, Chemistry, and Biology experimental handbooks, plus NEET &amp; JEE previous year question banks.",
      "hub2Btn": "Open NTA Archives",
      "hub3Title": "Commerce &amp; Accounts Vault",
      "hub3Desc": "Solved balance sheet templates, ledger practice questions, GST accounting notes, and business mathematics.",
      "hub3Btn": "eBalbharati Sheets",
      "hub4Title": "Previous Board Papers",
      "hub4Desc": "HSC and SSC question papers from 2021 to 2026 with official model answers and marking schemes.",
      "hub4Btn": "Browse Board Papers",
      "campusSub": "Infrastructure",
      "campusTitle": "Interactive Campus &amp; Facilities",
      "campusLead": "Tap any facility below to inspect the infrastructure on your screen or smart board.",
      "facBtn1": "Smart Classrooms",
      "facBtn2": "Computer &amp; IT Lab",
      "facBtn3": "Physics Laboratory",
      "facBtn4": "Chemistry Laboratory",
      "facBtn5": "Biology Laboratory",
      "facBtn6": "Central Library",
      "facBtn7": "Playground &amp; Sports",
      "facBtn8": "Auditorium &amp; Stage",
      "txtExploreCampusGal": "View Full Campus Gallery",
      "gallerySub": "Visual Showcase",
      "galleryTitle": "Campus Life &amp; Event Collage Gallery",
      "galleryLead": "Explore vibrant memories of academic excellence, cultural festivals, sports tournaments, and student life at Shivaji English School &amp; Junior College.",
      "galFilterAll": "All Media",
      "galFilterCampus": "Campus &amp; Labs",
      "galFilterCultural": "Annual Gathering",
      "galFilterSports": "Sports Meet",
      "galFilterScience": "Science Exhibition",
      "galFilterFestivals": "Shiv Jayanti &amp; National Days",
      "facSub": "Faculty Directory",
      "facTitle": "Dedicated Educators &amp; Leadership",
      "facLead": "Highly qualified, experienced, and student-focused educators nurturing future leaders.",
      "fac1Name": "Dr. Arvind Patil",
      "fac1Role": "Principal &amp; Head of Administration",
      "fac1Msg": "\"Our mission is to empower rural students with world-class education, technical confidence, and timeless ethical values.\"",
      "fac2Name": "Prof. Sunita Sawant",
      "fac2Role": "Vice Principal &amp; HOD Chemistry",
      "fac2Msg": "\"Hands-on scientific inquiry and laboratory discipline form the foundation of our high board exam pass rates.\"",
      "fac3Name": "Prof. Ramesh Rane",
      "fac3Role": "HOD Information Technology (IT)",
      "fac3Msg": "\"We train our 12th IT students in modern HTML5, CSS layout, JavaScript validation, and problem-solving skills.\"",
      "fac4Name": "Prof. Deepali Parab",
      "fac4Role": "HOD Commerce &amp; Accountancy",
      "fac4Msg": "\"Empowering future entrepreneurs and finance professionals with practical financial accounting and corporate skills.\"",
      "contactSub": "Reach Out To Us",
      "contactTitle": "Send an Inquiry / Message",
      "contactLead": "Have questions regarding admissions, documents, or curriculum? Send us a quick message below.",
      "contactCardHead": "School Office Details",
      "contactCardSub": "For admissions, verification, certificates, and student inquiries:",
      "contactLblAddr": "Campus Address:",
      "contactValAddr": "Shivaji English School &amp; Jr. College, At/Post Pandur Titha, Taluka Kudal, District Sindhudurg, Maharashtra – 416812",
      "contactLblPhone": "Phone Numbers:",
      "contactLblEmail": "Official Email:",
      "contactLblHours": "Office Hours:",
      "contactValHours": "Monday to Saturday: 9:30 AM – 4:30 PM (Sunday Closed)",
      "inquiryHead": "Send an Inquiry",
      "lblFormName": "Student / Parent Name *",
      "lblFormPhone": "Phone Number (10 Digits) *",
      "lblFormPurpose": "Inquiry Purpose *",
      "lblFormMsg": "Message / Details *",
      "txtSubmitInquiry": "Submit Inquiry"
    },
    mr: {
      "topAddr": "पांडूर तिठा, सिंधुदुर्ग, महाराष्ट्र",
      "topAided": "स्थापना १९६० | UDISE: 27330408903",
      "settingsBtnLabel": "सेटिंग्ज",
      "settingsModalHeading": "प्राधान्ये आणि सेटिंग्ज",
      "lblSetLang": "Language / भाषा",
      "subSetLang": "वेबसाइट इंग्रजी किंवा मराठी भाषेत बदला",
      "lblSetFont": "Text Size / अक्षरांचा आकार",
      "subSetFont": "वाचनीयतेसाठी अक्षरांचा आकार मोठा किंवा लहान करा",
      "lblSetDark": "Dark Mode / नाईट मोड",
      "subSetDark": "रात्रीच्या वाचनासाठी गडद पार्श्वभूमी",
      "lblSetSmart": "Smart Board View / स्मार्ट बोर्ड",
      "subSetSmart": "वर्गखोलीतील स्मार्ट बोर्डसाठी मोठे बटन्स व प्रेझेंटर मोड",
      "txtResetSettings": "मूळ सेटिंग्ज",
      "txtDoneSettings": "पूर्ण झाले",
      "navTxtAbout": "संस्थेबद्दल",
      "navTxtKiosk": "प्रवेश व माहिती",
      "navTxtNotices": "सूचना फलक",
      "navTxtHub": "अभ्यासक्रम व कक्ष",
      "navTxtCampus": "परिसर व सुविधा",
      "navTxtGallery": "चित्रदालन",
      "navTxtContact": "चौकशी करा",
      "heroBadge": "<i class=\"fa-solid fa-star\"></i> ६४+ वर्षांची शैक्षणिक परंपरा (स्थापना १९६०)",
      "heroTitle": "सिंधुदुर्गातील विद्यार्थ्यांचे<br><span class=\"text-highlight\">उज्ज्वल भविष्य</span> घडवणारी<br>अग्रगण्य संस्था.",
      "heroDesc": "इयत्ता ५ वी ते १० वी माध्यमिक तसेच ११ वी व १२ वी कला, वाणिज्य, विज्ञान आणि माहिती तंत्रज्ञान (IT) शाखांचे उच्च दर्जाचे शिक्षण देणारी नामांकित अनुदानित शिक्षण संस्था.",
      "btnExplore": "<i class=\"fa-solid fa-compass\"></i> अभ्यासक्रम पहा",
      "btnNotices": "<i class=\"fa-solid fa-bell\"></i> सूचना फलक",
      "btnAskAi": "<i class=\"fa-solid fa-robot\"></i> Ask College AI",
      "aiFloatingBtnText": "Ai Assistant",
      "aiChatTitle": "Ai Assistant",
      "stat1": "स्थापना वर्ष",
      "stat2": "प्रवेशित विद्यार्थी",
      "stat3": "बोर्ड निकाल",
      "stat4": "तज्ज्ञ प्राध्यापक",
      "kioskBadge": "डिजिटल माहिती फलक",
      "kioskHeading": "प्रवेश २०२६–२७ व ताज्या घडामोडी",
      "kioskTitle": "प्रवेश प्रक्रिया २०२६–२७ सुरू",
      "kioskDesc": "इयत्ता ५ वी ते १० वी (सेमी-इंग्रजी व मराठी) आणि ११ वी / १२ वी (विज्ञान, वाणिज्य, कला व IT).",
      "chip1": "परीक्षेच्या तारखा",
      "chip2": "प्रश्न संच",
      "chip3": "प्रवेश माहिती",
      "chip4": "१२ वी IT अभ्यासक्रम",
      "kioskAffiliation": "<i class=\"fa-solid fa-building-columns\"></i> महाराष्ट्र राज्य शिक्षण मंडळ संलग्न (पुणे विभाग)",
      "aboutSub": "वारसा व ध्येय",
      "aboutTitle": "आमच्या संस्थेविषयी",
      "aboutLead": "गेल्या सहा दशकांहून अधिक काळ सिंधुदुर्ग जिल्ह्यात समर्पित शैक्षणिक सेवा.",
      "aboutHistTitle": "आमचा गौरवशाली इतिहास (१९६० पासून)",
      "aboutHistP1": "१९६० मध्ये पांडूर तिठा येथे स्थापन झालेल्या शिवाजी इंग्लिश स्कूल आणि ज्युनिअर कॉलेजने ग्रामीण भागातील विद्यार्थ्यांना दर्जेदार, संस्कारक्षम आणि प्रगतीशील शिक्षण देण्याचे कार्य अविरतपणे केले आहे.",
      "aboutHistP2": "दशकांनंतर आज ही संस्था सिंधुदुर्गातील एक प्रमुख अनुदानित शैक्षणिक केंद्र बनली असून, इथून अनेक गुणवत्ताधारक, खेळाडू, अधिकारी, डॉक्टर आणि अभियंते घडले आहेत.",
      "aboutVisTitle": "आमचे ध्येय (Vision)",
      "aboutVisP": "कोकणातील ग्रामीण युवकांमध्ये बौद्धिक प्रगल्भता, नैतिक मूल्ये आणि तांत्रिक कौशल्ये रुजवून समाज घडवणारे नागरिक निर्माण करणे.",
      "aboutMisTitle": "आमचे उद्दिष्ट (Mission)",
      "aboutMisP": "डिजिटल स्मार्ट वर्गखोल्या, अद्ययावत विज्ञान प्रयोगशाळा, संगणकीय IT शिक्षण आणि क्रीडा प्रशिक्षणाद्वारे विद्यार्थ्यांचा सर्वांगीण विकास साधणे.",
      "ribbon1": "<i class=\"fa-solid fa-award\"></i> शासनमान्य व अनुदानित",
      "ribbon2": "<i class=\"fa-solid fa-users\"></i> सह-शिक्षण परिसर",
      "ribbon3": "<i class=\"fa-solid fa-flask-vial\"></i> सुसज्ज विज्ञान व IT लॅब",
      "ribbon4": "<i class=\"fa-solid fa-chalkboard-user\"></i> डिजिटल स्मार्ट वर्गखोल्या",
      "acadSub": "शैक्षणिक शाखा",
      "acadTitle": "अभ्यासक्रम व शाखा",
      "acadLead": "इयत्ता ५ वी ते १० वी माध्यमिक आणि ११ वी व १२ वी कनिष्ठ महाविद्यालयीन शाखा.",
      "course1Title": "माध्यमिक शाळा (५ वी ते १० वी)",
      "course1Desc": "महाराष्ट्र राज्य बोर्डाचा अभ्यासक्रम. सेमी-इंग्रजी व मराठी माध्यमासह क्रीडा आणि सांस्कृतिक उपक्रमांचे समृद्ध प्रशिक्षण.",
      "course2Title": "विज्ञान शाखा (Science)",
      "course2Desc": "भौतिकशास्त्र, रसायनशास्त्र, गणित, जीवशास्त्र आणि माहिती तंत्रज्ञान (IT) सह CET/NEET/JEE साठी विशेष मार्गदर्शन.",
      "course3Title": "वाणिज्य शाखा (Commerce)",
      "course3Desc": "बुकीपिंग व अकाउंटन्सी, वाणिज्य संघटन, चिटणीसाची कार्यपद्धती, अर्थशास्त्र आणि IT सह कॉर्पोरेट शिक्षणाची तयारी.",
      "course4Title": "कला शाखा (Arts)",
      "course4Desc": "इतिहास, भूगोल, राज्यशास्त्र, अर्थशास्त्र, मराठी व इंग्रजी साहित्य यांद्वारे स्पर्धा परीक्षांचा भक्कम पाया.",
      "noticeSub": "ताजी माहिती",
      "noticeTitle": "अधिकृत सूचना फलक",
      "noticeLead": "महत्त्वाच्या सूचना, परिपत्रके, परीक्षा वेळापत्रक आणि शैक्षणिक घडामोडी.",
      "noticeParentTitle": "पालक व व्यवस्थापनाची प्राचार्यांसोबत महत्त्वाची सभा",
      "noticeParentDesc": "सर्व पालकांना कळविण्यात येते की, शनिवार दि. २२/०८/२०२६ रोजी सकाळी १०:०० वाजता विद्यालयात पालक-शिक्षक सभा आयोजित केली आहे. सर्व पालकांनी उपस्थित राहावे. — प्राचार्य",
      "noticeItTitle": "१२ वी IT प्रॅक्टिकल जर्नल जमा करणे बाबत",
      "noticeItDesc": "१२ वी विज्ञान व वाणिज्य IT च्या विद्यार्थ्यांनी आपली पूर्ण SOP प्रॅक्टिकल जर्नल्स (HTML5, JS व्हॅलिडेशन व SEO) दि. २८ ऑगस्ट २०२६ पर्यंत IT विभागात जमा करावीत.",
      "noticeTeachersTitle": "शिक्षक दिन व वार्षिक स्नेहसंमेलन घोषणा",
      "noticeTeachersDesc": "दि. ५ सप्टेंबर २०२६ रोजी शिक्षक दिन सत्कार सोहळा आणि त्यानंतर वार्षिक स्नेहसंमेलन सांस्कृतिक व क्रीडा स्पर्धांची पूर्वतयारी सुरू होईल.",
      "hubSub": "शैक्षणिक साहित्य",
      "hubTitle": "विद्यार्थी अभ्यास कक्ष",
      "hubLead": "१२ वी IT बोर्ड प्रॅक्टिकल SOP कोडिंग रनर, लॅब मॅन्युअल्स आणि मागील वर्षांच्या प्रश्नपत्रिका.",
      "hub1Title": "१२ वी IT प्रॅक्टिकल हब",
      "hub1Desc": "HTML5, CSS3, जावास्क्रिप्ट व्हॅलिडेशन, SOP 1 ते 6 चे संपूर्ण कोड व सोल्युशन्स.",
      "hub1Btn": "IT SOPs व कोड पहा",
      "hub2Title": "JEE, NEET व विज्ञान लॅब",
      "hub2Desc": "भौतिकशास्त्र, रसायनशास्त्र व जीवशास्त्र प्रात्यक्षिक पुस्तिका आणि NEET / JEE मागील वर्षांच्या प्रश्नपत्रिका.",
      "hub2Btn": "NTA आर्काईव्ह उघडा",
      "hub3Title": "वाणिज्य अभ्यास साहित्य",
      "hub3Desc": "अकाउंट्स ताळेबंद नमुने, जीएसटी उदाहरणे आणि सोपे स्पष्टीकरण.",
      "hub3Btn": "ई-बालभारती पुस्तके",
      "hub4Title": "मागील बोर्ड प्रश्नपत्रिका",
      "hub4Desc": "२०२१ ते २०२६ पर्यंतच्या HSC व SSC बोर्ड प्रश्नपत्रिका आणि आदर्श उत्तरपत्रिका.",
      "hub4Btn": "प्रश्नपत्रिका पहा",
      "campusSub": "पायाभूत सुविधा",
      "campusTitle": "परिसर व अत्याधुनिक सुविधा",
      "campusLead": "खालील कोणत्याही सुविधेवर क्लिक करून त्याची माहिती आणि छायाचित्रे पहा.",
      "facBtn1": "डिजिटल स्मार्ट क्लासरूम्स",
      "facBtn2": "कॉम्प्युटर व IT लॅब",
      "facBtn3": "भौतिकशास्त्र लॅब",
      "facBtn4": "रसायनशास्त्र लॅब",
      "facBtn5": "जीवशास्त्र लॅब",
      "facBtn6": "मध्यवर्ती ग्रंथालय",
      "facBtn7": "क्रीडांगण व खेळ",
      "facBtn8": "सभागृह व सांस्कृतिक मंच",
      "txtExploreCampusGal": "संपूर्ण परिसर चित्रदालन पहा",
      "gallerySub": "चित्रदालन",
      "galleryTitle": "महाविद्यालयीन जीवन व कार्यक्रम",
      "galleryLead": "वार्षिक स्नेहसंमेलन, क्रीडा स्पर्धा, विज्ञान प्रदर्शन व शिवजयंती उत्सवाचे क्षणचित्रे.",
      "galFilterAll": "सर्व मीडिया",
      "galFilterCampus": "परिसर व लॅब",
      "galFilterCultural": "वार्षिक स्नेहसंमेलन",
      "galFilterSports": "क्रीडा महोत्सव",
      "galFilterScience": "विज्ञान प्रदर्शन",
      "galFilterFestivals": "शिवजयंती व राष्ट्रीय उत्सव",
      "facSub": "मार्गदर्शक वृंद",
      "facTitle": "अनुभवी प्राध्यापक व शिक्षक",
      "facLead": "विद्यार्थ्यांच्या सर्वांगीण विकासासाठी कटिबद्ध असणारे तज्ज्ञ व मार्गदर्शक शिक्षक.",
      "fac1Name": "डॉ. अरविंद पाटील",
      "fac1Role": "प्राचार्य व प्रशासकीय प्रमुख",
      "fac1Msg": "\"ग्रामीण भागातील विद्यार्थ्यांना दर्जेदार शिक्षण, तांत्रिक कौशल्य आणि नैतिक मूल्ये देणे हेच आमचे उद्दिष्ट आहे.\"",
      "fac2Name": "प्रा. सुनिता सावंत",
      "fac2Role": "उपप्राचार्य व रसायनशास्त्र विभागप्रमुख",
      "fac2Msg": "\"प्रत्यक्ष प्रयोगांवर भर आणि काटेकोर अभ्यासामुळेच आमचा बोर्ड परीक्षेचा निकाल नेहमी उज्ज्वल लागतो.\"",
      "fac3Name": "प्रा. रमेश राणे",
      "fac3Role": "माहिती तंत्रज्ञान (IT) विभागप्रमुख",
      "fac3Msg": "\"आम्ही १२ वी IT च्या विद्यार्थ्यांना आधुनिक HTML5, CSS लेआउट आणि जावास्क्रिप्ट प्रॅक्टिकल्सचे उत्तम प्रशिक्षण देतो.\"",
      "fac4Name": "प्रा. दिपाली परब",
      "fac4Role": "वाणिज्य व अकाउंटन्सी विभागप्रमुख",
      "fac4Msg": "\"विद्यार्थ्यांमध्ये व्यावसायिक कौशल्ये आणि आर्थिक समज निर्माण करून त्यांना स्वावलंबी बनवणे.\"",
      "contactSub": "संपर्क साधा",
      "contactTitle": "चौकशी संदेश पाठवा",
      "contactLead": "प्रवेश, दाखले व अभ्यासक्रमाबाबतच्या माहितीसाठी संदेश पाठवा.",
      "contactCardHead": "महाविद्यालयीन कार्यालय",
      "contactCardSub": "प्रवेश, दाखले व अभ्यासक्रमाबाबतच्या माहितीसाठी:",
      "contactLblAddr": "पत्ता:",
      "contactValAddr": "शिवाजी इंग्लिश स्कूल व ज्युनिअर कॉलेज, मु. पो. पांडूर तिठा, तालुका कुडाळ, जिल्हा सिंधुदुर्ग, महाराष्ट्र – ४१६८१२",
      "contactLblPhone": "संपर्क क्रमांक:",
      "contactLblEmail": "अधिकृत ईमेल:",
      "contactLblHours": "कार्यालयीन वेळ:",
      "contactValHours": "सोमवार ते शनिवार: सकाळी ९:३० ते सायंकाळी ४:३० (रविवार सुट्टी)",
      "inquiryHead": "चौकशी संदेश पाठवा",
      "lblFormName": "विद्यार्थी / पालकांचे नाव *",
      "lblFormPhone": "मोबाईल नंबर (१० अंकी) *",
      "lblFormPurpose": "चौकशीचा उद्देश *",
      "lblFormMsg": "आपला संदेश / प्रश्न *",
      "txtSubmitInquiry": "चौकशी पाठवा"
    }
  };

  const facilitiesData = {
    smartClass: { icon: "fa-chalkboard", img: "images/facilities/smart-class.jpg", fallbackImg: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1000&q=80", badgeEn: "Interactive Touch Screen", badgeMr: "डिजिटल टच स्क्रीन", titleEn: "Interactive Smart Classrooms", titleMr: "डिजिटल स्मार्ट क्लासरूम्स", descEn: "Equipped with high-definition interactive touchscreens, smart projectors, digital podiums, and ultra-high-speed broadband. Complex concepts in Science and Mathematics are taught using animated simulations, 3D models, and digital board notes.", descMr: "उच्च दर्जाचे टच-सक्षम डिजिटल स्मार्ट बोर्ड, ऑडिओ-व्हिज्युअल प्रोजेक्शन सिस्टीम आणि हाय-स्पीड इंटरनेटसह सुसज्ज वर्गखोल्या, ज्यामुळे क्लिष्ट संकल्पना दृकश्राव्य माध्यमातून सहज समजतात.", tagsEn: ["Interactive Touchscreen", "Digital Podium", "Audio-Visual Projection", "E-Learning Modules"], tagsMr: ["टच स्क्रीन", "डिजिटल पोडियम", "दृकश्राव्य प्रोजेक्शन", "ई-लर्निंग"] },
    itLab: { icon: "fa-desktop", img: "images/facilities/it-lab.jpg", fallbackImg: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1000&q=80", badgeEn: "40+ Workstations", badgeMr: "४०+ कॉम्प्युटर लॅब", titleEn: "Computer & Information Technology (IT) Lab", titleMr: "कॉम्प्युटर आणि माहिती तंत्रज्ञान (IT) लॅब", descEn: "Modern computing center featuring 40+ networked Core-i5 systems with dual-boot Linux and Windows OS, gigabit Ethernet LAN, dedicated high-speed optical fiber leased line, HTML5/CSS3/JavaScript IDEs, PostgreSQL/MySQL database engines, and full power backup via centralized online UPS.", descMr: "४०+ अद्ययावत संगणक, अखंड हाय-स्पीड इंटरनेट, लिनक्स व विंडोज ऑपरेटिंग सिस्टीम, HTML5/CSS3/JS वेब डिझायनिंग टूल्स आणि अखंड वीज पुरवठ्यासह सज्ज प्रशस्त IT लॅब.", tagsEn: ["40+ Core-i5 PCs", "Gigabit LAN & Fiber", "Linux & Windows OS", "Web Design IDEs"], tagsMr: ["४०+ संगणक", "ऑप्टिकल फायबर इंटरनेट", "लिनक्स व विंडोज", "वेब डिझायनिंग टूल्स"] },
    physicsLab: { icon: "fa-atom", img: "images/facilities/physics-lab.jpg", fallbackImg: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1000&q=80", badgeEn: "Precision Apparatus", badgeMr: "अचूक प्रायोगिक साधने", titleEn: "Physics Laboratory", titleMr: "भौतिकशास्त्र प्रयोगशाळा", descEn: "Designed strictly per Maharashtra HSC Board specifications. Equipped with darkroom optics setups, spectrometers, travelling microscopes, potentiometer benches, resonance tubes, and digital multi-meters ensuring hands-on mastery of practical physics.", descMr: "महाराष्ट्र HSC बोर्डाच्या मानकांनुसार सुसज्ज. ऑप्टिक्स, स्पेक्ट्रोमीटर, मायक्रोस्कोप, पोटेंशियोमीटर आणि अचूक विद्युत मापक यंत्रांनी सज्ज प्रशस्त लॅब.", tagsEn: ["Optics & Darkroom", "Spectrometers", "Travelling Microscopes", "Electrical Benches"], tagsMr: ["ऑप्टिक्स डार्क रूम", "स्पेक्ट्रोमीटर", "मायक्रोस्कोप", "विद्युत प्रयोग मांडणी"] },
    chemLab: { icon: "fa-flask", img: "images/facilities/chemistry-lab.jpg", fallbackImg: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?auto=format&fit=crop&w=1000&q=80", badgeEn: "Safe & Modern Fume Hoods", badgeMr: "सुरक्षित रसायन लॅब", titleEn: "Chemistry Laboratory", titleMr: "रसायनशास्त्र प्रयोगशाळा", descEn: "Spacious, well-ventilated laboratory furnished with anti-corrosive granite counters, individual LPG burner stations, calibrated chemical balances, glass distillation units, eye-wash stations, and dedicated safety shower protocols.", descMr: "सुरक्षितता मानकांचे काटेकोर पालन करणारी हवेशीर प्रयोगशाळा. ग्रॅनाइट प्लॅटफॉर्म, बर्नर स्टेशन, डिजिटल वजनी काटे आणि सर्व रासायनिक अभिकर्मके उपलब्ध.", tagsEn: ["Granite Workstations", "Chemical Balances", "Safety Showers", "Distillation Setups"], tagsMr: ["ग्रॅनाइट वर्कस्टेशन", "रासायनिक शिल्लक", "सुरक्षा शॉवर", "डिस्टिलेशन संच"] },
    bioLab: { icon: "fa-dna", img: "images/facilities/biology-lab.jpg", fallbackImg: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=1000&q=80", badgeEn: "Microscopes & Specimens", badgeMr: "सूक्ष्मदर्शक व नमुने", titleEn: "Biology Laboratory", titleMr: "जीवशास्त्र प्रयोगशाळा", descEn: "Equipped with binocular compound microscopes, preserved Konkan floral and faunal specimens, anatomical human skeletal models, plant physiology apparatus, and permanent cytology projection slides for Botany and Zoology practicals.", descMr: "बायनॉक्युलर संयुक्त सूक्ष्मदर्शक, कोकणातील वनस्पती व प्राणी नमुने, मानवी सांगाडा मॉडेल्स आणि वनस्पतीशास्त्र व प्राणीशास्त्र प्रयोगांची समृद्ध मांडणी.", tagsEn: ["Compound Microscopes", "Botanical Herbarium", "Anatomical Models", "Histology Slides"], tagsMr: ["संयुक्त सूक्ष्मदर्शक", "हर्बेरियम नमुने", "मानवी सांगाडा", "सायटोलॉजी स्लाईड्स"] },
    library: { icon: "fa-book-bookmark", img: "images/facilities/library.jpg", fallbackImg: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1000&q=80", badgeEn: "15,000+ Books", badgeMr: "१५,०००+ ग्रंथ संपदा", titleEn: "Central Library & Reading Hall", titleMr: "मध्यवर्ती ग्रंथालय व वाचन कक्ष", descEn: "A serene academic sanctuary stocking over 15,000 reference textbooks, Maharashtra State Board guides, CET/NEET/JEE preparatory series, educational journals, regional Konkani & Marathi literature, and a peaceful 100-seat reading hall.", descMr: "१५,००० हून अधिक संदर्भ पुस्तके, स्पर्धा परीक्षा मार्गदर्शिका, शैक्षणिक नियतकालिके, मराठी साहित्य आणि १०० विद्यार्थी क्षमतेचा शांत वाचन कक्ष.", tagsEn: ["15,000+ Volumes", "Competitive Exam Guides", "Digital Catalog (OPAC)", "100-Seat Study Hall"], tagsMr: ["१५,०००+ पुस्तके", "स्पर्धा परीक्षा कक्ष", "डिजिटल कॅटलॉग", "१०० आसन वाचनालय"] },
    sports: { icon: "fa-volleyball", img: "images/facilities/sports-ground.jpg", fallbackImg: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80", badgeEn: "2-Acre Athletic Complex", badgeMr: "२ एकर भव्य क्रीडांगण", titleEn: "Playground & Sports Complex", titleMr: "क्रीडांगण व क्रीडा संकुल", descEn: "Expansive multi-sport athletic grounds featuring standard volleyball courts, Kho-Kho & Kabaddi clay arenas, running tracks, cricket pitches, and indoor facilities for chess, carrom, and table tennis under certified NIS physical training instructors.", descMr: "२ एकराचे विस्तीर्ण मैदान, व्हॉलीबॉल कोर्ट, खो-खो व कबड्डीचे मातीचे मैदान, धावपट्टी आणि इनडोअर खेळांसाठी टेबल टेनिस व बुद्धिबळ कक्ष.", tagsEn: ["2-Acre Grounds", "Kabaddi & Kho-Kho", "Volleyball Court", "Indoor Games Room"], tagsMr: ["२ एकर मैदान", "कबड्डी व खो-खो", "व्हॉलीबॉल कोर्ट", "इनडोअर गेम्स"] },
    auditorium: { icon: "fa-masks-theater", img: "images/facilities/auditorium.jpg", fallbackImg: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1000&q=80", badgeEn: "500+ Seating Capacity", badgeMr: "५०० आसन क्षमता", titleEn: "Auditorium & Cultural Stage", titleMr: "सभागृह व सांस्कृतिक मंच", descEn: "A grand multi-purpose hall equipped with acoustic wall treatment, modern stage lighting, surround sound PA systems, and digital projection. Host venue for Annual Gatherings, Shiv Jayanti celebrations, elocutions, science fairs, and parent conferences.", descMr: "अत्याधुनिक ध्वनी व्यवस्था, स्टेज लाइटिंग आणि ५०० आसन क्षमतेचे भव्य सभागृह. स्नेहसंमेलन, शिवजयंती, वक्तृत्व स्पर्धा आणि परिसंवादांसाठी उपयुक्त.", tagsEn: ["500+ Seats", "Acoustic Stage", "Surround Sound PA", "Stage Lighting"], tagsMr: ["५०० आसने", "अकॉस्टिक स्टेज", "सराउंड साऊंड", "स्टेज लाइटिंग"] }
  };

  const galleryData = [
    { id: 1, category: 'campus', img: 'images/gallery/campus-main.jpg', fallbackImg: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80', titleEn: 'Main Academic Campus & Building', titleMr: 'मुख्य इमारत व शाळा परिसर', descEn: 'The picturesque front view of Shivaji English School & Junior College established in 1960 at Pandur Titha.', descMr: '१९६० पासून सिंधुदुर्गातील विद्यार्थ्यांचे भविष्य घडविणारी मुख्य महाविद्यालयीन इमारत.', dateEn: 'Campus View', dateMr: 'परिसर', catEn: 'Campus & Labs', catMr: 'परिसर व लॅब' },
    { id: 2, category: 'festivals', img: 'images/gallery/shiv-jayanti.jpg', fallbackImg: 'https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&w=1000&q=80', titleEn: 'Chhatrapati Shivaji Maharaj Jayanti Utsav', titleMr: 'छत्रपती शिवाजी महाराज जयंती व पालखी सोहळा', descEn: 'Grand annual procession, traditional Lezim performance, dhol-tasha, and patriotic student speeches.', descMr: 'भव्य शिवजयंती मिरवणूक, लेझीम प्रात्यक्षिके आणि विद्यार्थ्यांची प्रेरणादायी भाषणे.', dateEn: '19 February', dateMr: '१९ फेब्रुवारी', catEn: 'Shiv Jayanti', catMr: 'शिवजयंती' },
    { id: 3, category: 'campus', img: 'images/gallery/it-session.jpg', fallbackImg: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80', titleEn: '12th HSC IT Practical Lab Session', titleMr: '१२ वी IT प्रॅक्टिकल व कोडिंग सत्र', descEn: 'Students developing responsive websites, writing CSS Flexbox, and executing JavaScript SOP exercises.', descMr: 'विद्यार्थी HTML5, CSS3 आणि जावास्क्रिप्ट प्रॅक्टिकल्स प्रत्यक्ष कॉम्प्युटरवर करताना.', dateEn: 'HSC IT Practicals', dateMr: 'HSC IT प्रात्यक्षिके', catEn: 'IT Lab', catMr: 'IT लॅब' },
    { id: 4, category: 'cultural', img: 'images/gallery/annual-gathering.jpg', fallbackImg: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80', titleEn: 'Annual Gathering Traditional Folk Dance', titleMr: 'वार्षिक स्नेहसंमेलन - पारंपरिक लोकनृत्य व नाटक', descEn: 'Vibrant cultural stage performances, Konkani folk dance, classical drama, and musical orchestras.', descMr: 'वार्षिक स्नेहसंमेलनातील मनमोहक नृत्य, नाटक आणि पारंपरिक लोककला सादरीकरण.', dateEn: 'Annual Gathering', dateMr: 'वार्षिक स्नेहसंमेलन', catEn: 'Annual Gathering', catMr: 'स्नेहसंमेलन' },
    { id: 5, category: 'science', img: 'images/gallery/science-practical.jpg', fallbackImg: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80', titleEn: 'Physics & Chemistry Practical Experiments', titleMr: 'भौतिकशास्त्र व रसायनशास्त्र प्रात्यक्षिके', descEn: 'Junior College Science students conducting titration, spectrometry, and optics experiments.', descMr: 'विज्ञान शाखेतील विद्यार्थी प्रयोगशाळेत प्रत्यक्ष रासायनिक व भौतिक प्रयोग करताना.', dateEn: 'Science Stream', dateMr: 'विज्ञान शाखा', catEn: 'Science Lab', catMr: 'विज्ञान लॅब' },
    { id: 6, category: 'sports', img: 'images/gallery/sports-meet.jpg', fallbackImg: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80', titleEn: 'Inter-School Sports Meet & Tournament', titleMr: 'वार्षिक क्रीडा महोत्सव व कबड्डी / व्हॉलीबॉल स्पर्धा', descEn: 'Thrilling inter-house Kabaddi, Kho-Kho, Volleyball, and athletics sprint matches.', descMr: 'विद्यार्थ्यांमधील चुरशीचे कबड्डी, खो-खो, व्हॉलीबॉल आणि धावण्याच्या स्पर्धा सामने.', dateEn: 'Sports Meet', dateMr: 'क्रीडा महोत्सव', catEn: 'Annual Sports', catMr: 'क्रीडा स्पर्धा' },
    { id: 7, category: 'science', img: 'images/gallery/science-fair.jpg', fallbackImg: 'https://images.unsplash.com/photo-1564325724739-bae0bd08762c?auto=format&fit=crop&w=800&q=80', titleEn: 'District-Level Science Exhibition Projects', titleMr: 'तालुका व जिल्हास्तरीय विज्ञान प्रदर्शन', descEn: 'Innovative working models on solar energy, drip irrigation, and IoT robotics created by students.', descMr: 'सौर ऊर्जा, जलसंधारण आणि रोबोटिक्सवरील नाविन्यपूर्ण विज्ञान प्रकल्पांचे सादरीकरण.', dateEn: 'Science Fair', dateMr: 'विज्ञान प्रदर्शन', catEn: 'Science Exhibition', catMr: 'विज्ञान प्रदर्शन' },
    { id: 8, category: 'campus', img: 'images/gallery/smart-classroom.jpg', fallbackImg: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80', titleEn: 'Interactive Smart Classroom Lecture', titleMr: 'स्मार्ट क्लासरूम डिजिटल ऑडिओ-व्हिज्युअल तासिका', descEn: 'Engaging digital syllabus presentations using interactive touchscreens and audiovisual simulations.', descMr: 'डिजिटल स्क्रीनवर क्लिष्ट संकल्पनांचे सुलभ दृकश्राव्य स्पष्टीकरण घेणारे विद्यार्थी.', dateEn: 'Smart Teaching', dateMr: 'स्मार्ट शिक्षण', catEn: 'Classroom', catMr: 'वर्गखोली' },
    { id: 9, category: 'festivals', img: 'images/gallery/independence-day.jpg', fallbackImg: 'https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&w=800&q=80', titleEn: 'Independence Day Parade & Flag Hoisting', titleMr: 'स्वातंत्र्य दिन ध्वजारोहण व संचलन', descEn: 'Ceremonial national flag hoisting, Scout & Guide parade, and patriotic choir performances.', descMr: '१५ ऑगस्ट स्वातंत्र्य दिन सोहळा, ध्वजारोहण आणि शिस्तबद्ध संचलन.', dateEn: '15 August', dateMr: '१५ ऑगस्ट', catEn: 'National Day', catMr: 'राष्ट्रीय उत्सव' },
    { id: 10, category: 'campus', img: 'images/gallery/library-study.jpg', fallbackImg: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80', titleEn: 'Central Library & Dedicated Study Hall', titleMr: 'मध्यवर्ती ग्रंथालय व वाचन कक्ष', descEn: 'Students preparing for MHT-CET, NEET, and Board Exams in our quiet reference library.', descMr: 'शांत वातावरणात स्पर्धा परीक्षा व बोर्ड परीक्षेचा अभ्यास करणारे विद्यार्थी.', dateEn: 'Study Hall', dateMr: 'अभ्यासिका', catEn: 'Library', catMr: 'ग्रंथालय' },
    { id: 11, category: 'cultural', img: 'images/gallery/prize-distribution.jpg', fallbackImg: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80', titleEn: 'Annual Prize Distribution & Merit Felicitation', titleMr: 'गुणवंत विद्यार्थी सत्कार व बक्षीस वितरण समारंभ', descEn: 'Honoring SSC & HSC Board toppers and sports champions with medals and scholarships.', descMr: 'बोर्ड परीक्षेत व क्रीडा स्पर्धांमध्ये उज्ज्वल यश संपादन केलेल्या विद्यार्थ्यांचा गौरव.', dateEn: 'Award Ceremony', dateMr: 'बक्षीस वितरण', catEn: 'Felicitation', catMr: 'सत्कार समारंभ' },
    { id: 12, category: 'sports', img: 'images/gallery/athletics-sprint.jpg', fallbackImg: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80', titleEn: 'Athletic Track & Field Sprint Races', titleMr: 'धावण्याच्या शर्यती व मैदानी क्रीडा स्पर्धा', descEn: 'Annual track and field 100m, 200m, and relay races conducted on the college grounds.', descMr: 'विद्यालयाच्या मैदानावर १०० मी., २०० मी. व रिले शर्यतींचे आयोजन.', dateEn: 'Athletics Meet', dateMr: 'धावण्याची शर्यत', catEn: 'Athletics', catMr: 'मैदानी खेळ' }
  ];

  let activeGalleryList = [...galleryData];

  const sopData = {
    sop1: { badge: "SOP 1 • HTML5 & CSS", title: "Creation of Website using HTML5 and CSS3 Layout", aim: "To design a multi-page responsive college portal adhering to HTML5 semantic tags (<header>, <nav>, <section>, <article>, <aside>, <footer>) with external CSS styling.", code: `<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>Shivaji English School & Jr. College</title>\n  <style>\n    body { font-family: 'Segoe UI', Arial, sans-serif; margin: 0; background: #f8fafc; color: #1e293b; }\n    header { background: #0f172a; color: white; padding: 1.5rem; text-align: center; }\n    nav { background: #1e293b; display: flex; justify-content: center; gap: 1.5rem; padding: 0.75rem; }\n    nav a { color: #38bdf8; text-decoration: none; font-weight: 600; }\n    .container { max-width: 960px; margin: 2rem auto; padding: 0 1rem; }\n    .card { background: white; padding: 1.5rem; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.06); }\n    footer { background: #0f172a; color: #94a3b8; text-align: center; padding: 1rem; margin-top: 2rem; }\n  </style>\n</head>\n<body>\n  <header>\n    <h1>Shivaji English School & Jr. College</h1>\n    <p>Pandur Titha, Sindhudurg • Affiliated to MSBSHSE Pune</p>\n  </header>\n  <nav>\n    <a href="#home">Home</a>\n    <a href="#streams">Streams</a>\n    <a href="#facilities">Facilities</a>\n    <a href="#contact">Contact</a>\n  </nav>\n  <div class="container">\n    <div class="card">\n      <h2>Welcome to Sindhudurg's Premier Institution</h2>\n      <p>Providing quality education in Science, Commerce, Arts, and IT since 1960.</p>\n    </div>\n  </div>\n  <footer>\n    <p>&copy; 2026 Shivaji English School & Jr. College. All Rights Reserved.</p>\n  </footer>\n</body>\n</html>` },
    sop2: { badge: "SOP 2 • JavaScript Validation", title: "Client-Side Form Validation using JavaScript", aim: "To implement robust JavaScript client-side validation on an admission inquiry form verifying Name (non-empty & alphabetic), Email, 10-digit Phone number, and Stream selection.", code: `function validateAdmissionForm() {\n  const name = document.getElementById('studentName').value.trim();\n  const email = document.getElementById('studentEmail').value.trim();\n  const phone = document.getElementById('studentPhone').value.trim();\n  const stream = document.getElementById('studentStream').value;\n\n  // 1. Name validation (Alphabets only)\n  const nameRegex = /^[A-Za-z\\s]{3,40}$/;\n  if (!nameRegex.test(name)) {\n    alert("Please enter a valid Student Name (alphabets only, min 3 characters).");\n    return false;\n  }\n\n  // 2. Email validation\n  const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\n  if (!emailRegex.test(email)) {\n    alert("Please enter a valid Email address.");\n    return false;\n  }\n\n  // 3. Phone validation (10 digits starting with 6, 7, 8, 9)\n  const phoneRegex = /^[6-9]\\d{9}$/;\n  if (!phoneRegex.test(phone)) {\n    alert("Please enter a valid 10-digit Indian Mobile Number.");\n    return false;\n  }\n\n  // 4. Stream selection\n  if (stream === "" || stream === "select") {\n    alert("Please select an Academic Stream (Science / Commerce / Arts / IT).");\n    return false;\n  }\n\n  alert("Form validated successfully! Admission inquiry submitted.");\n  return true;\n}` },
    sop3: { badge: "SOP 3 • Audio & Video Media", title: "Embedding Multimedia (Audio & Video) in HTML5", aim: "To integrate HTML5 <audio> and <video> elements with custom controls, multiple source codecs (mp4/webm, mp3/ogg), fallback messages, and CSS styling.", code: `<section class="multimedia-section">\n  <h2>College Anthem & Campus Tour</h2>\n  \n  <!-- HTML5 Audio -->\n  <div class="media-box">\n    <h3>Shivaji School Anthem (Audio)</h3>\n    <audio controls preload="metadata">\n      <source src="media/anthem.mp3" type="audio/mpeg">\n      <source src="media/anthem.ogg" type="audio/ogg">\n      Your browser does not support the audio element.\n    </audio>\n  </div>\n\n  <!-- HTML5 Video -->\n  <div class="media-box">\n    <h3>Interactive Campus Walkthrough (Video)</h3>\n    <video controls poster="images/facilities/smart-class.jpg" width="100%" height="auto">\n      <source src="media/campus-tour.mp4" type="video/mp4">\n      <source src="media/campus-tour.webm" type="video/webm">\n      Your browser does not support the video tag.\n    </video>\n  </div>\n</section>` },
    sop4: { badge: "SOP 4 • Image Mapping", title: "Client-Side Image Mapping with Clickable Hotspots", aim: "To create an interactive campus map graphic utilizing <map> and <area> tags with rect, circle, and poly coordinate shapes linking to respective college departments.", code: `<div class="image-map-container">\n  <h2>Interactive Campus Department Map</h2>\n  <img src="images/campus-map.jpg" usemap="#campusmap" alt="Campus Map" width="800" height="400">\n\n  <map name="campusmap">\n    <!-- Rectangular Area for Science & IT Wing -->\n    <area shape="rect" coords="34,44,270,350" href="#academics" alt="Science & IT Labs" title="Science & IT Building">\n    \n    <!-- Circular Area for Central Library -->\n    <area shape="circle" coords="410,200,90" href="#campus" alt="Central Library" title="Central Library & Reading Hall">\n    \n    <!-- Polygonal Area for Sports Ground -->\n    <area shape="poly" coords="520,60,780,60,750,360,500,320" href="#gallery" alt="Athletic Grounds" title="2-Acre Sports Complex">\n  </map>\n</div>` },
    sop5: { badge: "SOP 5 • CSS Flexbox Layout", title: "Responsive Multi-Card Layout using CSS Flexbox", aim: "To implement modern responsive web page cards that adjust automatically between desktop, tablet, and mobile screens using flexbox properties (flex-wrap, justify-content, gap).", code: `.course-grid {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1.5rem;\n  justify-content: space-between;\n}\n\n.course-card {\n  flex: 1 1 calc(25% - 1.5rem);\n  min-width: 250px;\n  background: white;\n  border-radius: 12px;\n  padding: 1.5rem;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n\n.course-card:hover {\n  transform: translateY(-6px);\n  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);\n}\n\n@media (max-width: 768px) {\n  .course-card {\n    flex: 1 1 100%;\n  }\n}` },
    sop6: { badge: "SOP 6 • SEO & Meta Tags", title: "Search Engine Optimization (SEO) & Structured Headings", aim: "To optimize web pages for search engines using standard Meta tags (charset, description, keywords, author, robots, OpenGraph), semantic hierarchy (H1-H6), and alt attributes.", code: `<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Shivaji English School & Jr. College | Pandur Titha, Sindhudurg</title>\n  \n  <!-- Core SEO Meta Tags -->\n  <meta name="description" content="Official website of Shivaji English School & Junior College, Pandur Titha, Sindhudurg. Admissions open for 11th & 12th Science, Commerce, Arts, and IT.">\n  <meta name="keywords" content="Shivaji College Pandur Titha, Sindhudurg Junior College, 12th IT HSC Maharashtra Board, Sindhudurg Science College">\n  <meta name="author" content="Shivaji English School & Jr. College IT Dept">\n  <meta name="robots" content="index, follow">\n\n  <!-- Open Graph for Social Media Sharing -->\n  <meta property="og:title" content="Shivaji English School & Junior College">\n  <meta property="og:description" content="64+ Years of Academic Excellence in Sindhudurg.">\n  <meta property="og:image" content="https://images.unsplash.com/photo-1562774053-701939374585">\n  <meta property="og:type" content="website">\n</head>\n<body>\n  <h1>Shivaji English School & Junior College - Pandur Titha</h1>\n  <!-- Structured Semantic Content -->\n</body>\n</html>` }
  };

  window.applyLanguage = function(lang) {
    safeSetItem('ses_lang', lang);
    state.lang = lang;
    const dict = translations[lang] || translations.en;

    const btnEn = document.getElementById('langEnBtn');
    const btnMr = document.getElementById('langMrBtn');
    if (btnEn && btnMr) {
      if (lang === 'mr') { btnMr.classList.add('active'); btnEn.classList.remove('active'); } 
      else { btnEn.classList.add('active'); btnMr.classList.remove('active'); }
    }

    for (const key in dict) {
      const el = document.getElementById(key);
      if (el) el.innerHTML = dict[key];
    }

    const txtDark = document.getElementById('txtDarkStatus');
    if (txtDark) txtDark.textContent = state.darkMode ? (lang === 'mr' ? 'सुरू' : 'On') : (lang === 'mr' ? 'बंद' : 'Off');

    const txtSmart = document.getElementById('txtSmartStatus');
    if (txtSmart) txtSmart.textContent = state.smartBoard ? (lang === 'mr' ? 'सुरू' : 'On') : (lang === 'mr' ? 'बंद' : 'Off');

    const aiBubble = document.getElementById('aiWelcomeBubble');
    if (aiBubble) {
      if (lang === 'mr') {
        aiBubble.innerHTML = `नमस्ते! मी <strong>शिवाजी इंग्लिश स्कूल आणि ज्युनिअर कॉलेज, पांडूर तिठा</strong> चा अधिकृत <strong>Ai Assistant</strong> आहे.<br><br>खालीलपैकी कोणताही प्रश्न निवडा किंवा आपला प्रश्न टाइप करा:
        <div class="ai-suggestion-chips">
          <button class="ai-chip-btn" data-query="Admissions">🎓 प्रवेश माहिती</button>
          <button class="ai-chip-btn" data-query="Campus Facilities">🏫 परिसर सुविधा</button>
          <button class="ai-chip-btn" data-query="Office Timings">🕒 वेळ व सुट्ट्या</button>
          <button class="ai-chip-btn" data-query="Location">📍 पत्ता व नकाशा</button>
          <button class="ai-chip-btn" data-query="12th IT SOPs">💻 १२ वी IT प्रॅक्टिकल</button>
        </div>`;
      } else {
        aiBubble.innerHTML = `Namaste! I am the Smart <strong>Ai Assistant</strong> for <strong>Shivaji English School &amp; Jr. College, Pandur Titha</strong>.<br><br>Ask me anything or choose a quick topic below:
        <div class="ai-suggestion-chips">
          <button class="ai-chip-btn" data-query="Admissions">🎓 Admissions</button>
          <button class="ai-chip-btn" data-query="Campus Facilities">🏫 Facilities</button>
          <button class="ai-chip-btn" data-query="Office Timings">🕒 Timings</button>
          <button class="ai-chip-btn" data-query="Location">📍 Location & Map</button>
          <button class="ai-chip-btn" data-query="12th IT SOPs">💻 12th IT SOPs</button>
        </div>`;
      }
    }

    window.selectFacility(state.currentFacility);
    window.updateGalleryLanguage();
    window.renderSopContent(state.currentSop);
  };

  window.applyFontSize = function(sizeClass) {
    safeSetItem('ses_font', sizeClass);
    state.fontSize = sizeClass;
    document.documentElement.classList.remove('font-sm', 'font-md', 'font-lg', 'font-xl');
    document.documentElement.classList.add(sizeClass);

    ['fontSmBtn', 'fontMdBtn', 'fontLgBtn', 'fontXlBtn'].forEach(btnId => {
      const btn = document.getElementById(btnId);
      if (!btn) return;
      if (btnId.toLowerCase().includes(sizeClass.split('-')[1])) { 
        btn.classList.add('active'); 
      } else { 
        btn.classList.remove('active'); 
      }
    });
  };

  window.applyTheme = function(isDark) {
    safeSetItem('ses_dark', isDark);
    state.darkMode = isDark;
    if (isDark) { document.documentElement.classList.add('dark-theme'); } else { document.documentElement.classList.remove('dark-theme'); }
    const btn = document.getElementById('darkModeToggleBtn');
    if (btn) { if (isDark) btn.classList.add('active'); else btn.classList.remove('active'); }
    const txt = document.getElementById('txtDarkStatus');
    if (txt) { txt.textContent = isDark ? (state.lang === 'mr' ? 'सुरू' : 'On') : (state.lang === 'mr' ? 'बंद' : 'Off'); }
  };

  window.applySmartBoard = function(isSmart) {
    safeSetItem('ses_smart', isSmart);
    state.smartBoard = isSmart;
    if (isSmart) { document.documentElement.classList.add('smartboard-mode'); } else { document.documentElement.classList.remove('smartboard-mode'); }
    const btn = document.getElementById('smartBoardToggleBtn');
    if (btn) { if (isSmart) btn.classList.add('active'); else btn.classList.remove('active'); }
    const txt = document.getElementById('txtSmartStatus');
    if (txt) { txt.textContent = isSmart ? (state.lang === 'mr' ? 'सुरू' : 'On') : (state.lang === 'mr' ? 'बंद' : 'Off'); }
  };

  window.openSettingsModal = function() {
    const modal = document.getElementById('settingsModal');
    if (modal) { modal.classList.add('open'); document.body.style.overflow = 'hidden'; }
  };

  window.closeSettingsModal = function() {
    const modal = document.getElementById('settingsModal');
    if (modal) { modal.classList.remove('open'); document.body.style.overflow = ''; }
  };

  window.switchMainTab = function(tabId) {
    document.querySelectorAll('.main-tab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-tab-target') === tabId);
    });
    document.querySelectorAll('.main-tab-pane').forEach(pane => {
      pane.classList.toggle('active', pane.id === 'tab-' + tabId);
    });
  };

  window.openNoticeModal = function(noticeId) {
    const modal = document.getElementById('noticeModal');
    const noticeItem = document.querySelector(`.notice-item[data-notice-id="${noticeId}"]`);
    
    if (modal && noticeItem) {
      const tagHTML = noticeItem.querySelector('.notice-tag').outerHTML;
      const titleText = noticeItem.querySelector('h4').textContent;
      const descText = noticeItem.querySelector('p').textContent;
      const day = noticeItem.querySelector('.date-day').textContent;
      const month = noticeItem.querySelector('.date-month').textContent;
      
      document.getElementById('noticeModalTagWrap').innerHTML = tagHTML;
      document.getElementById('noticeModalDate').innerHTML = `<i class="fa-regular fa-calendar"></i> ${day} ${month} 2026`;
      document.getElementById('noticeModalTitle').textContent = titleText;
      document.getElementById('noticeModalDesc').textContent = descText;
      
      modal.classList.add('open');
    }
  };
  
  window.closeNoticeModal = function() {
    const modal = document.getElementById('noticeModal');
    if (modal) modal.classList.remove('open');
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
      imgEl.src = fac.img;
      imgEl.onerror = function() { if (this.src !== fac.fallbackImg) { this.src = fac.fallbackImg; } this.onerror = null; };
      imgEl.alt = state.lang === 'mr' ? fac.titleMr : fac.titleEn;
    }

    const badgeEl = document.getElementById('facilityImgBadge');
    if (badgeEl) {
      const bText = state.lang === 'mr' ? (fac.badgeMr || '') : (fac.badgeEn || '');
      badgeEl.innerHTML = `<i class="fa-solid ${fac.icon}"></i> <span>${bText}</span>`;
    }

    const iconEl = document.getElementById('facilityIcon');
    if (iconEl) iconEl.innerHTML = `<i class="fa-solid ${fac.icon}"></i>`;
    
    const titleEl = document.getElementById('facilityTitle');
    if (titleEl) titleEl.textContent = state.lang === 'mr' ? fac.titleMr : fac.titleEn;
    
    const descEl = document.getElementById('facilityDesc');
    if (descEl) descEl.textContent = state.lang === 'mr' ? fac.descMr : fac.descEn;

    const tagsEl = document.getElementById('facilityTags');
    if (tagsEl) {
      const tags = state.lang === 'mr' ? fac.tagsMr : fac.tagsEn;
      tagsEl.innerHTML = tags.map(t => `<span class="badge">${t}</span>`).join('');
    }
  };

  window.zoomCurrentFacility = function() {
    const fac = facilitiesData[state.currentFacility];
    if (!fac) return;
    activeGalleryList = [{
      img: fac.img, fallbackImg: fac.fallbackImg, titleEn: fac.titleEn, titleMr: fac.titleMr, descEn: fac.descEn, descMr: fac.descMr, catEn: 'Campus Facility', catMr: 'परिसर सुविधा', dateEn: 'Infrastructure', dateMr: 'पायाभूत सुविधा'
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

  window.updateGalleryLanguage = function() {
    const cards = document.querySelectorAll('.gallery-card');
    let dataIdx = 0; // because youtube embed is first card, skip it
    cards.forEach((card) => {
      if(card.querySelector('iframe')) return; // skip video
      const item = galleryData[dataIdx];
      if (!item) return;
      const titleEl = card.querySelector('h4');
      const dateEl = card.querySelector('p');
      const catEl = card.querySelector('.gallery-cat-pill');

      if (titleEl) titleEl.textContent = state.lang === 'mr' ? item.titleMr : item.titleEn;
      if (dateEl) dateEl.innerHTML = `<i class="fa-regular fa-calendar"></i> ${state.lang === 'mr' ? item.dateMr : item.dateEn}`;
      if (catEl) catEl.textContent = state.lang === 'mr' ? item.catMr : item.catEn;
      dataIdx++;
    });
  };

  // Fixed openLightbox logic for filtered grids
  window.openLightbox = function(index, fromGrid = false) {
    if (fromGrid) {
        activeGalleryList = [...galleryData];
    }
    if (index < 0 || index >= activeGalleryList.length) return;
    state.activeLightboxIndex = index;
    const item = activeGalleryList[state.activeLightboxIndex];
    const modal = document.getElementById('galleryLightbox');
    if (!modal || !item) return;

    const img = document.getElementById('lightboxImg');
    if (img) {
      img.src = item.img;
      img.onerror = function() { if (this.src !== item.fallbackImg) { this.src = item.fallbackImg; } this.onerror = null; };
      img.alt = state.lang === 'mr' ? item.titleMr : item.titleEn;
    }
    
    document.getElementById('lightboxTitle').textContent = state.lang === 'mr' ? item.titleMr : item.titleEn;
    document.getElementById('lightboxDesc').textContent = state.lang === 'mr' ? item.descMr : item.descEn;
    document.getElementById('lightboxCategory').textContent = state.lang === 'mr' ? item.catMr : item.catEn;
    document.getElementById('lightboxDate').innerHTML = `<i class="fa-regular fa-calendar"></i> ${state.lang === 'mr' ? item.dateMr : item.dateEn}`;
    
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

  window.openItHubModal = function() {
    const modal = document.getElementById('itHubModal');
    if (modal) { modal.classList.add('open'); window.renderSopContent(state.currentSop); }
  };

  window.closeItHubModal = function() {
    const modal = document.getElementById('itHubModal');
    if (modal) modal.classList.remove('open');
  };

  window.selectSopTab = function(sopKey) {
    state.currentSop = sopKey;
    document.querySelectorAll('.sop-tab-btn').forEach(btn => {
      if (btn.getAttribute('data-sop-tab') === sopKey) { btn.classList.add('active'); } else { btn.classList.remove('active'); }
    });
    window.renderSopContent(sopKey);
  };

  window.renderSopContent = function(sopKey) {
    const container = document.getElementById('sopTabContent');
    if (!container) return;
    const item = sopData[sopKey] || sopData.sop1;

    const escapeHTML = str => str.replace(/[&<>'"]/g, tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag));

    container.innerHTML = `
      <div class="sop-content-card">
        <span class="sop-title-badge">${item.badge}</span>
        <h4 class="sop-heading">${item.title}</h4>
        <p class="sop-desc"><strong>Aim / Objective:</strong> ${item.aim}</p>
        <div class="sop-code-container">
          <div class="sop-code-header">
            <span><i class="fa-solid fa-code"></i> Verified HSC Board Practical Solution</span>
            <button class="btn btn-xs btn-outline-light" onclick="window.copySopCode()"><i class="fa-regular fa-copy"></i> Copy Code</button>
          </div>
          <pre class="sop-code-block"><code id="sopActiveCodeText">${escapeHTML(item.code)}</code></pre>
        </div>
      </div>
    `;
  };

  window.copySopCode = function() {
    const codeEl = document.getElementById('sopActiveCodeText');
    if (!codeEl) return;
    navigator.clipboard.writeText(codeEl.textContent).then(() => {
      alert(state.lang === 'mr' ? "कोड क्लिपबोर्डवर यशस्वीरीत्या कॉपी केला गेला!" : "Practical source code successfully copied to clipboard!");
    }).catch(() => { alert("Code selected. You can press Ctrl+C to copy."); });
  };

  window.openResourceInfo = function(type) {
    if (type === 'science') {
      window.open('https://nta.ac.in/Downloads', '_blank');
    } else if (type === 'commerce') {
      window.open('https://ebalbharati.in/main/publicHome.aspx', '_blank');
    } else if (type === 'papers') {
      window.open('https://shaalaa.com/question-papers/maharashtra-state-board-12th-board-exam-hsc-science-general_33', '_blank');
    }
  };

  // AI Assistant with Backdrop Lock
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
    const q = query.toLowerCase().trim();
    let reply = "";

    if (q.includes('school name') || q.includes('udise') || q.includes('location') || q.includes('pin') || q.includes('address') || q.includes('पत्ता') || q.includes('नकाशा') || q.includes('map')) {
      reply = state.lang === 'mr' 
        ? `📍 <strong>संस्थेची माहिती:</strong><br>• <strong>नाव:</strong> ${aiKnowledge.schoolName}<br>• <strong>पत्ता:</strong> ${aiKnowledge.location} (PIN: ${aiKnowledge.pin})<br>• <strong>स्थापना:</strong> ${aiKnowledge.established} (सह-शिक्षण)<br>• <strong>UDISE Code:</strong> ${aiKnowledge.udise}<br>• <a href="#contact" onclick="window.closeAiChat()" style="color: #3b82f6; text-decoration: underline;">Google Map वर पाहण्यासाठी येथे क्लिक करा</a>.` 
        : `📍 <strong>Institution Details:</strong><br>• <strong>Name:</strong> ${aiKnowledge.schoolName}<br>• <strong>Address:</strong> ${aiKnowledge.location} (PIN: ${aiKnowledge.pin})<br>• <strong>Established:</strong> ${aiKnowledge.established} (${aiKnowledge.type})<br>• <strong>UDISE Code:</strong> ${aiKnowledge.udise}<br>• <a href="#contact" onclick="window.closeAiChat()" style="color: #3b82f6; text-decoration: underline;">Click here to view our exact Google Maps location</a>.`;
    } 
    else if (q.includes('admission') || q.includes('प्रवेश') || q.includes('fee') || q.includes('form') || q.includes('timing') || q.includes('time') || q.includes('वेळ')) {
      reply = state.lang === 'mr' 
        ? `🕒 <strong>वेळापत्रक व प्रवेश (२०२६-२७):</strong><br>• <strong>माध्यमिक (५ वी ते १० वी):</strong> ${aiKnowledge.timings.secondary}<br>• <strong>कनिष्ठ महाविद्यालय (११ वी / १२ वी):</strong> ${aiKnowledge.timings.juniorCollege}<br>• <strong>कार्यालयीन वेळ:</strong> ${aiKnowledge.timings.office}<br><br><strong>प्रवेशासाठी लागणारी कागदपत्रे:</strong> शाळा सोडल्याचा दाखला (LC), आधार कार्ड, पासपोर्ट फोटो आणि मागील वर्षाची गुणपत्रिका.` 
        : `🕒 <strong>Timings & Admissions (2026-27):</strong><br>• <strong>Secondary (5th-10th):</strong> ${aiKnowledge.timings.secondary}<br>• <strong>Junior College (11th & 12th):</strong> ${aiKnowledge.timings.juniorCollege}<br>• <strong>Office Hours:</strong> ${aiKnowledge.timings.office}<br><br><strong>Required Documents:</strong> Leaving Certificate (LC), Aadhaar Card, Passport Photos, and Previous Marksheet.`;
    } 
    else if (q.includes('facility') || q.includes('सुविधा') || q.includes('lab') || q.includes('campus') || q.includes('परिसर') || q.includes('लॅब')) {
      reply = state.lang === 'mr' 
        ? `🏫 <strong>आमच्या परिसरातील सुविधा:</strong><br>• डिजिटल स्मार्ट क्लासरूम्स<br>• कॉम्प्युटर व IT लॅब<br>• भौतिकशास्त्र, रसायनशास्त्र आणि जीवशास्त्र प्रयोगशाळा<br>• मध्यवर्ती ग्रंथालय<br>• क्रीडांगण व सभागृह.` 
        : `🏫 <strong>Campus Facilities Available:</strong><br>• Smart Classrooms<br>• Computer & IT Lab<br>• Physics, Chemistry & Biology Laboratories<br>• Central Library<br>• Playground & Sports Complex.`;
    } 
    else if (q.includes('principal') || q.includes('प्राचार्य') || q.includes('contact') || q.includes('संपर्क') || q.includes('phone')) {
      reply = state.lang === 'mr' 
        ? `👨‍🏫 <strong>संपर्क व प्रशासन:</strong><br>• <strong>प्राचार्य:</strong> डॉ. अरविंद पाटील<br>• <strong>फोन नंबर:</strong> ${aiKnowledge.contact.phone}<br>• <strong>ईमेल:</strong> ${aiKnowledge.contact.email}` 
        : `👨‍🏫 <strong>Administration & Contact:</strong><br>• <strong>Principal:</strong> Dr. Arvind Patil<br>• <strong>Phone:</strong> ${aiKnowledge.contact.phone}<br>• <strong>Email:</strong> ${aiKnowledge.contact.email}`;
    } 
    else {
      reply = state.lang === 'mr' 
        ? "माफ करा, मी फक्त संस्थेची अधिकृत आणि प्रमाणित माहिती देतो. कृपया आमच्या कार्यालयाशी संपर्क साधा: " + aiKnowledge.contact.phone 
        : "I am programmed to only provide verified school information. Please contact the school office directly at " + aiKnowledge.contact.phone + ".";
    }

    setTimeout(() => { appendAiMessage(reply, 'ai'); }, 250);
  }

  function initApp() {
    window.applyLanguage(state.lang);
    window.applyFontSize(state.fontSize);
    window.applyTheme(state.darkMode);
    window.applySmartBoard(state.smartBoard);
    window.selectFacility('smartClass');
    window.filterGalleryCategory('all');

    // EXPLICIT EVENT BINDINGS FOR SETTINGS TO PREVENT BUGS
    document.getElementById('langEnBtn')?.addEventListener('click', () => window.applyLanguage('en'));
    document.getElementById('langMrBtn')?.addEventListener('click', () => window.applyLanguage('mr'));
    
    document.getElementById('fontSmBtn')?.addEventListener('click', () => window.applyFontSize('font-sm'));
    document.getElementById('fontMdBtn')?.addEventListener('click', () => window.applyFontSize('font-md'));
    document.getElementById('fontLgBtn')?.addEventListener('click', () => window.applyFontSize('font-lg'));
    document.getElementById('fontXlBtn')?.addEventListener('click', () => window.applyFontSize('font-xl'));
    
    document.getElementById('settingsOpenBtn')?.addEventListener('click', window.openSettingsModal);
    document.getElementById('settingsCloseBtn')?.addEventListener('click', window.closeSettingsModal);
    document.getElementById('btnCloseSettingsModal')?.addEventListener('click', window.closeSettingsModal);

    const darkModeToggleBtn = document.getElementById('darkModeToggleBtn');
    if (darkModeToggleBtn) darkModeToggleBtn.addEventListener('click', () => window.applyTheme(!state.darkMode));

    const smartBoardToggleBtn = document.getElementById('smartBoardToggleBtn');
    if (smartBoardToggleBtn) smartBoardToggleBtn.addEventListener('click', () => window.applySmartBoard(!state.smartBoard));

    const btnResetSettings = document.getElementById('btnResetSettings');
    if (btnResetSettings) btnResetSettings.addEventListener('click', () => { window.applyLanguage('en'); window.applyFontSize('font-md'); window.applyTheme(false); window.applySmartBoard(false); });

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

    document.querySelectorAll('.btn-notice-action').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-notice-open');
        if (id) window.openNoticeModal(id);
      });
    });

    document.querySelectorAll('.notice-item').forEach(item => {
      item.addEventListener('click', () => {
        const id = item.getAttribute('data-notice-id');
        if (id) window.openNoticeModal(id);
      });
    });

    const noticeModal = document.getElementById('noticeModal');
    if (noticeModal) noticeModal.addEventListener('click', (e) => { if (e.target === noticeModal) window.closeNoticeModal(); });
    const noticeModalCloseBtn = document.getElementById('noticeModalCloseBtn');
    if (noticeModalCloseBtn) noticeModalCloseBtn.addEventListener('click', window.closeNoticeModal);

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

    document.addEventListener('keydown', (e) => {
      const lightbox = document.getElementById('galleryLightbox');
      if (lightbox && lightbox.classList.contains('active')) {
        if (e.key === 'Escape') window.closeLightbox();
        if (e.key === 'ArrowRight') window.nextLightbox();
        if (e.key === 'ArrowLeft') window.prevLightbox();
      }
    });

    const btnOpenItHub = document.getElementById('btnOpenItHub');
    if (btnOpenItHub) btnOpenItHub.addEventListener('click', window.openItHubModal);

    const itModalCloseBtn = document.getElementById('itModalCloseBtn');
    if (itModalCloseBtn) itModalCloseBtn.addEventListener('click', window.closeItHubModal);

    const itHubModal = document.getElementById('itHubModal');
    if (itHubModal) { itHubModal.addEventListener('click', (e) => { if (e.target === itHubModal) window.closeItHubModal(); }); }

    document.querySelectorAll('.sop-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const sopKey = btn.getAttribute('data-sop-tab');
        if (sopKey) window.selectSopTab(sopKey);
      });
    });

    const hubIds = ['btnOpenScienceHub', 'btnOpenCommerceHub', 'btnOpenPapersHub'];
    const hubActions = ['science', 'commerce', 'papers'];
    hubIds.forEach((id, i) => { const el = document.getElementById(id); if (el) el.addEventListener('click', () => window.openResourceInfo(hubActions[i])); });

    const aiIds = ['heroAskAiBtn', 'aiToggleBtn', 'aiCloseBtn', 'aiSendBtn'];
    const aiActions = [window.openAiChat, window.openAiChat, window.closeAiChat, window.sendAiMessage];
    aiIds.forEach((id, i) => { const el = document.getElementById(id); if (el) el.addEventListener('click', aiActions[i]); });

    const aiInput = document.getElementById('aiUserInput');
    if (aiInput) { aiInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') window.sendAiMessage(); }); }
    
    const aiBackdrop = document.getElementById('aiBackdrop');
    if (aiBackdrop) aiBackdrop.addEventListener('click', window.closeAiChat);

    document.addEventListener('click', (e) => {
      const chip = e.target.closest('.ai-chip-btn');
      if (chip) {
        const q = chip.getAttribute('data-query') || chip.textContent;
        appendAiMessage(q, 'user');
        processAiText(q);
      }
    });

    const inquiryForm = document.getElementById('inquiryForm');
    if (inquiryForm) {
      inquiryForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert(state.lang === 'mr' ? "धन्यवाद! तुमची चौकशी यशस्वीरीत्या नोंदवली गेली आहे." : "Thank you! Your admission inquiry has been successfully submitted.");
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

  // Modern Mobile Accordion Drawer Toggle Logic
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
