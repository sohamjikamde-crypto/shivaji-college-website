/**
 * Shivaji English School & Junior College | Official Portal Script
 * Interactive UI, Accessibility, Notice Filters & Shivaji AI Assistant
 */

document.addEventListener('DOMContentLoaded', () => {
  initAccessibility();
  initMobileNav();
  initNoticeFilters();
  initAnimatedCounters();
  initAiAssistant();
});

/* ==========================================================================
   1. Accessibility & Smart Board Controls
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
   2. Mobile Navigation Toggle
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
   3. Notice Board Filters
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
  alert(`Official Notice: ${noticeTitle}\n\nPlease visit the college administrative office at Pandur Titha or check the main circular display board for complete documentation.`);
}

/* ==========================================================================
   4. Interactive Campus Facilities
   ========================================================================== */
const facilityData = {
  smartClass: {
    title: "Interactive Smart Classrooms",
    icon: "fa-solid fa-chalkboard",
    desc: "Equipped with high-definition touch-interactive smart boards, synchronized audio-visual media, and high-speed campus internet for dynamic multimedia lectures.",
    tags: ["Touch Enabled", "Audio-Visual", "E-Learning Ready"]
  },
  computerLab: {
    title: "Advanced Computer & IT Laboratory",
    icon: "fa-solid fa-desktop",
    desc: "Over 40 high-performance computer workstations loaded with HTML5/CSS3/JavaScript IDEs, Linux, Office software, and broadband connectivity for 11th & 12th IT practicals.",
    tags: ["High-Speed Wi-Fi", "Linux & Windows", "1:1 Student PC Ratio"]
  },
  scienceLab: {
    title: "Specialized Science Laboratories",
    icon: "fa-solid fa-atom",
    desc: "Individual Physics, Chemistry, and Biology laboratories equipped with modern precision apparatus, safety gear, and chemical hoods for state-board experiments.",
    tags: ["Modern Apparatus", "Physics & Chem", "Safety Certified"]
  },
  library: {
    title: "Central Knowledge Library & Reading Room",
    icon: "fa-solid fa-book-bookmark",
    desc: "Vast collection of over 10,000 reference textbooks, state board guides, competitive entrance manuals (CET/NEET/JEE), regional literature, and educational periodicals.",
    tags: ["10,000+ Books", "Quiet Reading Area", "Digital Catalog"]
  },
  sports: {
    title: "Playground & Sports Complex",
    icon: "fa-solid fa-volleyball",
    desc: "Expansive outdoor playground supporting volleyball, kabaddi, kho-kho, cricket, and athletics, alongside indoor facilities for chess, table tennis, and carrom.",
    tags: ["Large Ground", "District Level Coaching", "Indoor Arena"]
  }
};

function switchFacility(key) {
  const data = facilityData[key];
  if (!data) return;

  // Update active button
  const buttons = document.querySelectorAll('.facility-btn');
  buttons.forEach(btn => btn.classList.remove('active'));
  event.currentTarget.classList.add('active');

  // Update viewport elements
  const displayIcon = document.getElementById('facilityIcon');
  const displayTitle = document.getElementById('facilityTitle');
  const displayDesc = document.getElementById('facilityDesc');
  const displayTags = document.getElementById('facilityTags');

  if (displayIcon) displayIcon.innerHTML = `<i class="${data.icon}"></i>`;
  if (displayTitle) displayTitle.textContent = data.title;
  if (displayDesc) displayDesc.textContent = data.desc;

  if (displayTags) {
    displayTags.innerHTML = data.tags.map(t => `<span class="badge">${t}</span>`).join('');
  }
}

/* ==========================================================================
   5. Animated Stats Counter
   ========================================================================== */
function initAnimatedCounters() {
  const stats = document.querySelectorAll('.stat-number');
  let hasRun = false;

  const runCounter = () => {
    stats.forEach(stat => {
      const target = +stat.getAttribute('data-target');
      const suffix = stat.textContent.includes('+') ? '+' : (stat.textContent.includes('%') ? '%' : '');
      let current = 0;
      const increment = Math.ceil(target / 40);

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          stat.textContent = target.toLocaleString() + suffix;
          clearInterval(timer);
        } else {
          stat.textContent = current.toLocaleString() + suffix;
        }
      }, 35);
    });
  };

  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !hasRun) {
      hasRun = true;
      runCounter();
    }
  }, { threshold: 0.5 });

  const statsSection = document.querySelector('.hero-stats-grid');
  if (statsSection) observer.observe(statsSection);
}

/* ==========================================================================
   6. Contact Form Submission
   ========================================================================== */
function handleFormSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('fullName').value;
  const feedback = document.getElementById('formFeedback');
  
  if (feedback) {
    feedback.innerHTML = `<span style="color: #059669;"><i class="fa-solid fa-circle-check"></i> Thank you, ${name}! Your message has been received by the Shivaji English School administrative desk. We will contact you shortly.</span>`;
  }
  document.getElementById('inquiryForm').reset();
}

function navigateToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

/* ==========================================================================
   7. Shivaji AI Assistant (Smart Conversational Bot)
   ========================================================================== */
