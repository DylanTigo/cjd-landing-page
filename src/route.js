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

    });
}

window.onpopstate = handleLocation;
window.route = navigateTo;

handleLocation();


document.addEventListener("DOMContentLoaded", () => {
  let currentSlideIndex = 0;
  const slides = document.querySelectorAll("#hero .slideItem");
  const dots = document.querySelectorAll(".dot-inner");
  const totalSlides = slides.length;
  let slideInterval;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
      dots[i].classList.toggle("active", i === index);
    });
  }

  function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
    showSlide(currentSlideIndex);
  }

  function prevSlide() {
    currentSlideIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentSlideIndex);
  }

  function startSlideShow() {
    slideInterval = setInterval(nextSlide, 5000);
  }

  function stopSlideShow() {
    clearInterval(slideInterval);
  }

  document
    .querySelector(".sliderBtn:nth-child(1)")
    .addEventListener("click", () => {
      prevSlide();
      stopSlideShow();
      startSlideShow();
    });

  document
    .querySelector(".sliderBtn:nth-child(2)")
    .addEventListener("click", () => {
      nextSlide();
      stopSlideShow();
      startSlideShow();
    });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentSlideIndex = index;
      showSlide(currentSlideIndex);
      stopSlideShow();
      startSlideShow();
    });
  });

  showSlide(currentSlideIndex);
  startSlideShow();
});

