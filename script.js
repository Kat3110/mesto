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


// сохранение имени и описания
function changePopup() {
    // определяем значение полей ввода имени и описания
    let changeName = document.querySelector(".popup__input_text_name").value
    let changeDescription = document.querySelector(".popup__input_text_description").value

    // определяем поля куда вводим новые данные
    let name = document.querySelector(".profile__name");
    let description = document.querySelector(".profile__description");


    // проверка на введенный текст
    if (changeName == "") {
        // если текста нет, то ничего не происходит
    } else {
        // меняем имя
        name.innerHTML = changeName;

        // очищаем поля ввода имени
        document.querySelector(".popup__input_text_name").value = "";

        // меняем плейсхолдер у поля ввода имени
        document.querySelector(".popup__input_text_name").placeholder = changeName;
    }

    // проверка на введенный текст
    if (changeDescription == "") {
        // если текста нет, то ничего не происходит
    } else {
        // меняем описание
        description.innerHTML = changeDescription;

        // очищаем поля ввода описания
        document.querySelector(".popup__input_text_description").value = "";

        // меняем плейсхолдер у поля ввода описания
        document.querySelector(".popup__input_text_description").placeholder = changeDescription;
    }

    // закрываем попап
    closePopup()
}

// кнопка сохранить + listener
let savePopupButton = document.getElementsByClassName("popup__save");
savePopupButton[0].addEventListener("click", changePopup, false);


// лайк
function clickLike() {
    // определяем иконку лайк
    let like = document.querySelector(".elements__like");

    // делаем проверку на наличие класса актив
    if (like.classList.contains("elements__active") === true) {
        // если класс есть, удаляем его
        like.classList.remove("elements__active");
    } else {
        // если класса нет, добавляем его
        like.classList.add("elements__active");
    }

}

// нажатие на клик
let likeButton = document.getElementsByClassName("elements__like");
likeButton[0].addEventListener("click", clickLike, false);