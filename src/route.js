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

window.addEventListener("load", () => {
  loaderTL.play();
});

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
        initializeScript()
        initializeAnimations()
      }
    })
}

window.onpopstate = handleLocation;
window.route = navigateTo;

handleLocation();
