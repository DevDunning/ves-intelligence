// ==========================
// Homepage Splash Control
// ==========================
if (
  window.location.pathname.endsWith("index.html") ||
  window.location.pathname === "/"
) {
  const splash = document.querySelector(".splash-screen");

  if (splash) {
    // Lock scroll while splash is visible
    document.body.style.overflow = "hidden";

    // Ensure splash logo is centered
    const splashLogo = document.querySelector(".hero-logo img");
    if (splashLogo) {
      splashLogo.style.display = "block";
      splashLogo.style.margin = "0 auto";
      splashLogo.style.maxWidth = "150px";
      splashLogo.style.height = "150px";
    }

    // Show splash initially
    splash.style.opacity = "1";

    // Fade out splash
    setTimeout(() => {
      splash.style.transition = "opacity 0.8s ease";
      splash.style.opacity = "0";
      splash.addEventListener(
        "transitionend",
        () => {
          splash.remove();
          document.body.style.overflow = "";
        },
        { once: true }
      );
    }, 1500);
  }
}

// ==========================
// DOMContent Loaded Setup
// ==========================
document.addEventListener("DOMContentLoaded", () => {
  // Hero Logo Resize Across All Pages
  const heroLogo = document.querySelector(".hero-logo img, .hero-logo-img");
  if (heroLogo) {
    heroLogo.style.maxWidth = "250px";
    heroLogo.style.height = "auto";
    heroLogo.style.display = "block";
    heroLogo.style.margin = "0 auto";
  }

  // Hamburger Menu Toggle
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }
});

// ==========================
// Ves Wave Animated Background
// ==========================
const vesWave = document.querySelector(".ves-wave");
if (vesWave) {
  let hue = 0;
  function animateWave() {
    hue = (hue + 0.5) % 360;
    vesWave.style.background = `linear-gradient(270deg, hsl(${hue}, 80%, 50%), hsl(${
      (hue + 60) % 360
    }, 80%, 50%))`;
    requestAnimationFrame(animateWave);
  }
  animateWave();
}

// ==========================
// Smooth Scroll for Nav Anchors
// ==========================
const anchorLinks = document.querySelectorAll('header nav a[href^="#"]');
anchorLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth" });
  });
});