function initAiAssistant() {
  const toggleBtn = document.getElementById('aiToggleBtn');
  const heroTrigger = document.getElementById('heroAiTrigger');
  const closeBtn = document.getElementById('aiCloseBtn');
  const chatWindow = document.getElementById('aiChatWindow');
  const sendBtn = document.getElementById('aiSendBtn');
  const input = document.getElementById('aiUserInput');

  const openChat = () => {
    if (chatWindow) {
      chatWindow.classList.add('open');
      if (input) input.focus();
    }
  };

  const closeChat = () => {
    if (chatWindow) chatWindow.classList.remove('open');
  };

  if (toggleBtn) toggleBtn.addEventListener('click', () => {
    chatWindow.classList.toggle('open');
  });

  if (heroTrigger) heroTrigger.addEventListener('click', openChat);
  if (closeBtn) closeBtn.addEventListener('click', closeChat);

  if (sendBtn && input) {
    sendBtn.addEventListener('click', () => handleAiUserMessage());
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') handleAiUserMessage();
    });
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
  const chatWindow = document.getElementById('aiChatWindow');
  const input = document.getElementById('aiUserInput');
  if (chatWindow) chatWindow.classList.add('open');
  if (input) {
    input.value = query;
    handleAiUserMessage();
  }
}

function handleAiUserMessage() {
  const input = document.getElementById('aiUserInput');
  const messageContainer = document.getElementById('aiChatMessages');
  if (!input || !messageContainer) return;

  const rawText = input.value.trim();
  if (!rawText) return;

  // Append user message bubble
  appendChatBubble(rawText, 'user');
  input.value = '';

  // Generate bot answer with realistic typing delay
  const typingIndicator = document.createElement('div');
  typingIndicator.className = 'chat-bubble ai';
  typingIndicator.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Thinking...';
  messageContainer.appendChild(typingIndicator);
  messageContainer.scrollTop = messageContainer.scrollHeight;

  setTimeout(() => {
    messageContainer.removeChild(typingIndicator);
    const responseText = getAiResponse(rawText.toLowerCase());
    appendChatBubble(responseText, 'ai');
  }, 450);
}

function appendChatBubble(htmlContent, sender) {
  const messageContainer = document.getElementById('aiChatMessages');
  if (!messageContainer) return;

  const bubble = document.createElement('div');
  bubble.className = `chat-bubble ${sender}`;
  bubble.innerHTML = htmlContent;
  messageContainer.appendChild(bubble);
  messageContainer.scrollTop = messageContainer.scrollHeight;
}

/**
 * Intelligent pattern knowledge base for Shivaji English School & Jr. College
 */
function getAiResponse(query) {
  if (query.includes('hi') || query.includes('hello') || query.includes('namaste') || query.includes('hey')) {
    return `Namaste! Welcome to Shivaji English School & Junior College AI Helpdesk. How can I assist you with admissions, IT syllabus, or courses today?`;
  }

  if (query.includes('establish') || query.includes('history') || query.includes('1960') || query.includes('about')) {
    return `🏛️ <strong>About Institution:</strong><br>Shivaji English School and Junior College was established in <strong>1960</strong> at Pandur Titha, Sindhudurg, Maharashtra. It is a premier co-educational, private-aided institution providing education for Grades 5 through 12.`;
  }

  if (query.includes('stream') || query.includes('course') || query.includes('subject') || query.includes('admission')) {
    return `📚 <strong>Academic Programs:</strong><br>
    • <strong>Secondary School:</strong> Grades 5–10 (Semi-English & English medium)<br>
    • <strong>Science Stream (11th & 12th):</strong> PCMB with Information Technology (IT) elective.<br>
    • <strong>Commerce Stream (11th & 12th):</strong> BK, OCM, Economics, SP / IT.<br>
    • <strong>Arts Stream (11th & 12th):</strong> History, Geography, Political Science, Languages.`;
  }

  if (query.includes('it') || query.includes('information technology') || query.includes('sop') || query.includes('project')) {
    return `💻 <strong>12th Standard IT Syllabus (Maharashtra State Board):</strong><br>
    1. Advanced Web Designing (HTML5 semantic tags, CSS3 flexbox/grid)<br>
    2. Client-Side Scripting (JavaScript functions, DOM, validation)<br>
    3. Advanced JavaScript & Server-Side (PHP Basics)<br>
    4. Emerging Technologies (Cloud Computing, AI, IoT, 5G)<br>
    5. E-Commerce and E-Governance & Cyber Law.`;
  }

  if (query.includes('contact') || query.includes('location') || query.includes('where') || query.includes('address') || query.includes('phone')) {
    return `📍 <strong>Contact & Location:</strong><br>
    • <strong>Address:</strong> Shivaji English School & Junior College, Pandur Titha, Taluka Kudal, Dist. Sindhudurg, Maharashtra - 416528.<br>
    • <strong>Phone:</strong> +91 2362 232000<br>
    • <strong>Office Hours:</strong> Mon–Sat, 9:30 AM to 5:00 PM.`;
  }

  if (query.includes('practical') || query.includes('science') || query.includes('lab') || query.includes('facility')) {
    return `🔬 <strong>Labs & Facilities:</strong><br>Our campus features specialized laboratories for Physics, Chemistry, Biology, a dedicated IT computer lab with 40+ PCs, interactive smart classrooms, and an extensive library with 10,000+ books.`;
  }

  if (query.includes('principal') || query.includes('faculty') || query.includes('teacher') || query.includes('staff')) {
    return `👨‍🏫 <strong>Faculty & Mentors:</strong><br>Our teaching faculty comprises highly qualified educators (M.Sc., M.Ed., M.Com, M.C.A., B.Ed.) dedicated to quality board performance, competitive exam mentorship, and practical training.`;
  }

  return `I can help with questions regarding our <strong>Admissions</strong>, <strong>11th/12th Streams (Science, Commerce, Arts, IT)</strong>, <strong>School History (Estd. 1960)</strong>, <strong>Campus Facilities</strong>, or <strong>12th IT Syllabus</strong>. Feel free to type your query!`;
}
