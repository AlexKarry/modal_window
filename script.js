"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnShowModal = document.querySelectorAll(".show-modal");
const btnCloseModal = document.querySelector(".close-modal");
console.log(btnShowModal);

function showModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  //   document.querySelector(".modal").style.display = "block";
  //   document.querySelector(".overlay").style.display = "block";
}

function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  //   document.querySelector(".modal").style.display = "none";
  //   document.querySelector(".overlay").style.display = "none";
}

for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener("click", showModal);
  //   document
  //     .querySelectorAll(".show-modal")
  //     [i].addEventListener("click", function () {
  //       modal.style.display = "block";
  //     });
  //   function () {
  //     document.querySelector(".modal").style.display = "block";
  //     document.querySelector(".overlay").style.display = "block";
  //   });
}

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  console.log(e.key);
  if (e.key === "Escape") {
    if (!modal.classList.contains("hidden")) {
      closeModal();
    }
  }
});
