"use strict";

const modal = document.querySelector(".modal");
const hidden = document.querySelector(".hidden");
const overlay = document.querySelector(".overlay");
const btnOpensModal = document.querySelectorAll(".show-modal");
const btnCloseModal = document.querySelector(".close-modal");
console.log(btnOpensModal);

const closeModel = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

const openModel = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

for (let i = 0; i < btnOpensModal.length; i++) {
  btnOpensModal[i].addEventListener("click", openModel);
}
btnCloseModal.addEventListener("click", closeModel);
overlay.addEventListener("click", closeModel);
