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
  const partnershipBtn = document.querySelectorAll(".partnershipBtn");
  const partnershipModal = document.querySelector(".partnership");
  const bgModal = document.querySelector(".partnership .bgModal");

  partnershipBtn.forEach((btn) =>
    btn.addEventListener("click", () => {
      console.log("YOO");
      partnershipModal.classList.toggle("hidden");
    })
  );
  bgModal.addEventListener("click", () => {
    partnershipModal.classList.add("hidden");
  });

  const sponsorBtn = document.querySelector(".sponsorBtn");
  const sponsorModal = document.querySelector("#sponsorModal");
  const bgSponsor = document.querySelector("#sponsorModal .bgModal");

  sponsorBtn.addEventListener("click", () => {
    sponsorModal.classList.toggle("hidden");
  });
  bgSponsor.addEventListener("click", () => {
    sponsorModal.classList.add("hidden");
  });

  function submitSponsorForm(e) {
    e.preventDefault();
    const name = document.querySelector("#sponsorModal .name").value;
    const surname = document.querySelector("#sponsorModal .surname").value;
    const email = document.querySelector("#sponsorModal .email").value;
    const number = document.querySelector("#sponsorModal .number").value;
    const company = document.querySelector("#sponsorModal .company").value;

    const data = {
      name,
      surname,
      email,
      number,
      company,
    };

    console.log(data);
    fetch("https://email-smpt-server-cjd.vercel.app/sponsor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.text())
      .then((result) => {
        alert(`Email de demande de partenariat envoyé avec succès !`);
        sponsorModal.classList.toggle("hidden");
      })
      .catch((error) => {
        alert("Erreur lors de l'envoie")
        console.error("Erreur:", error);
      });
  }
  const sponsorForm = document.querySelector("#sponsorForm");
  sponsorForm.addEventListener("submit", submitSponsorForm);

  function submitPartnershipForm(e) {
    e.preventDefault();
    const name = document.querySelector("#partnershipForm .name").value;
    const surname = document.querySelector("#partnershipForm .surname").value;
    const dateNais = document.querySelector("#partnershipForm .dateNais").value;
    const email = document.querySelector("#partnershipForm .email").value;
    const number = document.querySelector("#partnershipForm .number").value;
    const company = document.querySelector("#partnershipForm .company").value;
    const whyUs = document.querySelector("#partnershipForm .whyUs").value;

    const data = {
      name,
      surname,
      dateNais,
      email,
      number,
      company,
      whyUs,
    };

    console.log(data);
    fetch("https://email-smpt-server-cjd.vercel.app/partnership", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.text())
      .then((result) => {
        alert("Email de demande de partenariat envoyé avec succès !");
        partnershipModal.classList.toggle("hidden");
      })
      .catch((error) => {
        alert("Erreur lors de l'envoie")
        console.error("Erreur:", error);
      });
  }
  const partnershipForm = document.querySelector("#partnershipForm");
  partnershipForm.addEventListener("submit", submitPartnershipForm);
}

function initializeAnimations() {
  const heroTL = gsap.timeline({ paused: true, delay: 0.5 });
  heroTL
    .to("#hero", { y: 0, opacity: 1 })
    .to("nav.nav li", { y: 0, opacity: 1, stagger: 0.1 }, "-=0.5")
    .to("#hero .dot", { scale: 1, stagger: 0.1 }, "-=0.25")
    .to("#hero .sliderBtn:nth-child(1)", {
      x: -10,
      duration: 0.2,
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

  allTextContainer.forEach((text) => {
    gsap.to(text, {
      duration: 1.5,
      opacity: 1,
      y: 0,
      ease: "power4.out",
      scrollTrigger: {
        trigger: text,
        start: "top 80%",
        toggleActions: "play none none reset",
      },
    });
  });

  allImgContainer.forEach((img) => {
    gsap.to(img, {
      duration: 1.5,
      scale: 1,
      opacity: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: img,
        start: "top 60%",
        toggleActions: "play none none reset",
      },
    });
  });

  const bureau = document.querySelector("#bureau");
  const cardContainer = document.querySelectorAll("#bureau .cardContainer");

  gsap.to(cardContainer, {
    y: 0,
    duration: 1.5,
    opacity: 1,
    ease: "power4.out",
    scrollTrigger: {
      trigger: bureau,
      start: "top 30%",
      toggleActions: "play none none reset",
    },
  });

  const sponsors = document.querySelectorAll("#sponsors .sponsor");
  sponsors.forEach((sponsor) =>
    gsap.to(sponsor, {
      duration: 1,
      scale: 1,
      opacity: 1,
      scrollTrigger: {
        trigger: "#sponsors",
        start: "top 40%",
        toggleActions: "play none none reset",
      },
    })
  );

  const footer = document.querySelector("footer");
  gsap.to(footer, {
    y: 0,
    duration: 1,
    scrollTrigger: {
      trigger: footer,
      start: "top 30%",
      toggleActions: "play none none reset",
    },
  });
}

// window.addEventListener("DOMContentLoaded", () => {
//   initializeScript();
//   initializeAnimations();
// });
