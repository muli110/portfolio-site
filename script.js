// Scroll reveal animation
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade-in");

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    elements.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;
      if (elementTop < windowHeight - 100) {
        el.classList.add("visible");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Trigger on load
});
// Fade-in on scroll
document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll(".fade-in");

  const appearOptions = {
    threshold: 0.2, // 20% of element visible before triggering
    rootMargin: "0px 0px -50px 0px" // triggers slightly before fully in view
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("appear");
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll(".fade-in");

  const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("appear");
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});

// =======================
// Mobile Menu Toggle
// =======================
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("nav-open");
    menuBtn.classList.toggle("open");
  });
}

