function createElement(tag, className = '', text = '') {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text) element.textContent = text;
  return element;
}

const images = ['🍎', '🍌', '🍇', '🍒', '🍋', '🍉', '🥝', '🍑'];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const header = createElement('header', 'header');
const newGameButton = createElement('button', 'button', 'Новая игра');
const leaderboardButton = createElement('button', 'button', 'Таблица лидеров');
header.append(newGameButton, leaderboardButton);

const main = createElement('main', 'main');
const stats = createElement('div', 'stats');
const movesCounter = createElement('p', 'stats__item', 'Ходы: 0');
const pairsCounter = createElement('p', 'stats__item', 'Пары: 0 из 8');
stats.append(movesCounter, pairsCounter);
const board = createElement('div', 'board');
main.append(stats, board);

document.body.append(header, main);

let firstCard = null;

function openCard(card) {
  card.textContent = card.dataset.image;
  card.classList.add('card--open');
}

function handleCardClick(card) {
  if (card.classList.contains('card--open')) return;

  openCard(card);

  if (!firstCard) {
    firstCard = card;
    return;
  }

  firstCard = null;
}

function createBoard() {
  const cards = shuffle([...images, ...images]);
  cards.forEach((image) => {
    const card = createElement('button', 'card', '?');
    card.dataset.image = image;
    card.addEventListener('click', () => handleCardClick(card));
    board.append(card);
  });
}

createBoard();
