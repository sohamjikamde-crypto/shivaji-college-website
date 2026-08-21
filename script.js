/**
 * Shivaji English School & Junior College | Pandur Titha, Sindhudurg
 * Maharashtra State Board 12th Standard Information Technology (HSC IT) Project
 * Core Interactive Scripts: Bilingual Engine, Accessibility, SOP Hub, Facility Explorer & AI Assistant
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // =========================================================================
  // 1. STATE & STORAGE MANAGEMENT
  // =========================================================================
  const state = {
    lang: localStorage.getItem('ses_lang') || 'en',
    fontSize: localStorage.getItem('ses_font') || 'font-md',
    darkMode: localStorage.getItem('ses_dark') === 'true',
    smartBoard: localStorage.getItem('ses_smart') === 'true',
    currentFacility: 'smartClass',
    currentSop: 'sop1'
  };

  // =========================================================================
  // 2. EXHAUSTIVE BILINGUAL TRANSLATION DICTIONARY (EN <-> MR)
  // =========================================================================
  const translations = {
    en: {
      topAddr: "Pandur Titha, Sindhudurg, Maharashtra",
      topAided: "Estd. 1960 | Private-Aided Institution",
      settingsBtnLabel: "Settings",
      settingsModalHeading: "Preferences & Settings",
      lblSetLang: "Language / भाषा",
      subSetLang: "Switch entire website between English and Marathi",
      lblSetFont: "Text Size / अक्षरांचा आकार",
      subSetFont: "Enlarge or reduce readability font size",
      lblSetDark: "Dark Mode / नाईट मोड",
      subSetDark: "Comfortable night reading palette",
      lblSetSmart: "Smart Board View / स्मार्ट बोर्ड",
      subSetSmart: "Large touch buttons & presenter view for classroom interactive boards",
      txtResetSettings: "Reset Defaults",
      txtDoneSettings: "Done",

      navTxtHome: "Home",
      navTxtAbout: "About",
      navTxtAcademics: "Academics",
      navTxtNotices: "Notices",
      navTxtHub: "Student Hub",
      navTxtCampus: "Campus",
      navTxtFaculty: "Faculty",
      navTxtContact: "Contact",
      navTxtGallery: "Gallery",
      gallerySub: "Visual Showcase",
      galleryTitle: "Campus Life & Event Collage Gallery",
      galleryLead: "Explore vibrant memories of academic excellence, cultural festivals, sports tournaments, and student life at Shivaji English School & Junior College.",
      galFilterAll: "All Photos",
      galFilterCampus: "Campus & Labs",
      galFilterCultural: "Annual Gathering",
      galFilterSports: "Sports Meet",
      galFilterScience: "Science Exhibition",
      galFilterFestivals: "Shiv Jayanti & National Days",
      txtExploreCampusGal: "View Full Campus Gallery",


      heroBadge: "60+ Years of Academic Excellence (Since 1960)",
      heroTitle: "Empowering Minds, <br><span class=\"text-highlight\">Shaping Leaders</span> in Sindhudurg.",
      heroDesc: "A premier co-educational, private-aided institution imparting high-quality education from Grades 5 through 12 in General Secondary, Arts, Commerce, Science, and Information Technology.",
      btnExplore: "Explore Courses",
      btnNotices: "Notice Board",
      btnAskAi: "Ask College AI",
      stat1: "Year Established",
      stat2: "Students Enrolled",
      stat3: "Board Exam Result",
      stat4: "Expert Educators",

      kioskTitle: "Campus Digital Kiosk",
      kioskBadge: "LIVE ADMISSIONS & UPDATES",
      kioskHeading: "Admissions Open for 2026–27",
      kioskDesc: "Grades 5th to 10th (Semi-English & English) and 11th/12th (Science, Commerce, Arts & IT).",
      chip1: "Exam Dates",
      chip2: "Question Banks",
      chip3: "Admission Info",
      chip4: "12th IT Syllabus",
      kioskAffiliation: "Maharashtra State Board Affiliated (Pune Division)",

      aboutSub: "Heritage & Vision",
      aboutTitle: "About Our Institution",
      aboutLead: "Serving Sindhudurg district with dedicated educational excellence for over six decades.",
      aboutHistTitle: "Our Glorious History (Since 1960)",
      aboutHistP1: "Founded in 1960 at Pandur Titha, Shivaji English School and Junior College was established with a noble mission to provide accessible, value-based, and progressive education to rural and semi-urban youth of Sindhudurg.",
      aboutHistP2: "Over the decades, it has evolved into a premier private-aided educational center, producing district toppers, sports champions, civil servants, engineers, doctors, and responsible citizens.",
      aboutVisTitle: "Our Vision",
      aboutVisP: "To cultivate intellectually enlightened, morally upright, culturally rooted, and technologically empowered youth who positively contribute to Maharashtra and the nation.",
      aboutMisTitle: "Our Mission",
      aboutMisP: "Delivering holistic learning through interactive smart classrooms, state-of-the-art science laboratories, IT curriculum, sports coaching, and community values.",
      ribbon1: "Government Recognized & Aided",
      ribbon2: "Co-Educational Campus",
      ribbon3: "Advanced Science & IT Labs",
      ribbon4: "Interactive Smart Classrooms",

      acadSub: "Programs Offered",
      acadTitle: "Academic Streams & Curriculum",
      acadLead: "Comprehensive schooling from Grade 5 through 12 with specialized junior college wings.",
      course1Title: "Secondary Schooling",
      course1Desc: "Rigorous foundation adhering to Maharashtra State Board curriculum. Semi-English & English medium options with cultural activities and sports training.",
      course2Title: "Science Stream",
      course2Desc: "Physics, Chemistry, Mathematics, Biology, and Information Technology (IT) with hands-on laboratory coaching for CET/NEET/JEE aspirants.",
      course3Title: "Commerce Stream",
      course3Desc: "Book Keeping & Accountancy, Organization of Commerce & Management, Economics, and Secretarial Practice / IT for corporate finance acumen.",
      course4Title: "Arts & Humanities",
      course4Desc: "History, Geography, Political Science, English, Marathi and Hindi literature fostering critical thinking and civil services exam foundations.",

      noticeSub: "Real-Time Bulletin",
      noticeTitle: "Official Notice Board",
      noticeLead: "Stay updated with latest announcements, meeting circulars, and exam schedules.",
      noticeParentTitle: "Urgent Parent-Management Meeting with Principal",
      noticeParentDesc: "All parents are hereby informed that an important meeting with the Institution Management and Principal is scheduled on Saturday, 22/08/2026 at 10:00 AM sharp in the school premises. All parents are requested to attend without fail. — Principal",
      noticeItTitle: "12th Standard IT Practical Journal Submission",
      noticeItDesc: "Class 12th Science & Commerce IT students must submit their complete SOP Practical Journals (HTML5, Advanced Web Designing, JavaScript Validation & SEO) to the IT department by 28th August 2026.",
      noticeTeachersTitle: "Teachers' Day & Annual Cultural Gathering Announcement",
      noticeTeachersDesc: "Special felicitation program on 5th September 2026 followed by rehearsal schedule for Annual Gathering traditional folk dance and sports competitions.",

      hubSub: "Academic Resources",
      hubTitle: "Student Learning Hub",
      hubLead: "Quick access to board curriculum, IT practical materials, and previous year question papers.",
      hub1Title: "12th Standard IT Hub",
      hub1Desc: "HTML5, CSS3, JavaScript, Advanced Web Designing SOPs (SOP 1 to 6), and SEO study modules as per Maharashtra State Board.",
      hub1Btn: "View IT SOPs & Code",
      hub2Title: "Science Lab Manuals",
      hub2Desc: "Physics, Chemistry, and Biology experimental handbooks, formula cheat sheets, and practical Viva guides.",
      hub2Btn: "Open Manuals",
      hub3Title: "Commerce & Accounts Vault",
      hub3Desc: "Solved balance sheet templates, ledger practice questions, GST accounting notes, and business mathematics.",
      hub3Btn: "Practice Sheets",
      hub4Title: "Previous Board Papers",
      hub4Desc: "HSC and SSC question papers from 2021 to 2026 with official model answers and marking schemes.",
      hub4Btn: "Browse Papers",

      campusSub: "Infrastructure",
      campusTitle: "Interactive Campus & Facilities",
      campusLead: "Tap any facility below to inspect the infrastructure on your screen or smart board.",
      facBtn1: "Smart Classrooms",
      facBtn2: "Computer & IT Lab",
      facBtn3: "Physics Laboratory",
      facBtn4: "Chemistry Laboratory",
      facBtn5: "Biology Laboratory",
      facBtn6: "Central Library",
      facBtn7: "Playground & Sports",
      facBtn8: "Auditorium & Stage",

      facSub: "Our Mentors",
      facTitle: "Faculty & Administration",
      facLead: "Experienced educators devoted to academic nurturing and student character building.",
      fac1Name: "Principal's Desk",
      fac1Role: "Head of Institution",
      fac1Msg: "\"Guiding every student to achieve their highest intellectual, moral, and vocational potential.\"",
      fac2Name: "Dept. of Science",
      fac2Role: "Senior Lecturers",
      fac2Msg: "Specialized in competitive exam guidance (CET/NEET), practical mastery, and conceptual clarity.",
      fac3Name: "Dept. of IT & Computers",
      fac3Role: "IT Faculty & Lab Staff",
      fac3Msg: "Instructing modern web technologies, JavaScript validation, database systems, and digital literacy.",
      fac4Name: "Dept. of Commerce & Arts",
      fac4Role: "Senior Lecturers",
      fac4Msg: "Fostering financial intelligence, critical analysis, and communicative excellence in state and national exams.",

      contactSub: "Reach Out",
      contactTitle: "Contact & Location",
      contactLead: "Visit our campus at Pandur Titha or connect with the administrative office.",
      contactCardHead: "School Office Details",
      contactCardSub: "For admissions, verification, certificates, and student inquiries:",
      contactLblAddr: "Campus Address:",
      contactValAddr: "Shivaji English School & Junior College,\nPandur Titha, Mumbai-Goa Highway (NH-66),\nTaluka: Kudal, District: Sindhudurg, Maharashtra - 416528",
      contactLblPhone: "Phone / Landline:",
      contactLblEmail: "Email:",
      contactLblHours: "Office Hours:",
      contactValHours: "Monday – Saturday: 9:30 AM to 5:00 PM (Sunday Closed)",

      inquiryHead: "Send an Inquiry / Message",
      lblFormName: "Student / Parent Name *",
      lblFormPhone: "Phone Number (10 Digits) *",
      lblFormPurpose: "Inquiry Purpose *",
      lblFormMsg: "Message / Details *",
      txtSubmitInquiry: "Submit Inquiry",
      aiFloatingBtnText: "Shivaji AI Assistant"
    },

    mr: {
      topAddr: "पांडूर तिठा, सिंधुदुर्ग, महाराष्ट्र",
      topAided: "स्थापना १९६० | खाजगी अनुदानित संस्था",
      settingsBtnLabel: "सेटिंग्ज",
      settingsModalHeading: "प्राधान्ये आणि सेटिंग्ज",
      lblSetLang: "भाषा (Language)",
      subSetLang: "संपूर्ण वेबसाइट इंग्रजी आणि मराठी दरम्यान बदला",
      lblSetFont: "अक्षरांचा आकार (Font Size)",
      subSetFont: "वाचनीयतेसाठी अक्षरांचा आकार लहान किंवा मोठा करा",
      lblSetDark: "नाईट मोड (Dark Mode)",
      subSetDark: "रात्रीच्या वाचनासाठी सुलभ गडद थीम",
      lblSetSmart: "स्मार्ट बोर्ड व्ह्यू (Smart Board)",
      subSetSmart: "वर्गखोल्यांमधील डिजिटल स्क्रीनसाठी मोठे टच बटन्स",
      txtResetSettings: "मूळ सेटिंग्ज",
      txtDoneSettings: "पूर्ण झाले",

      navTxtHome: "मुख्यपृष्ठ",
      navTxtAbout: "संस्थेविषयी",
      navTxtAcademics: "अभ्यासक्रम",
      navTxtNotices: "सूचना फलक",
      navTxtHub: "विद्यार्थी केंद्र",
      navTxtCampus: "परिसर",
      navTxtFaculty: "प्राध्यापक",
      navTxtContact: "संपर्क",
      navTxtGallery: "गॅलरी",
      gallerySub: "फोटो व व्हिडिओ गॅलरी",
      galleryTitle: "परिसर जीवन आणि कार्यक्रम गॅलरी",
      galleryLead: "शिवाजी इंग्लिश स्कूल व कनिष्ठ महाविद्यालयातील शैक्षणिक गुणवत्ता, क्रीडा स्पर्धा आणि सांस्कृतिक उत्सवांची अविस्मरणीय छायाचित्रे.",
      galFilterAll: "सर्व फोटो",
      galFilterCampus: "परिसर व लॅब",
      galFilterCultural: "वार्षिक स्नेहसंमेलन",
      galFilterSports: "क्रीडा महोत्सव",
      galFilterScience: "विज्ञान प्रदर्शन",
      galFilterFestivals: "शिवजयंती व सण",
      txtExploreCampusGal: "संपूर्ण कॉलेज गॅलरी पहा",


      heroBadge: "६०+ वर्षांची शैक्षणिक परंपरा (१९६० पासून)",
      heroTitle: "ज्ञानाने सशक्त, <br><span class=\"text-highlight\">सिंधुदुर्गाचे भविष्य घडवणारी</span> अग्रगण्य संस्था.",
      heroDesc: "इयत्ता ५ वी ते १२ वी पर्यंत माध्यमिक, कला, वाणिज्य, विज्ञान आणि माहिती तंत्रज्ञान (IT) शाखांमध्ये गुणवत्तापूर्ण शिक्षण देणारी नामांकित खाजगी अनुदानित संस्था.",
      btnExplore: "अभ्यासक्रम पहा",
      btnNotices: "सूचना फलक",
      btnAskAi: "कॉलेज AI ला विचारा",
      stat1: "स्थापना वर्ष",
      stat2: "एकूण विद्यार्थी",
      stat3: "बोर्ड निकाल",
      stat4: "तज्ज्ञ शिक्षक",

      kioskTitle: "डिजिटल माहिती केंद्र",
      kioskBadge: "थेट प्रवेश आणि अपडेट्स",
      kioskHeading: "शैक्षणिक वर्ष २०२६–२७ प्रवेश सुरू",
      kioskDesc: "इयत्ता ५ वी ते १० वी (सेमी-इंग्रजी आणि इंग्रजी) आणि ११ वी/१२ वी (विज्ञान, वाणिज्य, कला आणि IT).",
      chip1: "परीक्षा वेळापत्रक",
      chip2: "प्रश्नसंच",
      chip3: "प्रवेश माहिती",
      chip4: "१२ वी IT अभ्यासक्रम",
      kioskAffiliation: "महाराष्ट्र राज्य माध्यमिक व उच्च माध्यमिक शिक्षण मंडळ (पुणे विभाग) संलग्न",

      aboutSub: "वारसा आणि ध्येय",
      aboutTitle: "आमच्या संस्थेविषयी",
      aboutLead: "गेल्या सहा दशकांपासून सिंधुदुर्ग जिल्ह्यात अखंड ज्ञानदान व गुणवत्तापूर्ण शिक्षणाची अविरत सेवा.",
      aboutHistTitle: "आमचा गौरवशाली इतिहास (१९६० पासून)",
      aboutHistP1: "पांडूर तिठा येथे १९६० मध्ये स्थापित झालेले शिवाजी इंग्लिश स्कूल व कनिष्ठ महाविद्यालय हे सिंधुदुर्गातील ग्रामीण व निमशहरी विद्यार्थ्यांना दर्जेदार, मूल्यधिष्ठित आणि आधुनिक शिक्षण देण्यासाठी सुरू झाले.",
      aboutHistP2: "गेल्या अनेक दशकांत या संस्थेने अनेक जिल्हा गुणवत्ताधारक, क्रीडापटू, शासकीय अधिकारी, डॉक्टर, इंजिनिअर्स आणि आदर्श नागरिक घडवले आहेत.",
      aboutVisTitle: "आमची दूरदृष्टी (Vision)",
      aboutVisP: "बौद्धिकदृष्ट्या प्रगल्भ, नैतिकदृष्ट्या सक्षम, सांस्कृतिक मुळांशी जोडलेली आणि तंत्रज्ञानाने सज्ज तरुण पिढी घडवणे.",
      aboutMisTitle: "आमचे ध्येय (Mission)",
      aboutMisP: "स्मार्ट वर्गखोल्या, अद्ययावत विज्ञान प्रयोगशाळा, माहिती तंत्रज्ञान प्रशिक्षण, क्रीडा व समाजसेवेतून विद्यार्थ्यांचा सर्वांगीण विकास साधणे.",
      ribbon1: "शासकीय मान्यताप्राप्त व अनुदानित",
      ribbon2: "सह-शिक्षण (Co-Ed) परिसर",
      ribbon3: "अद्ययावत सायन्स व IT लॅब",
      ribbon4: "डिजिटल स्मार्ट क्लासरूम्स",

      acadSub: "शैक्षणिक शाखा",
      acadTitle: "अभ्यासक्रम आणि शाखा",
      acadLead: "इयत्ता ५ वी ते १० वी माध्यमिक शाळा आणि ११ वी-१२ वी कनिष्ठ महाविद्यालयाच्या सर्व शाखा.",
      course1Title: "माध्यमिक शाळा",
      course1Desc: "महाराष्ट्र राज्य बोर्डाचा परिपूर्ण अभ्यासक्रम. सेमी-इंग्रजी व इंग्रजी माध्यम, क्रीडा व सांस्कृतिक उपक्रम.",
      course2Title: "विज्ञान शाखा (Science)",
      course2Desc: "भौतिकशास्त्र, रसायनशास्त्र, गणित, जीवशास्त्र आणि माहिती तंत्रज्ञान (IT) सह CET/NEET/JEE साठी मार्गदर्शन.",
      course3Title: "वाणिज्य शाखा (Commerce)",
      course3Desc: "बुक कीपिंग, ऑर्गनायझेशन ऑफ कॉमर्स, अर्थशास्त्र, सेक्रेटरिअल प्रॅक्टिस आणि IT चे व्यावसायिक शिक्षण.",
      course4Title: "कला शाखा (Arts)",
      course4Desc: "इतिहास, भूगोल, राज्यशास्त्र, इंग्रजी, मराठी व हिंदी साहित्य आणि स्पर्धा परीक्षांसाठी मजबूत पाया.",

      noticeSub: "ताज्या घडामोडी",
      noticeTitle: "अधिकृत सूचना फलक",
      noticeLead: "महत्त्वाच्या शैक्षणिक घोषणा, बैठकांचे परिपत्रक आणि परीक्षांचे वेळापत्रक.",
      noticeParentTitle: "मुख्याध्यापक व संस्था पदाधिकाऱ्यांसमवेत महत्त्वाची पालक सभा",
      noticeParentDesc: "सर्व पालकांना कळविण्यात येते की, शनिवार दि. २२/०८/२०२६ रोजी सकाळी ठीक १०:०० वाजता प्रशालेत संस्था पदाधिकारी व मुख्याध्यापक यांच्या उपस्थितीत महत्त्वाची सभा आयोजित केली आहे. सर्व पालकांनी वेळेवर उपस्थित राहावे. — मुख्याध्यापक",
      noticeItTitle: "१२ वी माहिती तंत्रज्ञान (IT) प्रात्यक्षिक जर्नल जमा करणे",
      noticeItDesc: "१२ वी विज्ञान आणि वाणिज्य शाखेच्या सर्व IT विद्यार्थ्यांनी आपले पूर्ण केलेले SOP जर्नल २८ ऑगस्ट २०२६ पर्यंत IT विभागात जमा करावे.",
      noticeTeachersTitle: "शिक्षक दिन आणि वार्षिक स्नेहसंमेलन घोषणा",
      noticeTeachersDesc: "५ सप्टेंबर २०२६ रोजी शिक्षक दिन विशेष कार्यक्रम व त्यानंतर वार्षिक स्नेहसंमेलन सांस्कृतिक नृत्यांच्या सरावाचे वेळापत्रक प्रसिद्ध करण्यात येईल.",

      hubSub: "अभ्यास संसाधने",
      hubTitle: "विद्यार्थी अभ्यास केंद्र",
      hubLead: "बोर्डाचा अभ्यासक्रम, IT प्रॅक्टिकल कोड्स आणि मागील वर्षांच्या प्रश्नपत्रिका एकाच ठिकाणी.",
      hub1Title: "१२ वी IT प्रॅक्टिकल केंद्र",
      hub1Desc: "HTML5, CSS3, JavaScript Validation, SOPs (१ ते ६) आणि SEO ची परिपूर्ण तयारी.",
      hub1Btn: "IT SOPs व कोड्स पहा",
      hub2Title: "सायन्स लॅब मॅन्युअल्स",
      hub2Desc: "फिजिक्स, केमिस्ट्री आणि बायोलॉजीच्या प्रात्यक्षिक मार्गदर्शिका व फॉर्म्युला शीट्स.",
      hub2Btn: "मॅन्युअल्स उघडा",
      hub3Title: "कॉमर्स अकौंट्स संच",
      hub3Desc: "सॉल्व्हड बॅलन्स शीट्स, लेजर सराव प्रश्न, GST नोट्स आणि बिझनेस मॅथ्स.",
      hub3Btn: "सराव शीट्स पहा",
      hub4Title: "मागील बोर्ड प्रश्नपत्रिका",
      hub4Desc: "२०२१ ते २०२६ पर्यंतच्या HSC आणि SSC प्रश्नपत्रिका उत्तरांसह उपलब्ध.",
      hub4Btn: "प्रश्नपत्रिका पहा",

      campusSub: "भौतिक सुविधा",
      campusTitle: "परिसर आणि सुविधा",
      campusLead: "खालील कोणत्याही सुविधेवर क्लिक करून माहिती स्क्रीनवर पहा.",
      facBtn1: "स्मार्ट क्लासरूम्स",
      facBtn2: "कॉम्प्युटर व IT लॅब",
      facBtn3: "फिजिक्स लॅब",
      facBtn4: "केमिस्ट्री लॅब",
      facBtn5: "बायोलॉजी लॅब",
      facBtn6: "मध्यवर्ती ग्रंथालय",
      facBtn7: "क्रीडांगण व खेळ",
      facBtn8: "सभागृह व रंगमंच",

      facSub: "मार्गदर्शक",
      facTitle: "प्राध्यापक व प्रशासन",
      facLead: "विद्यार्थ्यांच्या बौद्धिक व व्यक्तिमत्त्व विकासासाठी कटिबद्ध तज्ज्ञ शिक्षकवृंद.",
      fac1Name: "मुख्याध्यापक कक्ष",
      fac1Role: "संस्था प्रमुख",
      fac1Msg: "\"प्रत्येक विद्यार्थ्याला त्याच्या सर्वोच्च बौद्धिक व नैतिक क्षमतेपर्यंत पोहोचवणे हेच आमचे उद्दिष्ट.\"",
      fac2Name: "विज्ञान विभाग",
      fac2Role: "वरिष्ठ व्याख्याते",
      fac2Msg: "CET/NEET स्पर्धा परीक्षा मार्गदर्शन आणि प्रात्यक्षिक संकल्पनांचे सखोल ज्ञान.",
      fac3Name: "IT व कॉम्प्युटर विभाग",
      fac3Role: "IT प्राध्यापक व तंत्रज्ञ",
      fac3Msg: "अद्ययावत वेब तंत्रज्ञान, जावास्क्रिप्ट कोडिंग आणि डिजिटल कौशल्ये यांचे प्रशिक्षण.",
      fac4Name: "वाणिज्य व कला विभाग",
      fac4Role: "वरिष्ठ व्याख्याते",
      fac4Msg: "आर्थिक साक्षरता, भाषिक प्रभुत्व आणि स्पर्धा परीक्षांचा भक्कम पाया घडवणारे मार्गदर्शन.",

      contactSub: "संपर्क साधा",
      contactTitle: "पत्ता आणि संपर्क",
      contactLead: "पांडूर तिठा येथील आमच्या कॅम्पसला भेट द्या किंवा कार्यालयाशी संपर्क साधा.",
      contactCardHead: "शालेय कार्यालय तपशील",
      contactCardSub: "प्रवेश, पडताळणी, दाखले आणि विद्यार्थी चौकशीसाठी:",
      contactLblAddr: "पत्ता:",
      contactValAddr: "शिवाजी इंग्लिश स्कूल व कनिष्ठ महाविद्यालय,\nपांडूर तिठा, मुंबई-गोवा महामार्ग (NH-66),\nतालुका: कुडाळ, जिल्हा: सिंधुदुर्ग, महाराष्ट्र - ४१६५२८",
      contactLblPhone: "फोन / संपर्क:",
      contactLblEmail: "ईमेल:",
      contactLblHours: "कार्यालयीन वेळ:",
      contactValHours: "सोमवार ते शनिवार: सकाळी ९:३० ते सायंकाळी ५:०० (रविवार सुट्टी)",

      inquiryHead: "चौकशी संदेश पाठवा",
      lblFormName: "विद्यार्थी / पालकांचे नाव *",
      lblFormPhone: "मोबाईल नंबर (१० अंकी) *",
      lblFormPurpose: "चौकशीचे कारण *",
      lblFormMsg: "संदेश / तपशील *",
      txtSubmitInquiry: "संदेश पाठवा",
      aiFloatingBtnText: "शिवाजी AI असिस्टंट"
    }
  };

  // =========================================================================
  // 3. CAMPUS FACILITIES DATA (8 FACILITIES)
  // =========================================================================
  const facilitiesData = {
    smartClass: {
      icon: "fa-chalkboard",
      img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1000&q=80",
      badgeEn: "Interactive Touch",
      badgeMr: "डिजिटल टच स्क्रीन",
      titleEn: "Interactive Smart Classrooms",
      titleMr: "डिजिटल स्मार्ट क्लासरूम्स",
      descEn: "Equipped with ultra-responsive interactive touch smart-boards, high-definition audio-visual projection systems, and broadband internet for dynamic multimedia lectures.",
      descMr: "उच्च दर्जाचे टच-सक्षम डिजिटल स्मार्ट बोर्ड, ऑडिओ-व्हिज्युअल प्रोजेक्शन सिस्टीम आणि हाय-स्पीड इंटरनेटसह सुसज्ज वर्गखोल्या.",
      tagsEn: ["Touch Enabled", "Audio-Visual", "E-Learning", "Interactive"],
      tagsMr: ["टच स्क्रीन", "दृकश्राव्य शिक्षण", "ई-लर्निंग", "इंटरॅक्टिव्ह"]
    },
    itLab: {
      icon: "fa-desktop",
      img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1000&q=80",
      badgeEn: "40+ Workstations",
      badgeMr: "४०+ कॉम्प्युटर",
      titleEn: "Computer & Information Technology (IT) Lab",
      titleMr: "कॉम्प्युटर आणि माहिती तंत्रज्ञान (IT) लॅब",
      descEn: "State-of-the-art computer laboratory with 40+ networked high-speed workstations, Linux/Windows dual boot, HTML5/CSS3/JavaScript web development tools, and dedicated UPS backup.",
      descMr: "४०+ अद्ययावत संगणक, अखंड इंटरनेट, लिनक्स व विंडोज ऑपरेटिंग सिस्टीम, HTML5/CSS3/JS वेब डिझायनिंग टूल्स आणि अखंड वीज पुरवठ्यासह सज्ज प्रशस्त IT लॅब.",
      tagsEn: ["40+ PCs", "Gigabit LAN", "HSC IT Center", "Web Dev Suite"],
      tagsMr: ["४०+ संगणक", "हाय-स्पीड नेटवर्क", "HSC IT केंद्र", "वेब डिझायनिंग"]
    },
    physicsLab: {
      icon: "fa-atom",
      img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1000&q=80",
      badgeEn: "Practical Kits",
      badgeMr: "प्रायोगिक साधने",
      titleEn: "Physics Laboratory",
      titleMr: "भौतिकशास्त्र प्रयोगशाळा",
      descEn: "Comprehensive experimental setups for Optics, Mechanics, Electricity, Magnetism, and Modern Physics strictly aligning with Maharashtra HSC Board curriculum.",
      descMr: "ऑप्टिक्स, मेकॅनिक्स, विद्युत आणि चुंबकत्वाच्या प्रयोगांसाठी आधुनिक उपकरणांनी सज्ज सुसज्ज भौतिकशास्त्र लॅब.",
      tagsEn: ["Optics Bench", "Spectrometers", "Precision Meters", "Safety Grounded"],
      tagsMr: ["ऑप्टिक्स बेंच", "स्पेक्ट्रोमीटर", "अचूक मापक यंत्रे", "सुरक्षित मांडणी"]
    },
    chemLab: {
      icon: "fa-flask",
      img: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?auto=format&fit=crop&w=1000&q=80",
      badgeEn: "Safe & Ventilated",
      badgeMr: "सुरक्षित रसायन लॅब",
      titleEn: "Chemistry Laboratory",
      titleMr: "रसायनशास्त्र प्रयोगशाळा",
      descEn: "Spacious and well-ventilated laboratory featuring individualized reagent racks, specialized titration setups, and safety eyewash stations.",
      descMr: "विद्यार्थ्यांसाठी वैयक्तिक केमिकल रॅक, आधुनिक टायट्रेशन साधने आणि सुरक्षिततेच्या सर्व नियमांचे पालन करणारी रसायन लॅब.",
      tagsEn: ["Fume Exhaust", "Analytical Balances", "Acid Proof Benches", "Fire Safety"],
      tagsMr: ["हवा खेळती लॅब", "डिजिटल वजनकाटा", "सुरक्षा उपकरणे", "अग्निशामक यंत्रणा"]
    },
    bioLab: {
      icon: "fa-dna",
      img: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=1000&q=80",
      badgeEn: "Microscopy Hub",
      badgeMr: "सूक्ष्मदर्शक केंद्र",
      titleEn: "Biology & Life Sciences Lab",
      titleMr: "जीवशास्त्र प्रयोगशाळा",
      descEn: "Equipped with high-magnification compound microscopes, botanical herbarium specimens, anatomical charts, and human skeletal models.",
      descMr: "उच्च क्षमतेचे सूक्ष्मदर्शक, वनस्पती व प्राणी नमुने (Specimens), आणि मानवी शरीररचना मॉडेल्ससह सुसज्ज जीवशास्त्र लॅब.",
      tagsEn: ["HD Microscopes", "Herbarium Vault", "Dissection Kits", "Specimen Jars"],
      tagsMr: ["सूक्ष्मदर्शक", "हर्बेरियम", "मॉडेल्स व चार्ट्स", "प्रात्यक्षिक संच"]
    },
    library: {
      icon: "fa-book-bookmark",
      img: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1000&q=80",
      badgeEn: "15,000+ Books",
      badgeMr: "१५,०००+ पुस्तके",
      titleEn: "Central Library & Digital Reading Hall",
      titleMr: "मध्यवर्ती ग्रंथालय व अभ्यासिका",
      descEn: "Extensive collection of 15,000+ curriculum textbooks, reference encyclopedias, competitive exam guides (MHT-CET, JEE, NEET), and Marathi literature.",
      descMr: "१५,००० हून अधिक पाठ्यपुस्तके, संदर्भ ग्रंथ, स्पर्धा परीक्षा पुस्तके (MHT-CET, NEET, JEE) आणि शांत अभ्यासिका.",
      tagsEn: ["15,000+ Volumes", "E-Journals", "Quiet Reading Hall", "Book Bank Scheme"],
      tagsMr: ["१५,०००+ ग्रंथ", "ई-पुस्तके", "शांत वाचन कक्ष", "बुक बँक योजना"]
    },
    sports: {
      icon: "fa-volleyball",
      img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80",
      badgeEn: "Expansive Turf",
      badgeMr: "भव्य क्रीडांगण",
      titleEn: "Playground & Athletic Sports Complex",
      titleMr: "प्रशस्त क्रीडांगण व क्रीडा संकुल",
      descEn: "Expansive multipurpose outdoor sports ground catering to Cricket, Football, Volleyball, Kho-Kho, Kabaddi, and Track & Field athletic events.",
      descMr: "क्रिकेट, व्हॉलीबॉल, कबड्डी, खो-खो आणि मैदानी खेळांसाठी प्रशस्त मैदान व अनुभवी क्रीडा प्रशिक्षक.",
      tagsEn: ["Cricket Pitch", "Volleyball Court", "Athletic Track", "Indoor Table Tennis"],
      tagsMr: ["क्रिकेट खेळपट्टी", "व्हॉलीबॉल कोर्ट", "धावपट्टी", "टेबल टेनिस"]
    },
    auditorium: {
      icon: "fa-masks-theater",
      img: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80",
      badgeEn: "500+ Seating",
      badgeMr: "५००+ आसनक्षमता",
      titleEn: "Auditorium, Stage & Seminar Hall",
      titleMr: "सभागृह, रंगमंच व सेमिनार हॉल",
      descEn: "Acoustically tuned cultural hall with 500+ seating capacity, stage lighting, and projection systems for Annual Gatherings and seminars.",
      descMr: "५०० आसन क्षमतेचे भव्य सांस्कृतिक सभागृह, उत्तम ध्वनी व प्रकाश यंत्रणा, आणि सेमिनारसाठी प्रोजेक्टर सुविधा.",
      tagsEn: ["500 Seater", "Acoustic Tuned", "Theatrical Stage", "Keynote Ready"],
      tagsMr: ["५०० आसने", "उत्तम ध्वनीयंत्रणा", "रंगमंच", "सांस्कृतिक केंद्र"]
    }
    smartClass: {
      icon: "fa-chalkboard",
      titleEn: "Interactive Smart Classrooms",
      titleMr: "डिजिटल स्मार्ट क्लासरूम्स",
      descEn: "Equipped with ultra-responsive interactive touch smart-boards, high-definition audio-visual projection systems, and high-speed broadband internet for dynamic multimedia lectures and interactive board demonstrations.",
      descMr: "उच्च दर्जाचे टच-सक्षम डिजिटल स्मार्ट बोर्ड, ऑडिओ-व्हिज्युअल प्रोजेक्शन सिस्टीम आणि हाय-स्पीड इंटरनेटसह सुसज्ज वर्गखोल्या, ज्यामुळे क्लिष्ट संकल्पना दृकश्राव्य माध्यमातून सहज समजतात.",
      tagsEn: ["Touch Enabled", "Audio-Visual", "E-Learning", "Interactive"],
      tagsMr: ["टच स्क्रीन", "दृकश्राव्य शिक्षण", "ई-लर्निंग", "इंटरॅक्टिव्ह"]
    },
    itLab: {
      icon: "fa-desktop",
      titleEn: "Computer & Information Technology (IT) Lab",
      titleMr: "कॉम्प्युटर आणि माहिती तंत्रज्ञान (IT) लॅब",
      descEn: "State-of-the-art computer laboratory with 40+ networked high-speed workstations, Linux/Windows dual boot, HTML5/CSS3/JavaScript web development tools, Python/PHP servers, and dedicated UPS backup.",
      descMr: "४०+ अद्ययावत संगणक, अखंड इंटरनेट, लिनक्स व विंडोज ऑपरेटिंग सिस्टीम, HTML5/CSS3/JS वेब डिझायनिंग टूल्स आणि अखंड वीज पुरवठ्यासह सज्ज प्रशस्त IT लॅब.",
      tagsEn: ["40+ PCs", "Gigabit LAN", "HSC IT Center", "Web Dev Suite"],
      tagsMr: ["४०+ संगणक", "हाय-स्पीड नेटवर्क", "HSC IT केंद्र", "वेब डिझायनिंग"]
    },
    physicsLab: {
      icon: "fa-atom",
      titleEn: "Advanced Physics Laboratory",
      titleMr: "भौतिकशास्त्र (Physics) प्रयोगशाळा",
      descEn: "Comprehensive experimental setups including optical benches, spectrometers, Vernier callipers, screw gauges, electrical potentiometers, and digital measuring instruments for HSC practicals.",
      descMr: "प्रकाशाचे प्रयोग, स्पेक्ट्रोमीटर, अचूक मापन यंत्रे, इलेक्ट्रिकल सर्किट्स आणि बोर्डाच्या सर्व प्रयोगांसाठी लागणाऱ्या आधुनिक उपकरणांनी सुसज्ज स्वतंत्र भौतिकशास्त्र प्रयोगशाळा.",
      tagsEn: ["Optics Bench", "Spectrometers", "Board Certified", "Safety Inspected"],
      tagsMr: ["ऑप्टिक्स साधने", "मापन यंत्रे", "बोर्ड प्रमाणित", "सुरक्षित"]
    },
    chemLab: {
      icon: "fa-flask",
      titleEn: "Chemistry Laboratory",
      titleMr: "रसायनशास्त्र (Chemistry) प्रयोगशाळा",
      descEn: "Spacious, well-ventilated lab with individual chemical reagent racks, digital analytical balances, titration stations, fume hoods, and strict safety protocols with eye-wash stations and fire extinguishers.",
      descMr: "टायट्रेशन स्टेशन्स, डिजिटल वजन काटे, रासायनिक अभिकर्मक, योग्य वायुविजन आणि अग्निरोधक सुरक्षिततेसह सुसज्ज रसायनशास्त्र प्रयोगशाळा.",
      tagsEn: ["Titration Stations", "Fume Exhaust", "Reagent Racks", "Safety First"],
      tagsMr: ["टायट्रेशन सुविधा", "रासायनिक साधने", "सुरक्षा उपकरणे", "प्रशस्त लॅब"]
    },
    bioLab: {
      icon: "fa-dna",
      titleEn: "Biology & Botanical Laboratory",
      titleMr: "जीवशास्त्र व वनस्पतीशास्त्र प्रयोगशाळा",
      descEn: "High-resolution compound microscopes, human anatomical models, botanical specimen collection of Western Ghats flora, preserved zoological mounts, and dissection demonstration tools.",
      descMr: "उच्च दर्जाचे सूक्ष्मदर्शक (Compound Microscopes), मानवी शरीररचना मॉडेल्स, पश्चिम घाटातील दुर्मिळ वनस्पती व प्राण्यांचे नमुने आणि चार्ट्सने समृद्ध प्रयोगशाळा.",
      tagsEn: ["Compound Microscopes", "Anatomy Models", "Western Ghats Flora", "Specimen Vault"],
      tagsMr: ["सूक्ष्मदर्शक", "बायोलॉजी मॉडेल्स", "वनस्पती संग्रह", "प्राणी नमुने"]
    },
    library: {
      icon: "fa-book-bookmark",
      titleEn: "Central Knowledge Library & Reading Hall",
      titleMr: "मध्यवर्ती ग्रंथालय व अभ्यासिका",
      descEn: "Over 10,000 reference volumes, competitive examination guides (MPSC, UPSC, CET, NEET, JEE), Marathi literature, encyclopedias, national journals, daily newspapers, and quiet study carrels.",
      descMr: "१०,०००+ हून अधिक संदर्भ पुस्तके, स्पर्धा परीक्षा पुस्तके, मराठी साहित्य, विज्ञान कोश, नियतकालिके आणि शांत वातावरणातील प्रशस्त वाचन कक्ष.",
      tagsEn: ["10,000+ Books", "Competitive Prep", "Digital Catalog", "Silent Reading"],
      tagsMr: ["१०,०००+ पुस्तके", "स्पर्धा परीक्षा कक्ष", "वाचन दालन", "साहित्य संग्रह"]
    },
    sports: {
      icon: "fa-volleyball",
      titleEn: "Playground & Sports Complex",
      titleMr: "क्रीडांगण व मैदानी खेळ संकुल",
      descEn: "Expansive multi-sport grounds for Cricket, Football, Volleyball, Kabaddi, Kho-Kho, Athletics running tracks, badminton court, and specialized coaching for district/state tournaments.",
      descMr: "क्रिकेट, फुटबॉल, व्हॉलीबॉल, कबड्डी, खो-खो आणि धावण्याच्या ट्रॅकसह विशाल क्रीडांगण. जिल्हा व राज्यस्तरीय स्पर्धांसाठी तज्ज्ञ क्रीडा शिक्षकांचे मार्गदर्शन.",
      tagsEn: ["Cricket/Football", "Kho-Kho/Kabaddi", "Athletics Track", "State Coaching"],
      tagsMr: ["क्रिकेट/फुटबॉल", "कबड्डी/खो-खो", "रनिंग ट्रॅक", "क्रीडा प्रशिक्षण"]
    },
    auditorium: {
      icon: "fa-masks-theater",
      titleEn: "Auditorium & Cultural Open-Air Stage",
      titleMr: "सभागृह व सांस्कृतिक रंगमंच",
      descEn: "Grand auditorium with acoustic sound engineering, stage lighting, 600+ seating capacity for Annual Gatherings, traditional Rombaat dance rehearsals, elocution competitions, and seminars.",
      descMr: "६००+ आसनक्षमतेचे भव्य सभागृह, आधुनिक ध्वनी व प्रकाश यंत्रणा, वार्षिक स्नेहसंमेलन, पारंपारिक रोंबाट नृत्य, वक्तृत्व स्पर्धा आणि शैक्षणिक व्याख्यानांचे केंद्र.",
      tagsEn: ["600+ Seats", "Acoustic Audio", "Cultural Stage", "Seminar Ready"],
      tagsMr: ["६००+ जागा", "ध्वनी यंत्रणा", "सांस्कृतिक व्यासपीठ", "वार्षिक स्नेहसंमेलन"]
    }
  };

  // =========================================================================
  // 4. HSC 12th IT PRACTICAL SOPs DATA (SOP 1 TO SOP 6)
  // =========================================================================
  const sopsData = {
    sop1: {
      title: "SOP 1: Creation of Website Using HTML5 & CSS3",
      aim: "To create a multi-page responsive educational website layout adhering to Maharashtra HSC IT curriculum with semantic tags, flexbox/grid navigation, and standard footer.",
      code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Shivaji College - SOP 1 Layout</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 0; background: #f4f6f9; }
    header { background: #1a365d; color: white; padding: 20px; text-align: center; }
    nav { background: #2b6cb0; display: flex; justify-content: center; gap: 15px; padding: 10px; }
    nav a { color: white; text-decoration: none; font-weight: bold; }
    main { padding: 20px; max-width: 800px; margin: auto; background: white; border-radius: 8px; }
    footer { background: #0f172a; color: #aaa; text-align: center; padding: 15px; margin-top: 20px; }
  </style>
</head>
<body>
  <header><h1>Shivaji English School & Jr. College</h1></header>
  <nav>
    <a href="#home">Home</a>
    <a href="#academics">Academics</a>
    <a href="#contact">Contact</a>
  </nav>
  <main>
    <h2>Welcome to Pandur Titha</h2>
    <p>Providing quality education in Sindhudurg since 1960.</p>
  </main>
  <footer><p>&copy; 2026 Shivaji English School</p></footer>
</body>
</html>`
    },
    sop2: {
      title: "SOP 2: Client-Side Form Validation Using JavaScript",
      aim: "To validate form controls (Student Name, 10-digit Mobile Number, Email syntax) before dispatching inquiry data.",
      code: `function validateStudentForm() {
  const name = document.getElementById("fullName").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const phonePattern = /^[6-9]\\d{9}$/;

  if (name.length < 3) {
    alert("Please enter a valid student name (minimum 3 characters).");
    return false;
  }
  if (!phonePattern.test(phone)) {
    alert("Please enter a valid 10-digit mobile number starting with 6, 7, 8, or 9.");
    return false;
  }
  alert("Validation successful! Proceeding to submit.");
  return true;
}`
    },
    sop3: {
      title: "SOP 3: Multimedia Integration (Audio & Video) in HTML5",
      aim: "To embed audio and video media controls on educational web pages with responsive dimensions and alternative formats.",
      code: `<!-- Embedding College Anthem / Audio in HTML5 -->
<audio controls>
  <source src="media/college_anthem.mp3" type="audio/mpeg">
  <source src="media/college_anthem.ogg" type="audio/ogg">
  Your browser does not support the audio element.
</audio>

<!-- Embedding Annual Gathering Video in HTML5 -->
<video width="320" height="240" controls poster="images/stage_thumb.jpg">
  <source src="media/gathering_dance.mp4" type="video/mp4">
  <source src="media/gathering_dance.webm" type="video/webm">
  Your browser does not support the video element.
</video>`
    },
    sop4: {
      title: "SOP 4: Client-Side Image Mapping Using HTML5",
      aim: "To create clickable hotspot areas on a campus blueprint image using rect, circle, and poly coordinates navigating to distinct departmental sections.",
      code: `<img src="images/campus_map.jpg" alt="Campus Map" usemap="#campusmap" width="600" height="400">

<map name="campusmap">
  <!-- IT Lab Hotspot -->
  <area shape="rect" coords="34,44,270,350" alt="IT Lab" href="#campus" title="Visit Computer Lab">
  <!-- Science Lab Hotspot -->
  <area shape="circle" coords="337,300,44" alt="Physics & Chem Labs" href="#campus" title="Science Labs">
  <!-- Sports Ground Hotspot -->
  <area shape="poly" coords="400,100,550,120,500,300,380,250" alt="Sports Ground" href="#campus" title="Sports Complex">
</map>`
    },
    sop5: {
      title: "SOP 5: CSS Flexbox & CSS Grid Modern Responsive Layout",
      aim: "To build a fluid 4-column responsive stream card layout using CSS Grid and Flexbox with media query breakpoints.",
      code: `/* Responsive 4-Column Academic Grid */
