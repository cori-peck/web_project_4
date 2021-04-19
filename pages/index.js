const popup = document.querySelector(".popup");
let currentName = document.querySelector(".profile__name").innerHTML;
let currentJob = document.querySelector(".profile__occupation").innerHTML;

function openPopup() {
  document.querySelector("#fullName").value = currentName;
  document.querySelector("#job").value = currentJob;

  popup.classList.add("popup_status_opened");
}

function updateText() {
  let newName = document.querySelector("#fullName").value;
  let newJob = document.querySelector("#job").value;

  document.querySelector(".profile__name").innerHTML = newName;
  document.querySelector(".profile__occupation").innerHTML = newJob;
  event.preventDefault();
  closePopup();
}

function closePopup() {
  popup.classList.remove("popup_status_opened");
}
