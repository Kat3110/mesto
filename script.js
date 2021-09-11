// показываем попап
function tooglePopup() {
    let popup = document.getElementsByClassName("popup__box");
    let background = document.getElementsByClassName("popup__background");
    popup[0].style.visibility = "visible";
    background[0].style.visibility = "visible";
}

// кнопка + listener
let button = document.getElementsByClassName("profile__edit");
button[0].addEventListener("click", tooglePopup, false);

let popup = document.getElementsByClassName("popup__box")[0];
let background = document.getElementsByClassName("popup__background")[0];

// показываем попап
function openPopup() {
    popup.style.visibility = "visible";
    background.style.visibility = "visible";
}

// скрываем попап
function closePopup() {
    popup.style.visibility = "hidden";
    background.style.visibility = "hidden";
}

// кнопка открытия + listener
let openPopupButton = document.getElementsByClassName("profile__edit");
openPopupButton[0].addEventListener("click", openPopup, false);
// кнопка закрытия + listener
let closePopupButton = document.getElementsByClassName("popup__close");
closePopupButton[0].addEventListener("click", closePopup, false);