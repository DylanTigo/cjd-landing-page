const joinUsBtn = document.querySelector(".joinUsBtn");
const joinUsModal = document.querySelector(".joinUs");
const bgModal = document.querySelector(".bgModal");

joinUsBtn.addEventListener("click", () => {
  joinUsModal.classList.toggle("hidden");
});
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
  sponsorModal.classList.add("hidden");
});

const menu = document.querySelector('#mobile-menu');
const bg = document.querySelector("header .bgBlack")
const li = document.querySelectorAll("#mobile-menu li")
const toggleMenu = () => {
  console.log("Hello");
  menu.classList.toggle("hidden")
  bg.classList.toggle('hidden')
}

document.getElementById('menu-toggle').addEventListener('click', toggleMenu);
bg.addEventListener("click", toggleMenu)
li.forEach(element => element.addEventListener('click', toggleMenu))