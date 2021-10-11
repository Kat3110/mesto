// определяем попап
let popup = document.getElementsByClassName("popup")[0];
let popupFirst = document.getElementsByClassName("popup__first")[0];
let popupSecond = document.getElementsByClassName("popup__second")[0];
let popupThird = document.getElementsByClassName("popup__third")[0];

// показываем попап
function openPopupFirst() {
    popup.classList.add('popup_open');
    popupFirst.classList.add('popup_open');
}

// показываем попап
function openPopupSecond() {
    popup.classList.add('popup_open');
    popupSecond.classList.add('popup_open');
}

// скрываем попап
function closePopup() {
    popup.classList.remove('popup_open');
    popupFirst.classList.remove('popup_open');
    popupSecond.classList.remove('popup_open');
    popupThird.classList.remove('popup_open');
}

// кнопка открытия + listener
let openPopupButton = document.getElementsByClassName("profile__edit");
openPopupButton[0].addEventListener("click", openPopupFirst, false);

// кнопка закрытия + listener
let closePopupButton = document.getElementsByClassName("popup__close");
for (var i = 0; i < closePopupButton.length; i++) {
    closePopupButton[i].addEventListener("click", closePopup, false);
}

// кнопка открытия адд + listener
let openPopupSecondButton = document.getElementsByClassName("profile__add");
openPopupSecondButton[0].addEventListener("click", openPopupSecond, false);

// сохранение имени и описания
function changePopup(ev) {
    ev.preventDefault()
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
let savePopupButton = document.getElementsByClassName("popup__save_profile");
savePopupButton[0].addEventListener("click", changePopup, false);

// добавление картинки
function addNewItem(ev) {
    ev.preventDefault()
    // определяем название кнопки
    let addName = document.querySelector(".popup__input_add_name").value
    // определяем иконку
    let addImg = document.querySelector(".popup__input_add_img").value
    // вызов функии с новыми данными
    addItemToElements(addName, addImg);

    // обнуляем значения чтобы работали плейсхолдеры
    document.querySelector(".popup__input_add_name").value = "";
    document.querySelector(".popup__input_add_img").value = "";

    // закрываем попап
    closePopup()
}

// кнопка добавить + listener
let addPopupButton = document.getElementsByClassName("popup__save_picture");
addPopupButton[0].addEventListener("click", addNewItem, false);

// массив карточек
const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];
// функция добавления нового элемента
function addItemToElements(name, link) {
    // создаем див и добавляем ему класс
    let divFirst = document.createElement('div');
    divFirst.classList.add('elements__item');

    // создаем имейж и добавляем ему класс
    let img = document.createElement('img');
    img.classList.add('elements__image');
    img.setAttribute('src', link);

    // создаем див внутри первого див и добавляем ему класс
    let divSecond = document.createElement('div');
    divSecond.classList.add('elements__info');

    // создаем п внутри второго див и добавляем ему класс
    let p = document.createElement('p');
    p.classList.add('elements__description');
    p.innerText = name;

    // создаем баттон внутри второго див и добавляем ему класс
    let button = document.createElement('button');
    button.classList.add('elements__like');
    button.setAttribute('type', 'button');

    // создаем баттон корзину внутри второго див и добавляем ему класс
    let basket = document.createElement('button');
    basket.classList.add('button__basket');
    basket.setAttribute('type', 'button');

    // собираем новый элемент
    divSecond.appendChild(p);
    divSecond.appendChild(button);
    divFirst.appendChild(img);
    divFirst.appendChild(basket);
    divFirst.appendChild(divSecond);

    // вставляем его в элементс
    let elements = document.querySelector('.elements');
    elements.prepend(divFirst);
}
// перебор массива и вызов
initialCards.forEach(element => addItemToElements(element.name, element.link));


// определяем иконки лайк
let like = document.getElementsByClassName("elements__like");
for (var i = 0; i < like.length; i++) {
    // нажатие на лайк
    like[i].addEventListener("click", function likeButton() {

        // делаем проверку на наличие класса актив
        if (this.classList.contains('elements__like_active')) {
            // если класс есть, удаляем его
            this.classList.remove('elements__like_active');
        } else {
            // если класса нет, добавляем его
            this.classList.add('elements__like_active');
        }
    }, false);
}

// определяем кнопку корзина
let basket = document.getElementsByClassName("button__basket");
for (var i = 0; i < basket.length; i++) {
    // нажатие на корзину
    basket[i].addEventListener("click", function deleteItem() {

        // находим нужный элемент и удаляем
        this.parentElement.remove();
    }, false);
}

function openPopupThird() {
    popup.classList.add('popup_open');
    popupThird.classList.add('popup_open');

    let image = document.getElementsByClassName("popup__image")[0];
    // let name = document.getElementsByClassName("popup__name")[0];

    // image.setAttribute('src', img)

    console.log('2');
}

let buttonOpenThirdPopap = document.getElementsByClassName("elements__image");
for (var i = 0; i < buttonOpenThirdPopap.length; i++) {
    buttonOpenThirdPopap[i].addEventListener("click", function openPopupThird(img) {
        popup.classList.add('popup_open');
        popupThird.classList.add('popup_open');
    
        let image = document.getElementsByClassName("popup__image")[0];
        // let name = document.getElementsByClassName("popup__name")[0];
    
        image.setAttribute('src', img)
    
        console.log('2');
    }, false);
    openPopupThird(buttonOpenThirdPopap[i].getAttribute('src'))
}