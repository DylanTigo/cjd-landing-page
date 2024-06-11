const sections = document.querySelectorAll("section")

gsap.from("section", {
  duration: 1,
  opacity: 0,
  y: 200,
  ease: "power4.out",
  scrollTrigger: {
    trigger: sections,
    start: "top 50%",
    toggleActions: "play none none reset",
  },
})