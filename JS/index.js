const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-nav");
const navLinks = document.querySelectorAll(".mobile-nav a");

hamburger.addEventListener("click", () => {
  const isOpen = hamburger.classList.toggle("open");
  mobileNav.style.display = isOpen ? "flex" : "none";
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("open");
    mobileNav.style.display = "none";
  });
});

const desktopLinks = document.querySelectorAll("header nav a");

document.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 75; // Adjust for header height
    const sectionHeight = section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      currentSection = section.getAttribute("id");
    }
  });

  [...desktopLinks, ...navLinks].forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").slice(1) === currentSection) {
      link.classList.add("active");
    }
  });
});
