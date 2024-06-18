// animation.js

function initializeAnimations() {
  // Example GSAP animation for slider
  gsap.from("#hero .slideItem", {
    duration: 1,
    opacity: 0,
    y: 50,
    stagger: 0.3,
  });

  // Example GSAP animation for dots
  gsap.from(".dot-inner", {
    duration: 1,
    scale: 0,
    stagger: 0.2,
  });

  // Example GSAP animation for buttons
  gsap.from(".sliderBtn", {
    duration: 1,
    x: -100,
    opacity: 0,
    stagger: 0.2,
  });
}
