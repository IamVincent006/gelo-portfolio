// Animate skill bars
document.addEventListener("scroll", () => {
  const bars = document.querySelectorAll(".bar span");
  const triggerBottom = window.innerHeight * 0.8;

  bars.forEach(bar => {
    const rect = bar.getBoundingClientRect();
    if (rect.top < triggerBottom) {
      bar.style.width = bar.getAttribute("data-width");
    }
  });
});

// Return to top when clicking name
document.getElementById("homeLink").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Toggle theme neon colors
const toggle = document.getElementById("themeToggle");
let toggleState = false;

toggle.addEventListener("click", () => {
  toggleState = !toggleState;
  if (toggleState) {
    document.documentElement.style.setProperty("--neon", "#ff00ff");
    document.documentElement.style.setProperty("--accent", "#ff33cc");
  } else {
    document.documentElement.style.setProperty("--neon", "#00ffff");
    document.documentElement.style.setProperty("--accent", "#0099ff");
  }
});
