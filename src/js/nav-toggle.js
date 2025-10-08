const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const overlay = document.getElementById("overlay");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("open");       // slide in menu
  overlay.classList.toggle("active"); // show blur overlay
  hamburger.classList.toggle("active"); // animate hamburger icon
});
