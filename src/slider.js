document.addEventListener("DOMContentLoaded", function () {
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

  //slider2
  const prevBtn = document.querySelector(".prevBtn");
  const nextBtn = document.querySelector(".nextBtn");
  const sliderTrack = document.querySelector(".slider-track");
  const card= document.querySelector(".profile-card");
  const sliderWidth = card.offsetWidth + 40;
  let currentTranslate = 0;

  prevBtn.addEventListener("click", function () {
    if (currentTranslate !== 0) {
      currentTranslate += sliderWidth;
      sliderTrack.style.transform = `translateX(${currentTranslate}px)`;
    }
    updateButtons();
  });

  nextBtn.addEventListener("click", function () {
    if (currentTranslate > -(sliderTrack.scrollWidth - sliderWidth)) {
      currentTranslate -= sliderWidth;
      sliderTrack.style.transform = `translateX(${currentTranslate}px)`;
    }
    updateButtons();
  });

  function updateButtons() {
    prevBtn.disabled = currentTranslate === 0;
    nextBtn.disabled = currentTranslate <= -(sliderTrack.offsetWidth);
  }
});

document.addEventListener('DOMContentLoaded', (event) => {
  let slideIndex = 0;
  const slides = document.querySelectorAll('#sponsors .slide');
  
  const showSlides = () => {
    slides.forEach((slide, index) => {
      slide.style.display = 'none';
    });
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = 'block';
    setTimeout(showSlides, 3000); // Change image every 5 seconds
  }

  showSlides();
});
