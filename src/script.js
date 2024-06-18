function initializeScript() {
  //Slider de la home page
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

  const btn1 = document.querySelector(".sliderBtn:nth-child(1)");
  btn1.addEventListener("click", () => {
    prevSlide();
    stopSlideShow();
    startSlideShow();
  });

  const btn2 = document.querySelector(".sliderBtn:nth-child(2)");
  btn2.addEventListener("click", () => {
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

  // Modals
  const joinUsBtns = document.querySelectorAll(".joinUsBtn");
  const joinUsModal = document.querySelector(".joinUs");
  const bgModal = document.querySelector(".bgModal");

  joinUsBtns.forEach((btn) =>
    btn.addEventListener("click", () => {
      joinUsModal.classList.toggle("hidden");
    })
  );
  bgModal.addEventListener("click", () => {
    joinUsModal.classList.add("hidden");
  });

  const sponsorBtn = document.querySelector(".sponsorBtn");
  const sponsorModal = document.querySelector(".sponsor");
  const bgSponsor = document.querySelector(".sponsor .bgModal");

  sponsorBtn.addEventListener("click", () => {
    console.log("Click");
    sponsorModal.classList.toggle("hidden");
  });
  bgSponsor.addEventListener("click", () => {
    console.log("Click Bg");
    sponsorModal.classList.add("hidden");
  });
}

function initializeAnimations() {
  const heroTL = gsap.timeline({ paused: true, delay: 0.5 });
  heroTL
    .to("#hero", { y: 0, autoAlpha: 1 })
    .to("nav.nav li", { y: 0, autoAlpha: 1, stagger: 0.1 }, "-=0.5")
    .to("#hero .dot", { scale: 1, stagger: 0.1 }, "-=0.25")
    .to("#hero .sliderBtn:nth-child(1)", {
      x: -10,
      duration: 0.1,
      repeat: 1,
      yoyo: true,
    })
    .to(
      "#hero .sliderBtn:nth-child(2)",
      { x: 10, duration: 0.1, repeat: 1, yoyo: true },
      ">"
    );

  heroTL.play();

  const allTextContainer = document.querySelectorAll(".textContainer");
  const allImgContainer = document.querySelectorAll(".imgContainer");

  allTextContainer.forEach((text) =>
    gsap.to(text, {
      autoAlpha: 1,
      y: 0,
      ease: "power4.out",
      scrollTrigger: {
        trigger: text,
        start: "top 90%",
        toggleActions: "play none none reset",
      },
    })
  );
  allImgContainer.forEach((img) =>
    gsap.to(img, {
      scale: 1,
      autoAlpha: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: img,
        start: "top 90%",
        toggleActions: "play none none reset",
      },
    })
  );

  const bureau = document.querySelector("#bureau");
  const allProfileCard = document.querySelectorAll("#bureau .profile-card");

  gsap.to(allProfileCard, {
    duration: 0.1,
    y: 0,
    autoAlpha: 1,
    ease: "power2.out",
    stagger: {
      each: 0.05,
    },
    scrollTrigger: {
      trigger: bureau,
      start: "top 50%",
      toggleActions: "play none none reset",
    },
  });

  const sponsors = document.querySelectorAll("#sponsors ul li");
  sponsors.forEach((sponsor) =>
    gsap.to(sponsor, {
      y: 0,
      autoAlpha: 1,
      stagger: .1,
      scrollTrigger: {
        trigger: "#sponsors",
        markers: "true",
        start: "top center",
        toggleActions: "play none none reset",
      },
    })
  );
}

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    initializeScript();
    initializeAnimations();
    console.log("hello");
  }, 2000);
});
