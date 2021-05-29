const cardsContainer = document.querySelector(".cards__list");

const editPopup = document.querySelector(".popup_func_edit");
const editBtn = document.querySelector(".profile__edit-button");
const editForm = document.querySelector(".form_type_edit");
const closeEdit = document.querySelector(".popup__close-btn_func_edit");

const addPopup = document.querySelector(".popup_func_add");
const addBtn = document.querySelector(".profile__add-button");
const createForm = document.querySelector(".form_type_add");
const closeAdd = document.querySelector(".popup__close-btn_func_add");

const imgModal = document.querySelector(".modal");
const modalUrl = imgModal.querySelector(".modal__image");
const modalTitle = imgModal.querySelector(".modal__title");
const modalClose = document.querySelector(".modal__close-btn");

const currentName = document.querySelector(".profile__name").textContent;
const currentJob = document.querySelector(".profile__occupation").textContent;

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

const cardTemplate = document.querySelector("#card-template");
const cardElement = cardTemplate.querySelector(".card");
const addTitle = document.querySelector("#title");

function createCards(item) {
  cardTemplate.content;
  cardElement.cloneNode(true);
  const clickableImg = cardElement.querySelector(".card__image");

  clickableImg.src = item.link;
  clickableImg.alt = item.name;
  cardElement.querySelector(".card__title").textContent = item.name;

  const deleteBtn = cardElement.querySelector(".card__delete-btn");
  deleteBtn.addEventListener("click", () => cardElement.remove());

  const likeBtn = cardElement.querySelector(".card__like-btn");
  likeBtn.addEventListener("click", () =>
    likeBtn.classList.toggle("card__like-btn_status_active")
  );

  clickableImg.addEventListener("click", () => {
    console.log("image clicked");
    modalUrl.src = item.link;
    modalUrl.alt = item.name;
    modalTitle.textContent = item.name;
    openImgModal();
  });

  const cardElement = getCard(item);
  cardsContainer.append(cardElement);
}

Array.prototype.forEach.call(initialCards, createCards);

function openPopup(popup) {
  popup.classList.add("popup_status_opened");
}

function closePopup(popup) {
  popup.classList.remove("popup_status_opened");
}

function openEditPopup() {
  document.querySelector("#fullName").value = currentName;
  document.querySelector("#job").value = currentJob;

  openPopup(editPopup);
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

function closeEditPopup() {
  closePopup(editPopup);
}

function closeImgModal() {
  imgModal.classList.remove("modal_status_open");
}

function openAddCard() {
  openPopup(addPopup);
}

function addPlace(event) {
  event.preventDefault();

  const newPlace = {
    name: addTitle.value,
    link: .value,
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
  closePopup(addPopup);
}

editBtn.addEventListener("click", openEditPopup);
addBtn.addEventListener("click", openAddCard);
createForm.addEventListener("submit", addPlace);
closeAdd.addEventListener("click", closeAddCard);
editForm.addEventListener("submit", updateText);
modalClose.addEventListener("click", closeImgModal);
closeEdit.addEventListener("click", closeEditPopup);
