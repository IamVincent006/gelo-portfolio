// --- FUTURISTIC TYPING EFFECT ---
const text = "I.T | Website & Application Developer";
const typingElement = document.getElementById("typing-text");
let index = 0;

function typeWriter() {
  if (index < text.length) {
    typingElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 50); // Speed of typing
  } else {
    // Add glowing cursor at the end
    typingElement.innerHTML += '<span style="animation: blink 1s infinite">_</span>';
  }
}
// Start typing effect on load
window.onload = () => {
  setTimeout(typeWriter, 500);
};

// --- SCROLL REVEAL & SKILL BARS (Intersection Observer) ---
const revealElements = document.querySelectorAll(".reveal");
const progressBars = document.querySelectorAll(".progress-bar");

const observerOptions = {
  root: null,
  threshold: 0.15, // Trigger when 15% visible
  rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Add active class to reveal elements
      entry.target.classList.add("active");
      
      // If it's the skills section, animate bars
      if (entry.target.id === "skills" || entry.target.querySelector('.progress-bar')) {
        progressBars.forEach(bar => {
          bar.style.width = bar.getAttribute("data-width");
        });
      }
      // Unobserve after revealing to prevent repeating animation
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

revealElements.forEach(el => observer.observe(el));
// Ensure skills section itself triggers the bars
const skillsSection = document.getElementById('skills');
if(skillsSection) observer.observe(skillsSection);


// Smooth scroll to top when clicking Name/Brand
document.getElementById("homeLink").addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// --- RAINBOW NEON THEME CYCLER ---
// Defines 5 futuristic color palettes
const themes = [
  { neon: '#00ffff', accent: '#0099ff' }, // Cyan & Blue (Default)
  { neon: '#ff00ff', accent: '#cc00ff' }, // Neon Pink & Purple
  { neon: '#00ff00', accent: '#00cc66' }, // Matrix Green
  { neon: '#ffea00', accent: '#ff8800' }, // Cyber Yellow & Orange
  { neon: '#ff003c', accent: '#990000' }  // Cyberpunk Red
];

const toggle = document.getElementById("themeToggle");
let currentThemeIndex = 0;

toggle.addEventListener("click", () => {
  currentThemeIndex = (currentThemeIndex + 1) % themes.length; // Cycle through array
  
  const root = document.documentElement;
  // Apply the new colors to CSS variables
  root.style.setProperty("--neon", themes[currentThemeIndex].neon);
  root.style.setProperty("--accent", themes[currentThemeIndex].accent);
  
  // Optional: add a quick glitch animation to body when theme switches
  document.body.style.opacity = 0.8;
  setTimeout(() => { document.body.style.opacity = 1; }, 100);
});

// Cursor blink animation injection for typing effect
const style = document.createElement('style');
style.innerHTML = `
  @keyframes blink {
    0%, 100% { opacity: 1; text-shadow: 0 0 10px var(--neon); color: var(--neon); }
    50% { opacity: 0; }
  }
`;
document.head.appendChild(style);