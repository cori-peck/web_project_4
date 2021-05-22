const cardsContainer = document.querySelector(".cards__list");

const popup = document.querySelector(".popup");
const popupBtn = document.querySelector(".profile__edit-button");

const addPopup = document.querySelector(".add-popup");
const addBtn = document.querySelector(".profile__add-button");
const createForm = document.querySelector(".form--add");
const closeAdd = document.querySelector(".add-popup__close-btn");

const imgModal = document.querySelector(".modal");
const modalClose = document.querySelector(".modal__close-btn");

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

const cardTemplate = document.querySelector("#card-template").content;
const cardElement = cardTemplate.querySelector(".card").cloneNode(true);

function createCards(item) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);

  cardElement.querySelector(".card__image").src = item.link;
  cardElement.querySelector(".card__image").alt = item.name;
  cardElement.querySelector(".card__title").textContent = item.name;

  const deleteBtn = cardElement.querySelector(".card__delete-btn");
  deleteBtn.addEventListener("click", (event) =>
    event.target.parentElement.remove()
  );

  const likeBtn = cardElement.querySelector(".card__like-btn");
  likeBtn.addEventListener("click", () =>
    likeBtn.classList.toggle("card__like-btn_status_active")
  );

  const clickableImg = cardElement.querySelector(".card__image");
  clickableImg.addEventListener("click", () => {
    console.log("image clicked");
    imgModal.querySelector(".modal__image").src = item.link;
    imgModal.querySelector(".modal__image").alt = item.name;
    imgModal.querySelector(".modal__title").textContent = item.name;
    openImgModal();
  });

  cardsContainer.append(cardElement);
}

Array.prototype.forEach.call(initialCards, createCards);

function openPopup() {
  document.querySelector("#fullName").value = currentName;
  document.querySelector("#job").value = currentJob;

  popup.classList.add("popup_status_opened");
}

function openImgModal() {
  imgModal.classList.add("modal_status_open");
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

function closeImgModal() {
  imgModal.classList.remove("modal_status_open");
}

function openAddCard() {
  addPopup.classList.add("add-popup_status_opened");
}

function addPlace(event) {
  event.preventDefault();

  let newPlace = {
    name: document.querySelector("#title").value,
    link: document.querySelector("#img-link").value,
  };

  cardElement.querySelector(".card__image").src = newPlace.link;
  cardElement.querySelector(".card__image").alt = newPlace.name;
  cardElement.querySelector(".card__title").textContent = newPlace.name;

  const deleteBtn = cardElement.querySelector(".card__delete-btn");
  deleteBtn.addEventListener("click", (event) =>
    event.target.parentElement.remove()
  );

  const likeBtn = cardElement.querySelector(".card__like-btn");
  likeBtn.addEventListener("click", () =>
    likeBtn.classList.toggle("card__like-btn_status_active")
  );

  const clickableImg = cardElement.querySelector(".card__image");
  clickableImg.addEventListener("click", () => {
    imgModal.querySelector(".modal__image").src = newPlace.link;
    imgModal.querySelector(".modal__image").alt = newPlace.name;
    imgModal.querySelector(".modal__title").textContent = newPlace.name;
    openImgModal();
  });

  initialCards.unshift(newPlace);
  cardsContainer.prepend(cardElement);
  createForm.reset();
  closeAddCard();
}

function closeAddCard() {
  addPopup.classList.remove("add-popup_status_opened");
}

popupBtn.addEventListener("click", openPopup);
addBtn.addEventListener("click", openAddCard);
createForm.addEventListener("submit", addPlace);
closeAdd.addEventListener("click", closeAddCard);
form.addEventListener("submit", updateText);
formBtn.addEventListener("click", closePopup);
modalClose.addEventListener("click", closeImgModal);
