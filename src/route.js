// router.js
function navigateTo(url) {
  history.pushState(null, null, url);
  handleLocation();
}

function handleLocation() {
  const path = window.location.pathname;
  const routes = {
      "/": "/index.html",
      "/publications": "/publications.html"
  };

  const route = routes[path] || routes["/"];
  fetch(route)
      .then((data) => data.text())
      .then((html) => {
          document.getElementById("main-content").innerHTML = html;
      });
}

window.onpopstate = handleLocation;
window.route = navigateTo;

handleLocation();
