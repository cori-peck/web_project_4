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

const currentName = document.querySelector(".profile__name").textContent;
const currentJob = document.querySelector(".profile__occupation").textContent;
const newName = document.querySelector("#fullName");
const newJob = document.querySelector("#job");

const cardTemplate = document.querySelector("#card-template").content;
const cardsContainer = document.querySelector(".cards__list");

const editPopup = document.querySelector(".popup_func_edit");
const editForm = document.querySelector(".form_type_edit");
const editBtn = document.querySelector(".profile__edit-button");
const closeEdit = document.querySelector(".popup__close-btn_func_edit");

const addBtn = document.querySelector(".profile__add-button");
const addTitle = document.querySelector("#title");
const addImg = document.querySelector("#img-link");
const addPopup = document.querySelector(".popup_func_add");
const createForm = document.querySelector(".form_type_add");
const closeAdd = document.querySelector(".popup__close-btn_func_add");

const imgModal = document.querySelector(".popup_func_img-modal");
const closeModal = document.querySelector(".popup__close-btn_func_img-modal");

function createCard(item) {
  const cardTemplate = document
    .querySelector("#card-template")
    .content.querySelector(".card");
  const cardElement = cardTemplate.cloneNode(true);

  cardElement.querySelector(".card__image").src = item.link;
  cardElement.querySelector(".card__image").alt = item.name;
  cardElement.querySelector(".card__title").textContent = item.name;

  const deleteBtn = cardElement.querySelector(".card__delete-btn");
  deleteBtn.addEventListener("click", () => cardElement.remove());

  const likeBtn = cardElement.querySelector(".card__like-btn");
  likeBtn.addEventListener("click", () =>
    likeBtn.classList.toggle("card__like-btn_status_active")
  );

  const clickableImg = cardElement.querySelector(".card__image");
  clickableImg.addEventListener("click", () => {
    console.log("image clicked");
    imgModal.querySelector(".popup__image").src = item.link;
    imgModal.querySelector(".popup__image").alt = item.name;
    imgModal.querySelector(".popup__caption").textContent = item.name;
    openPopup(imgModal);
  });

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

  initialCards.unshift(newPlace);
  cardsContainer.prepend(createCard(newPlace));
  console.log("create submitted", initialCards);
  createForm.reset();
  closePopup(addPopup);
}

newName.value = currentName;
newJob.value = currentJob;

function updateText(event) {
  event.preventDefault();

  document.querySelector(".profile__name").textContent = newName.value;
  document.querySelector(".profile__occupation").textContent = newJob.value;
  closePopup(editPopup);
}

editBtn.addEventListener("click", () => openPopup(editPopup));
editPopup.addEventListener("submit", updateText);
closeEdit.addEventListener("click", () => closePopup(editPopup));
addBtn.addEventListener("click", () => openPopup(addPopup));
closeAdd.addEventListener("click", () => closePopup(addPopup));
createForm.addEventListener("submit", addPlace);
closeModal.addEventListener("click", () => closePopup(imgModal));