.course-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

@media (max-width: 992px) {
  .course-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .course-grid {
    grid-template-columns: 1fr;
  }
}`
    },
    sop6: {
      title: "SOP 6: Search Engine Optimization (SEO) & Meta Data",
      aim: "To apply on-page SEO best practices including meta title, meta description, keywords, viewport, OpenGraph tags, semantic hierarchy, and image alt attributes for search discoverability.",
      code: `<!-- High-Ranking SEO Meta Tags -->
<meta name="title" content="Shivaji English School & Jr College | Pandur Titha, Sindhudurg">
<meta name="description" content="Official HSC Board portal for Shivaji English School & Junior College Pandur Titha. Admissions open for 2026-27 in Science, Commerce, Arts & IT.">
<meta name="keywords" content="Shivaji School Pandur, Junior College Sindhudurg, 12th IT HSC Board, Kudal Admissions">
<meta name="robots" content="index, follow">
<meta property="og:title" content="Shivaji English School & Jr College">
<meta property="og:image" content="https://example.com/logo.png">`
    }
  };

  // =========================================================================
  // 5. RENDER & UPDATE FUNCTIONS
  // =========================================================================

  function applyLanguage(lang) {
    state.lang = lang;
    localStorage.setItem('ses_lang', lang);
    const dict = translations[lang] || translations.en;

    // Update active button state in settings modal
    const btnEn = document.getElementById('langEnBtn');
    const btnMr = document.getElementById('langMrBtn');
    if (btnEn && btnMr) {
      if (lang === 'mr') {
        btnMr.classList.add('active');
        btnEn.classList.remove('active');
      } else {
        btnEn.classList.add('active');
        btnMr.classList.remove('active');
      }
    }

    // Apply translations to all matching element IDs
    for (const key in dict) {
      const el = document.getElementById(key);
      if (el) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          // Placeholder or value handled if needed
        } else {
          el.innerHTML = dict[key];
        }
      }
    }

    // Refresh active facility card in current language
    renderFacility(state.currentFacility);
    if (typeof renderGallery === "function") renderGallery(currentGalleryFilter);
  }

  function applyFontSize(sizeClass) {
    state.fontSize = sizeClass;
    localStorage.setItem('ses_font', sizeClass);
    document.body.classList.remove('font-sm', 'font-md', 'font-lg', 'font-xl');
    document.body.classList.add(sizeClass);

    // Update button states
    ['fontSmBtn', 'fontMdBtn', 'fontLgBtn', 'fontXlBtn'].forEach(btnId => {
      const btn = document.getElementById(btnId);
      if (!btn) return;
      if (
        (btnId === 'fontSmBtn' && sizeClass === 'font-sm') ||
        (btnId === 'fontMdBtn' && sizeClass === 'font-md') ||
        (btnId === 'fontLgBtn' && sizeClass === 'font-lg') ||
        (btnId === 'fontXlBtn' && sizeClass === 'font-xl')
      ) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  function applyDarkMode(enabled) {
    state.darkMode = enabled;
    localStorage.setItem('ses_dark', enabled);
    if (enabled) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
    const txtDark = document.getElementById('txtDarkStatus');
    if (txtDark) {
      txtDark.textContent = enabled ? (state.lang === 'mr' ? 'चालू (On)' : 'On') : (state.lang === 'mr' ? 'बंद (Off)' : 'Off');
    }
    const btn = document.getElementById('darkModeToggleBtn');
    if (btn) {
      if (enabled) btn.classList.add('active');
      else btn.classList.remove('active');
    }
  }

  function applySmartBoard(enabled) {
    state.smartBoard = enabled;
    localStorage.setItem('ses_smart', enabled);
    if (enabled) {
      document.body.classList.add('smartboard-mode');
    } else {
      document.body.classList.remove('smartboard-mode');
    }
    const txtSmart = document.getElementById('txtSmartStatus');
    if (txtSmart) {
      txtSmart.textContent = enabled ? (state.lang === 'mr' ? 'चालू (On)' : 'On') : (state.lang === 'mr' ? 'बंद (Off)' : 'Off');
    }
    const btn = document.getElementById('smartBoardToggleBtn');
    if (btn) {
      if (enabled) btn.classList.add('active');
      else btn.classList.remove('active');
    }
  }

  function renderFacility(key) {
    state.currentFacility = key;
    const fac = facilitiesData[key];
    if (!fac) return;

    const iconEl = document.getElementById('facilityIcon');
    const titleEl = document.getElementById('facilityTitle');
    const descEl = document.getElementById('facilityDesc');
    const tagsEl = document.getElementById('facilityTags');

    if (iconEl) iconEl.innerHTML = `<i class="fa-solid ${fac.icon}"></i>`;
    if (titleEl) titleEl.textContent = state.lang === 'mr' ? fac.titleMr : fac.titleEn;
    if (descEl) descEl.textContent = state.lang === 'mr' ? fac.descMr : fac.descEn;

    if (tagsEl) {
      const tags = state.lang === 'mr' ? fac.tagsMr : fac.tagsEn;
      tagsEl.innerHTML = tags.map(t => `<span class="badge">${t}</span>`).join('');
    }

    // Set active button in facility buttons grid
    const btnGroup = document.getElementById('facilityButtonGroup');
    if (btnGroup) {
      btnGroup.querySelectorAll('.facility-btn').forEach(b => {
        if (b.getAttribute('data-fac-key') === key) {
          b.classList.add('active');
        } else {
          b.classList.remove('active');
        }
      });
    }
  }

  function renderSopTab(sopKey) {
    state.currentSop = sopKey;
    const sop = sopsData[sopKey] || sopsData.sop1;
    const contentArea = document.getElementById('sopTabContent');
    if (!contentArea) return;

    contentArea.innerHTML = `
      <div class="sop-title-badge">HSC 12th IT Syllabus (Code 97)</div>
      <h4 class="sop-heading">${sop.title}</h4>
      <p class="sop-desc"><strong>Aim:</strong> ${sop.aim}</p>
      
      <div class="sop-code-container">
        <div class="sop-code-header">
          <span>SOURCE CODE (HTML / JS / CSS)</span>
          <button class="btn-copy-code" id="btnCopySopCode"><i class="fa-solid fa-copy"></i> Copy Code</button>
        </div>
        <pre class="sop-code-block"><code>${escapeHtml(sop.code)}</code></pre>
      </div>

      <div class="sop-live-preview">
        <strong style="color: var(--primary);"><i class="fa-solid fa-circle-check"></i> Practical Journal Note:</strong>
        <p style="font-size: 0.84rem; color: var(--text-muted); margin-top: 0.3rem;">
          Verified as per Maharashtra State Board of Secondary and Higher Secondary Education (Pune) 12th Standard Information Technology (IT) practical exam guidelines. Complete journal certified for final viva evaluation.
        </p>
      </div>
    `;

    // Copy Code button listener
    const copyBtn = document.getElementById('btnCopySopCode');
    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(sop.code).then(() => {
          copyBtn.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
          setTimeout(() => {
            copyBtn.innerHTML = '<i class="fa-solid fa-copy"></i> Copy Code';
          }, 2000);
        });
      });
    }

    // Update active tab button
    const tabsNav = document.querySelector('.sop-tabs-nav');
    if (tabsNav) {
      tabsNav.querySelectorAll('.sop-tab-btn').forEach(btn => {
        if (btn.getAttribute('data-sop-tab') === sopKey) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });
    }
  }

  function escapeHtml(string) {
    const entityMap = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    };
    return String(string).replace(/[&<>"']/g, s => entityMap[s]);
  }

  // =========================================================================
  // 6. EVENT LISTENERS & WIRING
  // =========================================================================

  // Initial Theme & Settings Load
  applyLanguage(state.lang);
  applyFontSize(state.fontSize);
  applyDarkMode(state.darkMode);
  applySmartBoard(state.smartBoard);
  renderFacility(state.currentFacility);
    if (typeof renderGallery === "function") renderGallery(currentGalleryFilter);

  // Settings Modal Controls
  const settingsModal = document.getElementById('settingsModal');
  const settingsOpenBtn = document.getElementById('settingsOpenBtn');
  const settingsCloseBtn = document.getElementById('settingsCloseBtn');
  const btnCloseSettingsModal = document.getElementById('btnCloseSettingsModal');
  const btnResetSettings = document.getElementById('btnResetSettings');

  if (settingsOpenBtn) {
    settingsOpenBtn.addEventListener('click', () => {
      if (settingsModal) settingsModal.classList.add('open');
    });
  }
  if (settingsCloseBtn) {
    settingsCloseBtn.addEventListener('click', () => {
      if (settingsModal) settingsModal.classList.remove('open');
    });
  }
  if (btnCloseSettingsModal) {
    btnCloseSettingsModal.addEventListener('click', () => {
      if (settingsModal) settingsModal.classList.remove('open');
    });
  }
  if (settingsModal) {
    settingsModal.addEventListener('click', (e) => {
      if (e.target === settingsModal) settingsModal.classList.remove('open');
    });
  }

  // Language buttons
  const langEnBtn = document.getElementById('langEnBtn');
  const langMrBtn = document.getElementById('langMrBtn');
  if (langEnBtn) langEnBtn.addEventListener('click', () => applyLanguage('en'));
  if (langMrBtn) langMrBtn.addEventListener('click', () => applyLanguage('mr'));

  // Font buttons
  const fontSmBtn = document.getElementById('fontSmBtn');
  const fontMdBtn = document.getElementById('fontMdBtn');
  const fontLgBtn = document.getElementById('fontLgBtn');
  const fontXlBtn = document.getElementById('fontXlBtn');
  if (fontSmBtn) fontSmBtn.addEventListener('click', () => applyFontSize('font-sm'));
  if (fontMdBtn) fontMdBtn.addEventListener('click', () => applyFontSize('font-md'));
  if (fontLgBtn) fontLgBtn.addEventListener('click', () => applyFontSize('font-lg'));
  if (fontXlBtn) fontXlBtn.addEventListener('click', () => applyFontSize('font-xl'));

  // Dark mode & Smart board toggles
  const darkModeToggleBtn = document.getElementById('darkModeToggleBtn');
  if (darkModeToggleBtn) {
    darkModeToggleBtn.addEventListener('click', () => {
      applyDarkMode(!state.darkMode);
    });
  }
  const smartBoardToggleBtn = document.getElementById('smartBoardToggleBtn');
  if (smartBoardToggleBtn) {
    smartBoardToggleBtn.addEventListener('click', () => {
      applySmartBoard(!state.smartBoard);
    });
  }

  // Reset defaults
  if (btnResetSettings) {
    btnResetSettings.addEventListener('click', () => {
      applyLanguage('en');
      applyFontSize('font-md');
      applyDarkMode(false);
      applySmartBoard(false);
    });
  }

  // Mobile Navigation Drawer Toggle
  const mobileNavToggle = document.getElementById('mobileNavToggle');
  const navMenu = document.getElementById('navMenu');
  if (mobileNavToggle && navMenu) {
    mobileNavToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }

  // Campus Facility Switcher Buttons
  const facilityButtons = document.querySelectorAll('.facility-btn');
  facilityButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.getAttribute('data-fac-key');
      renderFacility(key);
    });
  });

  // IT Hub Practical Modal
  const itHubModal = document.getElementById('itHubModal');
  const btnOpenItHub = document.getElementById('btnOpenItHub');
  const itModalCloseBtn = document.getElementById('itModalCloseBtn');

  if (btnOpenItHub && itHubModal) {
    btnOpenItHub.addEventListener('click', () => {
      renderSopTab(state.currentSop);
      itHubModal.classList.add('open');
    });
  }
  if (itModalCloseBtn && itHubModal) {
    itModalCloseBtn.addEventListener('click', () => {
      itHubModal.classList.remove('open');
    });
  }
  if (itHubModal) {
    itHubModal.addEventListener('click', (e) => {
      if (e.target === itHubModal) itHubModal.classList.remove('open');
    });
  }

  // SOP Tab Switching
  const sopTabButtons = document.querySelectorAll('.sop-tab-btn');
  sopTabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const sopKey = btn.getAttribute('data-sop-tab');
      renderSopTab(sopKey);
    });
  });

  // Other Student Hub Buttons (Science, Commerce, Papers)
  const hubAlertMessages = {
    science: {
      en: "Science Lab Manuals (Physics, Chemistry, Biology) have been updated for 2026–27. Please consult the Science department laboratory assistant for printed record books.",
      mr: "सायन्स लॅब मॅन्युअल्स (भौतिकशास्त्र, रसायनशास्त्र, जीवशास्त्र) २०२६–२७ साठी अद्ययावत केली आहेत. छापील प्रॅक्टिकल पुस्तकांसाठी सायन्स लॅब सहाय्यकांशी संपर्क साधावा."
    },
    commerce: {
      en: "Commerce & Accounts Practice Vault (GST accounting, balance sheets, and journal entries) is available in the library and computer lab.",
      mr: "वाणिज्य आणि अकौंट्स सराव संच (GST लेजर, ताळेबंद आणि जर्नल नोंदी) ग्रंथालयात व कॉम्प्युटर लॅबमध्ये सराव करण्यासाठी उपलब्ध आहे."
    },
    papers: {
      en: "HSC & SSC Board Question Papers (2021 to 2026) with model answer sheets are organized in the Central Library reference section.",
      mr: "२०२१ ते २०२६ च्या HSC आणि SSC बोर्ड प्रश्नपत्रिका व आदर्श उत्तरपत्रिका मध्यवर्ती ग्रंथालयाच्या संदर्भ विभागात उपलब्ध आहेत."
    }
  };

  const btnOpenScienceHub = document.getElementById('btnOpenScienceHub');
  const btnOpenCommerceHub = document.getElementById('btnOpenCommerceHub');
  const btnOpenPapersHub = document.getElementById('btnOpenPapersHub');

  if (btnOpenScienceHub) {
    btnOpenScienceHub.addEventListener('click', () => {
      alert(state.lang === 'mr' ? hubAlertMessages.science.mr : hubAlertMessages.science.en);
    });
  }
  if (btnOpenCommerceHub) {
    btnOpenCommerceHub.addEventListener('click', () => {
      alert(state.lang === 'mr' ? hubAlertMessages.commerce.mr : hubAlertMessages.commerce.en);
    });
  }
  if (btnOpenPapersHub) {
    btnOpenPapersHub.addEventListener('click', () => {
      alert(state.lang === 'mr' ? hubAlertMessages.papers.mr : hubAlertMessages.papers.en);
    });
  }

  // Digital Kiosk Chips
  const kioskChips = document.querySelectorAll('.kiosk-chip');
  kioskChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const action = chip.getAttribute('data-kiosk-action');
      if (action === 'it') {
        if (btnOpenItHub) btnOpenItHub.click();
      } else if (action === 'exam') {
        alert(state.lang === 'mr' 
          ? "HSC बोर्ड परीक्षा वेळापत्रक: प्रात्यक्षिक परीक्षा फेब्रुवारी २०२७ आणि लेखी परीक्षा फेब्रुवारी-मार्च २०२७ मध्ये आयोजित केली जाईल."
          : "HSC Board Examination Schedule: Practical Exams in Feb 2027; Written Theory Exams in Feb-March 2027.");
      } else if (action === 'qb') {
        alert(state.lang === 'mr'
          ? "बोर्डाचे अधिकृत विषयनिहाय प्रश्नसंच विद्यार्थी केंद्रात व ग्रंथालयात उपलब्ध आहेत."
          : "Official HSC Board Question Banks are available in the Student Learning Hub & Library.");
      } else if (action === 'admission') {
        const contactSection = document.getElementById('contact');
        if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Notice Action Buttons
  const noticeActionBtns = document.querySelectorAll('.btn-notice-action');
  noticeActionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const noticeId = btn.getAttribute('data-notice-open');
      if (noticeId === 'notice1') {
        alert(state.lang === 'mr'
          ? "पालक सभेचा सविस्तर तपशील:\nतारीख: शनिवार, २२/०८/२०२६\nवेळ: सकाळी १०:०० वाजता\nस्थान: प्रशालेचे सभागृह\nविषय: विद्यार्थ्यांची शैक्षणिक प्रगती व नवीन उपक्रमांची माहिती."
          : "Parent Meeting Details:\nDate: Saturday, 22/08/2026\nTime: 10:00 AM Sharp\nVenue: School Auditorium\nAgenda: Academic progress, discipline, and board exam preparation.");
      } else if (noticeId === 'notice2') {
        if (btnOpenItHub) btnOpenItHub.click();
      } else {
        alert(state.lang === 'mr'
          ? "वार्षिक स्नेहसंमेलन व सांस्कृतिक कार्यक्रम सविस्तर वेळापत्रक लवकरच सूचना फलकावर प्रसिद्ध होईल."
          : "Annual Gathering cultural schedule and sports timetable will be updated on the notice board soon.");
      }
    });
  });

  // =========================================================================
  // 7. INQUIRY FORM VALIDATION & DIRECT EMAIL DISPATCH
  // =========================================================================
  const inquiryForm = document.getElementById('inquiryForm');
  if (inquiryForm) {
    inquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('fullName');
      const phoneInput = document.getElementById('phone');
      const purposeInput = document.getElementById('inquiryType');
      const msgInput = document.getElementById('message');
      const feedback = document.getElementById('formFeedback');

      const errName = document.getElementById('errName');
      const errPhone = document.getElementById('errPhone');
      const errMsg = document.getElementById('errMsg');

      // Clear previous error states
      if (errName) errName.textContent = '';
      if (errPhone) errPhone.textContent = '';
      if (errMsg) errMsg.textContent = '';
      [nameInput, phoneInput, msgInput].forEach(inp => inp && inp.classList.remove('is-invalid'));

      let isValid = true;
      const nameVal = nameInput ? nameInput.value.trim() : '';
      const phoneVal = phoneInput ? phoneInput.value.trim() : '';
      const msgVal = msgInput ? msgInput.value.trim() : '';
      const purposeVal = purposeInput ? purposeInput.value : 'General Inquiry';

      // Validate Name
      if (nameVal.length < 3) {
        if (errName) errName.textContent = state.lang === 'mr' ? 'कृपया पूर्ण नाव प्रविष्ट करा (किमान ३ अक्षरे)' : 'Please enter a valid full name (min 3 chars).';
        if (nameInput) nameInput.classList.add('is-invalid');
        isValid = false;
      }

      // Validate 10-digit Indian Mobile Number
      const phoneRegex = /^[6-9]\d{9}$/;
      if (!phoneRegex.test(phoneVal)) {
        if (errPhone) errPhone.textContent = state.lang === 'mr' ? 'कृपया वैध १०-अंकी मोबाईल नंबर प्रविष्ट करा' : 'Please enter a valid 10-digit mobile number starting with 6-9.';
        if (phoneInput) phoneInput.classList.add('is-invalid');
        isValid = false;
      }

      // Validate Message
      if (msgVal.length < 10) {
        if (errMsg) errMsg.textContent = state.lang === 'mr' ? 'कृपया सविस्तर संदेश लिहा (किमान १० अक्षरे)' : 'Please write your message details (min 10 chars).';
        if (msgInput) msgInput.classList.add('is-invalid');
        isValid = false;
      }

      if (!isValid) {
        if (feedback) {
          feedback.className = 'form-feedback error';
          feedback.textContent = state.lang === 'mr' ? 'कृपया फॉर्ममधील त्रुटी तपासा.' : 'Please correct the errors above.';
        }
        return;
      }

      // Construct Structured Email Payload
      const recipient = "sohamjikamde@gmail.com";
      const subject = encodeURIComponent(`[College Inquiry] ${purposeVal} - ${nameVal}`);
      const emailBody = encodeURIComponent(
        `Dear Principal / IT Dept,\n\nI wish to submit an inquiry regarding Shivaji English School & Junior College, Pandur Titha.\n\n` +
        `• Student/Parent Name: ${nameVal}\n` +
        `• Contact Mobile: ${phoneVal}\n` +
        `• Inquiry Category: ${purposeVal}\n\n` +
        `Details / Question:\n${msgVal}\n\n` +
        `Submitted via official 12th IT Portal.`
      );

      // Open Mail Client or Web Gmail
      const mailtoUrl = `mailto:${recipient}?subject=${subject}&body=${emailBody}`;
      const gmailWebUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${subject}&body=${emailBody}`;

      if (feedback) {
        feedback.className = 'form-feedback success';
        feedback.innerHTML = state.lang === 'mr'
          ? `<i class="fa-solid fa-circle-check"></i> चौकशी तयार झाली! आपला ईमेल पाठवण्यासाठी <a href="${gmailWebUrl}" target="_blank" style="text-decoration: underline; font-weight: bold; color: var(--primary);">येथे क्लिक करा</a>.`
          : `<i class="fa-solid fa-circle-check"></i> Inquiry ready! <a href="${gmailWebUrl}" target="_blank" style="text-decoration: underline; font-weight: bold; color: var(--primary);">Click here to send via Gmail</a> or your mail app.`;
      }

      // Automatically trigger mailto link
      window.location.href = mailtoUrl;
    });
  }

  // =========================================================================
  // 8. BILINGUAL SHIVAJI AI ASSISTANT CHATBOT
  // =========================================================================
  const aiChatWindow = document.getElementById('aiChatWindow');
  const aiToggleBtn = document.getElementById('aiToggleBtn');
  const heroAskAiBtn = document.getElementById('heroAskAiBtn');
  const aiCloseBtn = document.getElementById('aiCloseBtn');
  const aiSendBtn = document.getElementById('aiSendBtn');
  const aiUserInput = document.getElementById('aiUserInput');
  const aiChatMessages = document.getElementById('aiChatMessages');

  function toggleAiChat() {
    if (!aiChatWindow) return;
    aiChatWindow.classList.toggle('open');
    if (aiChatWindow.classList.contains('open') && aiUserInput) {
      aiUserInput.focus();
    }
  }

  if (aiToggleBtn) aiToggleBtn.addEventListener('click', toggleAiChat);
  if (heroAskAiBtn) heroAskAiBtn.addEventListener('click', toggleAiChat);
  if (aiCloseBtn) aiCloseBtn.addEventListener('click', () => {
    if (aiChatWindow) aiChatWindow.classList.remove('open');
  });

  function appendChatMessage(text, sender = 'user') {
    if (!aiChatMessages) return;
    const bubble = document.createElement('div');
    bubble.className = `chat-bubble ${sender}`;
    bubble.innerHTML = text;
    aiChatMessages.appendChild(bubble);
    aiChatMessages.scrollTop = aiChatMessages.scrollHeight;
  }

  function processAiQuery(query) {
    const q = query.toLowerCase().trim();
    let reply = "";

    if (q.includes('admission') || q.includes('प्रवेश') || q.includes('form') || q.includes('फी')) {
      reply = state.lang === 'mr'
        ? "🎓 <strong>प्रवेश माहिती (२०२६–२७):</strong><br>• इयत्ता ५ वी ते १० वी (सेमी-इंग्रजी / इंग्रजी)<br>• ११ वी व १२ वी सायन्स, कॉमर्स, आर्ट्स व IT.<br>प्रवेशासाठी शाळा कार्यालयाशी सकाळी ९:३० ते ५:०० या वेळेत संपर्क साधा."
        : "🎓 <strong>Admissions (2026–27):</strong><br>• Grades 5th–10th (Semi-English & English medium)<br>• 11th & 12th HSC (Science, Commerce, Arts with IT).<br>Visit the administrative office between 9:30 AM and 5:00 PM for prospectus and registration.";
    } else if (q.includes('it') || q.includes('sop') || q.includes('practical') || q.includes('प्रॅक्टिकल') || q.includes('code') || q.includes('journal')) {
      reply = state.lang === 'mr'
        ? "💻 <strong>१२ वी IT प्रॅक्टिकल्स (SOPs):</strong><br>महाराष्ट्र HSC बोर्डासाठी SOP १ ते ६ (HTML5 Layout, JavaScript Validation, Multimedia, Image Mapping, CSS Grid आणि SEO) ची संपूर्ण उत्तरे विद्यार्थी केंद्रात उपलब्ध आहेत.<br><button class='btn-setting-toggle' onclick='document.getElementById(\"btnOpenItHub\").click()' style='margin-top:5px;'>IT SOPs उघडा</button>"
        : "💻 <strong>12th Standard IT SOPs:</strong><br>All Maharashtra HSC Board Skill-Oriented Practicals (SOP 1 to 6 covering HTML5, JS Validation, Multimedia, Image Maps, CSS Grid, and SEO) are available in our Student Hub.<br><button class='btn-setting-toggle' onclick='document.getElementById(\"btnOpenItHub\").click()' style='margin-top:5px;'>Open IT SOPs Hub</button>";
    } else if (q.includes('course') || q.includes('stream') || q.includes('शाखा') || q.includes('science') || q.includes('commerce') || q.includes('arts')) {
      reply = state.lang === 'mr'
        ? "📚 <strong>शैक्षणिक शाखा:</strong><br>१. माध्यमिक शाळा (५ वी - १० वी)<br>२. विज्ञान शाखा (PCMB + IT)<br>३. वाणिज्य शाखा (BK, OCM, Eco, SP/IT)<br>४. कला शाखा (इतिहास, भूगोल, राज्यशास्त्र, भाषा)."
        : "📚 <strong>Available Academic Streams:</strong><br>1. Secondary School (Grades 5-10)<br>2. Science Stream (Physics, Chemistry, Maths, Biology, IT)<br>3. Commerce Stream (Accounts, OCM, Economics, IT)<br>4. Arts Stream (History, Geography, Pol Sci, Languages).";
    } else if (q.includes('timing') || q.includes('time') || q.includes('वेळ') || q.includes('कार्यालय')) {
      reply = state.lang === 'mr'
        ? "🕒 <strong>शालेय व कार्यालयीन वेळ:</strong><br>• शाळा/कॉलेज: सकाळी ७:३० ते सायंकाळी ४:३०<br>• कार्यालय: सोमवार ते शनिवार, सकाळी ९:३० ते सायंकाळी ५:०० (रविवार सुट्टी)."
        : "🕒 <strong>College & Office Timings:</strong><br>• Academic Sessions: 7:30 AM to 4:30 PM<br>• Administrative Office: Mon–Sat, 9:30 AM to 5:00 PM (Closed on Sundays).";
    } else if (q.includes('principal') || q.includes('मुख्याध्यापक') || q.includes('head')) {
      reply = state.lang === 'mr'
        ? "👨‍🏫 <strong>मुख्याध्यापक कक्ष:</strong><br>आमचे प्राचार्य (M.Sc., M.Ed., Ph.D.) गेल्या अनेक वर्षांपासून विद्यार्थ्यांच्या सर्वांगीण शैक्षणिक प्रगतीसाठी मार्गदर्शन करत आहेत."
        : "👨‍🏫 <strong>Principal's Desk:</strong><br>Our respected Principal (M.Sc., M.Ed., Ph.D.) oversees academic administration and student mentorship across all streams.";
    } else if (q.includes('facility') || q.includes('सुविधा') || q.includes('lab') || q.includes('campus')) {
      reply = state.lang === 'mr'
        ? "🏫 <strong>परिसर सुविधा:</strong><br>• डिजिटल स्मार्ट क्लासरूम्स<br>• ४०+ संगणकांची IT लॅब<br>• भौतिक, रसायन व जीवशास्त्र प्रयोगशाळा<br>• १०,०००+ पुस्तकांचे मध्यवर्ती ग्रंथालय<br>• भव्य क्रीडांगण व सभागृह."
        : "🏫 <strong>Campus Facilities:</strong><br>• Interactive Touch Smart Classrooms<br>• 40+ Workstation IT & Computer Lab<br>• Physics, Chemistry & Biology Labs<br>• 10,000+ Book Central Library<br>• Sports Complex & 600-seat Auditorium.";
    } else if (q.includes('contact') || q.includes('पत्ता') || q.includes('address') || q.includes('phone') || q.includes('email')) {
      reply = state.lang === 'mr'
        ? "📍 <strong>पत्ता व संपर्क:</strong><br>शिवाजी इंग्लिश स्कूल व कनिष्ठ महाविद्यालय, पांडूर तिठा, मुंबई-गोवा महामार्ग, ता. कुडाळ, जि. सिंधुदुर्ग - ४१६५२८.<br>📞 फोन: +९१ (०२३६२) २२४-८०९०<br>✉️ ईमेल: sohamjikamde@gmail.com"
        : "📍 <strong>Contact & Location:</strong><br>Shivaji English School & Jr. College, Pandur Titha, NH-66, Tal. Kudal, Dist. Sindhudurg, Maharashtra - 416528.<br>📞 Phone: +91 (02362) 224-8090<br>✉️ Email: sohamjikamde@gmail.com";
    } else {
      reply = state.lang === 'mr'
        ? "मी शिवाजी कॉलेज AI असिस्टंट आहे! आपण प्रवेश, १२ वी IT प्रॅक्टिकल्स, अभ्यासक्रम, निकाल किंवा वेळेबद्दल विचारू शकता."
        : "I am the Shivaji College AI Assistant! You can ask about Admissions, 12th IT Practical SOPs, Courses, Exam dates, or College Timings in English or मराठी.";
    }

    setTimeout(() => {
      appendChatMessage(reply, 'ai');
    }, 400);
  }

  function handleAiSend() {
    if (!aiUserInput) return;
    const text = aiUserInput.value.trim();
    if (!text) return;
    appendChatMessage(text, 'user');
    aiUserInput.value = '';
    processAiQuery(text);
  }

  if (aiSendBtn) aiSendBtn.addEventListener('click', handleAiSend);
  if (aiUserInput) {
    aiUserInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') handleAiSend();
    });
  }

  // Suggestion chips in AI assistant
  document.addEventListener('click', (e) => {
    if (e.target && e.target.classList.contains('ai-chip-btn')) {
      const q = e.target.getAttribute('data-query') || e.target.textContent;
      appendChatMessage(q, 'user');
      processAiQuery(q);
    }
  });

});
