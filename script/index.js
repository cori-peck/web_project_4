const cardsContainer = document.querySelector(".cards__list");
const popup = document.querySelector(".popup");
const popupBtn = document.querySelector(".profile__edit-button");
const form = document.querySelector(".form");
const formBtn = document.querySelector(".popup__close-btn");
let currentName = document.querySelector(".profile__name").textContent;
let currentJob = document.querySelector(".profile__occupation").textContent;

const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
];

function displayCards(item) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);

  cardElement.querySelector(".card__image").src = item.link;
  cardElement.querySelector(".card__image").alt = item.name;
  cardElement.querySelector(".card__title").textContent = item.name;

  cardsContainer.append(cardElement);
}

Array.prototype.forEach.call(initialCards, displayCards);

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
