// показываем попап
function tooglePopup() {
    let popup = document.getElementsByClassName("popup");
    popup[0].style.visibility = "visible";
}

// кнопка + listener
let button = document.getElementsByClassName("profile__edit");
button[0].addEventListener("click", tooglePopup, false);

let popup = document.getElementsByClassName("popup")[0];

// показываем попап
function openPopup() {
    popup.style.visibility = "visible";
}

// скрываем попап
function closePopup() {
    popup.style.visibility = "hidden";
}

// кнопка открытия + listener
let openPopupButton = document.getElementsByClassName("profile__edit");
openPopupButton[0].addEventListener("click", openPopup, false);
// кнопка закрытия + listener
let closePopupButton = document.getElementsByClassName("popup__close");
closePopupButton[0].addEventListener("click", closePopup, false);

// // сохранение имени и описания
function change() {
    let changeName = document.querySelector(".popup__input_text_name").value
    let changeDescription = document.querySelector(".popup__input_text_description").value
    let name = document.querySelector(".profile__name");
    let description = document.querySelector(".profile__description");
    name.innerHTML = changeName;
    description.innerHTML = changeDescription;
}