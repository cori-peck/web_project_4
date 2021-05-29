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

const cardsContainer = document.querySelector(".cards__list");
const tabTitle = document.querySelector(".card__title");
const addTitle = document.querySelector("#title");
const addImg = document.querySelector("#img-link");
const addPopup = document.querySelector(".popup_func_add");
const addBtn = document.querySelector(".profile__add-button");
const createForm = document.querySelector(".form_type_add");
const closeAdd = document.querySelector(".popup__close-btn_func_add");

function createCard(item) {
  const cardTemplate = document
    .querySelector("#card-template")
    .content.querySelector(".card");
  const cardElement = cardTemplate.cloneNode(true);
  const clickableImg = document.querySelector(".card__image");

  cardElement.querySelector(".card__image").src = item.link;
  cardElement.querySelector(".card__image").alt = item.name;
  cardElement.querySelector(".card__title").textContent = item.name;

  return cardElement;
}

function renderCard(card, cardsContainer) {
  cardsContainer.append(createCard(card));
}

//show initial cards from array
initialCards.forEach((card) => {
  renderCard(card, cardsContainer);
});

function openPopup(popup) {
  popup.classList.add("popup_status_opened");
  console.log("btn clicked");
}

function closePopup(popup) {
  popup.classList.remove("popup_status_opened");
}

//separate adding a new place for new card
function addPlace(event) {
  event.preventDefault();

  const newPlace = { name: "", link: "" };
  newPlace.name = addTitle.value;
  newPlace.link = addImg.value;

  cardsContainer.prepend(addPlace);
}

addBtn.addEventListener("click", () => openPopup(addPopup));
closeAdd.addEventListener("click", () => closePopup(addPopup));
