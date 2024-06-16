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

      if (path === "/") {
        // Re-initialize the slider when loading the homepage
        initializeSlider();
      }

      if (anchor) {
        const element = document.querySelector(anchor);
        if (element) {
          element.scrollIntoView();
        }
      }
    });
}

window.onpopstate = handleLocation;
window.route = navigateTo;

handleLocation();



