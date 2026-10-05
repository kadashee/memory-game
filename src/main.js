function createElement(tag, className = '', text = '') {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text) element.textContent = text;
  return element;
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
main.append(stats);

document.body.append(header, main);
