const popup = document.querySelector(".popup");
const popupBtn = document.querySelector(".profile__edit-button");
const form = document.querySelector(".form");
const formBtn = document.querySelector(".popup__close-btn");
let currentName = document.querySelector(".profile__name").textContent;
let currentJob = document.querySelector(".profile__occupation").textContent;

function openPopup() {
  document.querySelector("#fullName").value = currentName;
  document.querySelector("#job").value = currentJob;

  popup.classList.add("popup_status_opened");
}

function updateText(event) {
  event.preventDefault();
  let newName = document.querySelector("#fullName").value;
  let newJob = document.querySelector("#job").value;

  document.querySelector(".profile__name").textContent = newName;
  document.querySelector(".profile__occupation").textContent = newJob;
  closePopup();
}

function closePopup() {
  popup.classList.remove("popup_status_opened");
}

popupBtn.addEventListener("click", openPopup);
form.addEventListener("submit", updateText);
formBtn.addEventListener("click", closePopup);
