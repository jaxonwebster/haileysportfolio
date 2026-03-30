/* =========================
   MENU
========================= */
const menuBtn = document.getElementById("menuBtn");
const sideMenu = document.getElementById("sideMenu");
const closeMenu = document.getElementById("closeMenu");
const overlay = document.querySelector(".overlay");

if (menuBtn && sideMenu && closeMenu) {
  menuBtn.addEventListener("click", () => {
    sideMenu.classList.add("open");
    if (overlay) overlay.classList.add("show");
  });

  closeMenu.addEventListener("click", () => {
    sideMenu.classList.remove("open");
    if (overlay) overlay.classList.remove("show");
  });

  if (overlay) {
    overlay.addEventListener("click", () => {
      sideMenu.classList.remove("open");
      overlay.classList.remove("show");
    });
  }
}

/* =========================
   TYPEWRITER
========================= */
const typeTarget = document.getElementById("typewriter");

if (typeTarget) {
  const text = "Hi, I'm Hailey Webster";
  let typeIndex = 0;

  function typeWriter() {
    if (typeIndex < text.length) {
      typeTarget.textContent += text.charAt(typeIndex);
      typeIndex++;
      setTimeout(typeWriter, 80);
    }
  }

  typeWriter();
}

/* =========================
   ROTATING WORDS (Homepage)
========================= */
const rotatingWord = document.getElementById("rotating-word");

if (rotatingWord) {
  const words = [
    "Search Engine Optimization",
    "social media management",
    "paid advertising",
    "Google Analytics",
    "digital design",
    "Google Search Console",
    "blog-writing",
    "data analytics",
    "Microsoft Suite",
    "Marketing Strategy"

  ];

  let rotateIndex = 0;
  rotatingWord.textContent = words[rotateIndex];

  setInterval(() => {
    rotatingWord.style.opacity = 0;
    rotatingWord.style.transform = "translateY(6px)";

    setTimeout(() => {
      rotateIndex = (rotateIndex + 1) % words.length;
      rotatingWord.textContent = words[rotateIndex];
      rotatingWord.style.opacity = 1;
      rotatingWord.style.transform = "translateY(0)";
    }, 300);
  }, 1600);
}

/* =========================
   ROTATING WORDS (Projects Page)
========================= */
document.addEventListener("DOMContentLoaded", function () {
  const projectRotatingWord = document.querySelector(".projects-rotating-word");

  if (!projectRotatingWord) return;

  const words = [
    "Python",
    "AWS",
    "JavaScript",
    "Node.js",
    "C++",
    "HTML",
    "ASP.NET",
    "SQL",
    "CSS"
    ];

  let index = 0;

  function rotateWord() {
    projectRotatingWord.style.opacity = 0;

    setTimeout(() => {
      projectRotatingWord.textContent = words[index];
      projectRotatingWord.style.opacity = 1;
      index = (index + 1) % words.length;
    }, 300);
  }

  projectRotatingWord.textContent = words[index];
  projectRotatingWord.style.opacity = 1;
  index++;

  setInterval(rotateWord, 1800);
});

/* =========================
   BACKGROUND CANVAS (DATA PULSES)

const canvas = document.getElementById("signalCanvas");

if (canvas) {
  const ctx = canvas.getContext("2d");
  let w, h;

  const lines = [];
  const pulses = [];
  const LINE_COUNT = 45;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }

  window.addEventListener("resize", resize);
  resize();

  class Line {
    constructor() {
      this.reset();
    }

    reset() {
      this.x1 = Math.random() * w;
      this.y1 = Math.random() * h;
      const angle = Math.random() * Math.PI * 2;
      const length = 120 + Math.random() * 220;
      this.x2 = this.x1 + Math.cos(angle) * length;
      this.y2 = this.y1 + Math.sin(angle) * length;
    }

    draw() {
      ctx.beginPath();
      ctx.moveTo(this.x1, this.y1);
      ctx.lineTo(this.x2, this.y2);
      ctx.strokeStyle = "rgba(107, 92, 255, 0.08)";
      ctx.lineWidth = 1;
      ctx.stroke();
    }
  }

  class Pulse {
    constructor(line) {
      this.line = line;
      this.t = 0;
      this.speed = 0.0012 + Math.random() * 0.0018;
    }

    update() {
      this.t += this.speed;
    }

    draw() {
      const x = this.line.x1 + (this.line.x2 - this.line.x1) * this.t;
      const y = this.line.y1 + (this.line.y2 - this.line.y1) * this.t;

      ctx.beginPath();
      ctx.arc(x, y, 2.5, 0, Math.PI * 2);
      ctx.fillStyle = "#8E7332";
      ctx.shadowBlur = 10;
      ctx.shadowColor = "#bcb1f4";
      ctx.fill();
      ctx.shadowBlur = 0;
    }
  }

  for (let i = 0; i < LINE_COUNT; i++) {
    lines.push(new Line());
  }

  function animate() {
    ctx.clearRect(0, 0, w, h);

    lines.forEach((line) => line.draw());

    if (Math.random() < 0.035) {
      pulses.push(
        new Pulse(lines[Math.floor(Math.random() * lines.length)])
      );
    }

    for (let i = pulses.length - 1; i >= 0; i--) {
      pulses[i].update();
      pulses[i].draw();
      if (pulses[i].t >= 1) pulses.splice(i, 1);
    }

    requestAnimationFrame(animate);
  }

  animate();
}
========================= */
/* =========================
   AUTO IMAGE ROTATION
========================= */
document.querySelectorAll(".auto-rotate").forEach(container => {
  const images = container.querySelectorAll("img");
  if (images.length === 0) return;

  let index = 0;
  images[index].classList.add("active");

  setInterval(() => {
    images[index].classList.remove("active");
    index = (index + 1) % images.length;
    images[index].classList.add("active");
  }, 5000);
});

