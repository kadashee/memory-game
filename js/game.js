import { createElement } from './dom.js';
import { images } from './cards-data.js';
import { board, movesCounter, pairsCounter } from './layout.js';

const CLOSE_DELAY = 1000;

let firstCard = null;
let isLocked = false;
let moves = 0;
let pairs = 0;

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function openCard(card) {
  card.textContent = card.dataset.image;
  card.classList.add('card--open');
}

function closeCard(card) {
  card.textContent = '?';
  card.classList.remove('card--open');
}

function updateCounters() {
  movesCounter.textContent = `Ходы: ${moves}`;
  pairsCounter.textContent = `Пары: ${pairs} из ${images.length}`;
}

function handleCardClick(card) {
  if (isLocked || card.classList.contains('card--open')) return;

  openCard(card);

  if (!firstCard) {
    firstCard = card;
    return;
  }

  moves += 1;

  if (firstCard.dataset.image === card.dataset.image) {
    pairs += 1;
  } else {
    const previousCard = firstCard;
    isLocked = true;
    setTimeout(() => {
      closeCard(previousCard);
      closeCard(card);
      isLocked = false;
    }, CLOSE_DELAY);
  }

  firstCard = null;
  updateCounters();
}

export function createBoard() {
  const cards = shuffle([...images, ...images]);
  cards.forEach((image) => {
    const card = createElement('button', 'card', '?');
    card.dataset.image = image;
    card.addEventListener('click', () => handleCardClick(card));
    board.append(card);
  });
}
