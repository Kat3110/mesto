
let button = document.getElementsByClassName("profile__edit");
button[0].addEventListener("click", openPopup, false);

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
        // меняем значение у поля ввода имени
        document.querySelector(".popup__input_text_name").value = changeName;
    }
    // проверка на введенный текст
    if (changeDescription == "") {
        // если текста нет, то ничего не происходит
    } else {
        // меняем описание
        description.innerHTML = changeDescription;
        // очищаем поля ввода описания
        document.querySelector(".popup__input_text_description").value = "";
        // меняем значение у поля ввода описания
        document.querySelector(".popup__input_text_description").value = changeDescription;
    }
    // закрываем попап
    closePopup()
}

// кнопка сохранить + listener
let savePopupButton = document.getElementsByClassName("popup__save");
savePopupButton[0].addEventListener("click", changePopup, false);

// сохраняем на enter, listener на все окно
window.addEventListener("keydown", function (event) {
	// keyCode 13 — это enter, проверяем нажали ли на энтер
	if (event.keyCode == 13) {
		//также проверяем открыт ли попап
		if (popup.style['visibility'] == 'visible'){
			// изменяем описание
			changePopup();
		}
	}
}, false);


// лайк
// определяем иконки лайк
var like = document.getElementsByClassName("elements__like");
for (var i = 0; i < like.length; i++) {
    // нажатие на лайк
    like[i].addEventListener('click', likeButton);
}
function likeButton() {
    // делаем проверку на наличие класса актив
    if (this.classList.contains('elements__active')) {
        // если класс есть, удаляем его
        this.classList.remove('elements__active');
    } else {
        // если класса нет, добавляем его
        this.classList.add('elements__active');
    }
}