/* =========================
   WHO IS JAXON IMAGE ROTATOR
========================= */
const whoImages = [
  "images/IMG_6132.jpg",
  "images/IMG_9681.jpg",
  "images/IMG_6808.jpg"
];

let whoIndex = 0;
const whoImgElement = document.querySelector(".who-rotating-image");

if (whoImgElement) {
  setInterval(() => {
    whoImgElement.style.opacity = 0;

    setTimeout(() => {
      whoIndex = (whoIndex + 1) % whoImages.length;
      whoImgElement.src = whoImages[whoIndex];
      whoImgElement.style.opacity = 1;
    }, 400);
  }, 5000);
}

/* =========================
   CHATBOT LOGIC
========================= */
const chatbotToggle = document.getElementById("chatbotToggle");
const chatbotWindow = document.getElementById("chatbotWindow");
const chatbotClose = document.getElementById("chatbotClose");
const chatbotBody = document.getElementById("chatbotBody");

const responses = {
  skills: `I work with HTML, CSS, JavaScript, React, Python, SQL, and .NET. Feel free to check out my <a href="resume.html" class="chat-link">resume</a> page for a more detailed summary!`,
  experience: 'I’ve worked as a Cloud Computing TA, Data Analyst, and Web Design Intern building real-world systems. For more information, visit my <a href="resume.html" class="chat-link">resume</a> page',
  projects: 'You should definitely check out CineNiche and my other web design projects on my <a href="projects.html" class="chat-link">projects</a> page!',
  contact: 'You can reach me via email, LinkedIn, or call/text me anytime! You can find my contact information <a href="#contact" class="chat-link">here</a>'
};

if (chatbotToggle && chatbotWindow && chatbotClose && chatbotBody) {
  chatbotToggle.addEventListener("click", () => {
    chatbotWindow.classList.toggle("active");
  });

  chatbotClose.addEventListener("click", () => {
    chatbotWindow.classList.remove("active");
  });

  document.querySelectorAll(".chatbot-questions button").forEach(btn => {
    btn.addEventListener("click", () => {
      const key = btn.dataset.question;
      const reply = responses[key];
      const questionText = btn.textContent;

      if (reply) {
        const userMsg = document.createElement("p");
        userMsg.className = "user-message";
        userMsg.textContent = questionText;
        chatbotBody.appendChild(userMsg);

        const botMsg = document.createElement("p");
        botMsg.className = "bot-message";
        botMsg.innerHTML = reply;

        setTimeout(() => {
          chatbotBody.appendChild(botMsg);
          chatbotBody.scrollTop = chatbotBody.scrollHeight;
        }, 300);
      }
    });
  });
}
/* =========================
   ROTATING WORDS (About Page)
========================= */
document.addEventListener("DOMContentLoaded", function () {
  const aboutRotatingWord = document.querySelector(".about-rotating-word");

  if (!aboutRotatingWord) return;

  const words = [
    "curiosity",
    "problem solving",
    "continuous improvement",
    "family"
  ];

  let index = 0;

  function rotateWord() {
    aboutRotatingWord.style.opacity = 0;

    setTimeout(() => {
      aboutRotatingWord.textContent = words[index];
      aboutRotatingWord.style.opacity = 1;
      index = (index + 1) % words.length;
    }, 300);
  }

  aboutRotatingWord.textContent = words[index];
  aboutRotatingWord.style.opacity = 1;
  index++;

  setInterval(rotateWord, 2500);
});
