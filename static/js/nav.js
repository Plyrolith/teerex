const nav = document.getElementById("nav");
const navBar = document.getElementById("nav-bar");
const navLogo = document.getElementById("nav-logo");
const navMenu = document.getElementById("nav-menu");
const navList = document.getElementById("nav-list");
const navButton = document.getElementById("nav-button");

function updateNavigation() {
  // Measure as desktop.
  nav.classList.remove("mobile");

  const HAMBURGER_WIDTH = 48; // 2rem icon + some breathing room

  const available =
    navBar.clientWidth - navLogo.offsetWidth - HAMBURGER_WIDTH - 16;
  const required = navList.scrollWidth;

  if (required > available) {
    nav.classList.add("mobile");
  } else {
    navMenu.classList.remove("activated");
    navButton.classList.remove("activated");
  }
}

function toggleMenu() {
  if (!nav.classList.contains("mobile")) return;

  navButton.classList.toggle("activated");
  navMenu.classList.toggle("activated");
}

navButton.addEventListener("click", toggleMenu);

window.addEventListener("load", updateNavigation);

const observer = new ResizeObserver(updateNavigation);
observer.observe(navBar);

if (document.fonts) {
  document.fonts.ready.then(updateNavigation);
}
