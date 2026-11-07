// Bar Incontrà — piccoli comportamenti della pagina

// Orari: tenere allineati con la tabella in index.html (0 = domenica)
const HOURS = {
  0: "7:30 – 13:00",
  1: "6:30 – 20:00",
  2: "6:30 – 20:00",
  3: "6:30 – 20:00",
  4: "6:30 – 20:00",
  5: "6:30 – 23:00",
  6: "7:00 – 23:00",
};

const today = new Date().getDay();
const todayEl = document.getElementById("today-hours");
if (todayEl) todayEl.textContent = HOURS[today] || "Chiuso";
document.querySelector(`.hours tr[data-day="${today}"]`)?.classList.add("is-today");

const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Barra di navigazione: diventa piena dopo l'hero
const nav = document.querySelector(".nav");
const hero = document.querySelector(".hero");
const setNav = () => {
  const limit = hero ? hero.offsetHeight - 80 : 40;
  nav.classList.toggle("is-solid", window.scrollY > limit || links.classList.contains("is-open"));
};

// Menu mobile
const toggle = document.querySelector(".nav__toggle");
const links = document.getElementById("menu-nav");
toggle.addEventListener("click", () => {
  const open = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-expanded", String(!open));
  links.classList.toggle("is-open", !open);
  setNav();
});
links.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    toggle.setAttribute("aria-expanded", "false");
    links.classList.remove("is-open");
    setNav();
  })
);

window.addEventListener("scroll", setNav, { passive: true });
setNav();

// Se una foto non carica, resta il fondo scuro invece dell'icona rotta
const hideBroken = (img) => (img.style.visibility = "hidden");
document.querySelectorAll("img").forEach((img) => {
  if (img.complete && img.naturalWidth === 0) hideBroken(img);
  else img.addEventListener("error", () => hideBroken(img));
});
