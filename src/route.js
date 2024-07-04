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

      if (currentLanguage === "en") {
        console.log(currentLanguage);
        traductor()
      }

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
