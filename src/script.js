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
    sponsorModal.classList.toggle("hidden");
  });
  bgSponsor.addEventListener("click", () => {
    console.log("Click Bg");
    sponsorModal.classList.add("hidden");
  });

  const sponsorForm = document.querySelector("#sponsorForm")
  function sendEmail() {
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const email = document.getElementById('email').value;
    const number = document.getElementById('number').value;
    const company = document.getElementById('company').value;

    const subject = `Devenir Sponsor par ${name} ${surname}`;
    const body = `Bonjour CJD,%0D%0A%0D%0ANous avons reçu un formulaire rempli avec les informations suivantes :%0D%0A%0D%0ANom : ${name}%0D%0APrénom : ${surname}%0D%0AEmail : ${email}%0D%0ATéléphone : ${number}%0D%0ANom de l'entreprise : ${company}%0D%0A%0D%0ACes informations ont été soumises par ${name} ${surname}.%0D%0A%0D%0ASi vous avez des questions ou avez besoin de plus d'informations, vous pouvez contacter l'émetteur à l'adresse email ${email} ou au numéro de téléphone ${number}.%0D%0A%0D%0ACordialement,%0D%0A[Votre Nom]`;

    window.location.href = `mailto:contact@cjd-asso.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
  sponsorForm.addEventListener("submit", sendEmail)

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
    })
  }
  );

  allImgContainer.forEach((img) =>{
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
    })
  }
  );

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
        start: "top 30%",
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
