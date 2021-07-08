/* Выполненное упражнение из тренажера, шаблон для выполнения дз 7 модуля */

var cardsData = [
  {
    inStock: true,
    imgUrl: 'gllacy/choco.jpg',
    text: 'Сливочно-кофейное с кусочками шоколада',
    price: 310,
    isHit: true,
    specialOffer: 'Двойная порция сиропа бесплатно!'
  },
  {
    inStock: false,
    imgUrl: 'gllacy/lemon.jpg',
    text: 'Сливочно-лимонное с карамельной присыпкой',
    price: 125,
    isHit: false
  },
  {
    inStock: true,
    imgUrl: 'gllacy/cowberry.jpg',
    text: 'Сливочное с брусничным джемом',
    price: 170,
    isHit: false
  },
  {
    inStock: true,
    imgUrl: 'gllacy/cookie.jpg',
    text: 'Сливочное с кусочками печенья',
    price: 250,
    isHit: false
  },
  {
    inStock: true,
    imgUrl: 'gllacy/creme-brulee.jpg',
    text: 'Сливочное крем-брюле',
    price: 190,
    isHit: false
  }
];

var makeElement = function (tagName, className, text) {
  var element = document.createElement(tagName);
  element.classList.add(className);
  if (text) {
    element.textContent = text;
  }
  return element;
};

var renderCards = function (goods) {
  var listItem = makeElement('li', 'good');

  var title = makeElement('h2', 'good__description', goods.text);
  listItem.appendChild(title);

  var picture = makeElement('img', 'good__image');
  picture.src = goods.imgUrl;
  picture.alt = goods.text;
  listItem.appendChild(picture);

  var price = makeElement('p', 'good__price', goods.price + '₽/кг');
  listItem.appendChild(price);

  var availabilityClass = 'good--available';
  if (!goods.inStock) {
    availabilityClass = 'good--unavailable';
  }
  listItem.classList.add(availabilityClass);

  if (goods.isHit) {
    listItem.classList.add('good--hit');
    var specialOffer = makeElement('p', 'good__special-offer', goods.specialOffer);
    listItem.appendChild(specialOffer);
  }

  return listItem;
};

var cardList = document.querySelector('.goods');

for (var i = 0; i < cardsData.length; i++) {
  var cardItem = renderCards(cardsData[i]);
  cardList.appendChild(cardItem);
}

