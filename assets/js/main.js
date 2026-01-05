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

    // Ensure splash is centered and sized
    const splashLogo = document.querySelector(".hero-logo img");
    if (splashLogo) {
      splashLogo.style.display = "block";
      splashLogo.style.margin = "0 auto";
      splashLogo.style.maxWidth = "150px";
      splashLogo.style.height = "150px";
    }

    // Safety: ensure splash starts visible
    splash.style.opacity = "1";

    // Fade out and remove splash
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
// Hero Logo Resize Across All Pages
// ==========================
document.addEventListener("DOMContentLoaded", () => {
  const heroLogo = document.querySelector(".hero-logo img, .hero-logo-img");

  if (heroLogo) {
    // Increase logo size on all pages
    heroLogo.style.maxWidth = "250px";
    heroLogo.style.height = "auto";
    heroLogo.style.display = "block";
    heroLogo.style.margin = "0 auto";
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
const navLinks = document.querySelectorAll('header nav a[href^="#"]');
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth" });
  });
});
