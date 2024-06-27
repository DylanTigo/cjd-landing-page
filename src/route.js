//Loader du debut
const loader = document.querySelector(".loader");
const loaderTL = gsap.timeline({
  paused: true,
});
loaderTL
  .to(".loader img", {
    delay: 1,
    keyframes: [
      { scale: 1.1, duration: 0.1 },
      { scale: 0.9, duration: 0.3 },
    ],
  })
  .to(".loader", { autoAlpha: 0, duration: 0.5 }, "-=0.5");

window.addEventListener("DOMContentLoaded", () => {
  loaderTL.play();
});


//Toggle du menu de navigation
const menu = document.querySelector("#mobile-menu");
const bg = document.querySelector("header .bgBlack");
const li = document.querySelectorAll("#mobile-menu li");
const toggleMenu = () => {
  menu.classList.toggle("hidden");
  bg.classList.toggle("hidden");
};

document.getElementById("menu-toggle").addEventListener("click", toggleMenu);
bg.addEventListener("click", toggleMenu);
li.forEach((element) => element.addEventListener("click", toggleMenu));

//Sticky header on scroll
const body = document.body
let lastScroll = 0

window.addEventListener("scroll", () => {
  let currentScroll = window.scrollY

  if(currentScroll <= 0) {
    body.classList.remove("scroll-up")
  }

  if(currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
    body.classList.remove("scroll-up")
    body.classList.add("scroll-down")
  }

  if(currentScroll < lastScroll && body.classList.contains("scroll-down")) {
    body.classList.remove("scroll-down")
    body.classList.add("scroll-up")
  }

  lastScroll = currentScroll
})
// router.js

function navigateTo(url) {
  history.pushState(null, null, url);
  handleLocation();
}

function handleLocation() {
  const path = window.location.pathname;
  let anchor = window.location.hash;

  const routes = {
    "/": "/src/main.html",
    "/publications": "/src/publications.html",
  };

  const route = routes[path] || routes["/"];
  fetch(route)
    .then((data) => data.text())
    .then((html) => {
      document.getElementById("main-content").innerHTML = html;

      if (anchor) {
        const element = document.querySelector(anchor);
        if (element) {
          element.scrollIntoView();
        }
      }
      if (path === "/") {
        initializeScript();
        initializeAnimations();
      }
    });
}

window.onpopstate = handleLocation;
window.route = navigateTo;

handleLocation();
