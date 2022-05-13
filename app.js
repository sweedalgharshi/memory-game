const cardArray = [
  {
    name: 'fries',
    img: 'images/fries.png',
  },
  {
    name: 'cheeseburger',
    img: 'images/cheeseburger.png',
  },
  {
    name: 'hotdog',
    img: 'images/hotdog.png',
  },
  {
    name: 'ice-cream',
    img: 'images/ice-cream.png',
  },
  {
    name: 'milkshake',
    img: 'images/milkshake.png',
  },
  {
    name: 'pizza',
    img: 'images/pizza.png',
  },
  {
    name: 'fries',
    img: 'images/fries.png',
  },
  {
    name: 'cheeseburger',
    img: 'images/cheeseburger.png',
  },
  {
    name: 'hotdog',
    img: 'images/hotdog.png',
  },
  {
    name: 'ice-cream',
    img: 'images/ice-cream.png',
  },
  {
    name: 'milkshake',
    img: 'images/milkshake.png',
  },
  {
    name: 'pizza',
    img: 'images/pizza.png',
  },
];

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector('#grid');
let cardChosen = [];
let cardChosenIds = [];
let cardsWon = [];

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement('img');
    card.setAttribute('src', 'images/blank.png');
    card.setAttribute('data-id', i);
    gridDisplay.append(card);
    card.addEventListener('click', flipcard);
    console.log(gridDisplay, card, i);
  }
}

createBoard();

function checkMatch() {
  const cards = document.querySelectorAll('img');
  console.log(cards);
  const optionOneId = cardChosenIds[0];
  const optionTwoId = cardChosenIds[1];
  if (optionOneId === optionTwoId) {
    alert('Yo have clicked the same image');
  }
  if (cardChosen[0] === cardChosen[1]) {
    alert('You have got a match');
    cards[optionOneId].setAttribute('src', 'images/white.png');
    cards[optionTwoId].setAttribute('src', 'images/white.png');
    cards[optionOneId].removeEventListener('click', flipcard);
    cards[optionTwoId].removeEventListener('click', flipcard);
    cardsWon.push(cardChosen);
  } else {
    cards[optionOneId].setAttribute('src', 'images/blank.png');
    cards[optionTwoId].setAttribute('src', 'images/blank.png');
  }
  cardChosen = [];
  cardChosenIds = [];
}

function flipcard(e) {
  const cardId = this.getAttribute('data-id');
  cardChosen.push(cardArray[cardId].name);
  cardChosenIds.push(cardId);
  this.setAttribute('src', cardArray[cardId].img);
  console.log(cardChosenIds);
  if (cardChosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
  console.log(cardChosen);
}
