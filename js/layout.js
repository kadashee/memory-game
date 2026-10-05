import { createElement } from './dom.js';

const header = createElement('header', 'header');
export const newGameButton = createElement('button', 'button', 'Новая игра');
export const leaderboardButton = createElement('button', 'button', 'Таблица лидеров');
header.append(newGameButton, leaderboardButton);

const main = createElement('main', 'main');
const stats = createElement('div', 'stats');
export const movesCounter = createElement('p', 'stats__item', 'Ходы: 0');
export const pairsCounter = createElement('p', 'stats__item', 'Пары: 0 из 8');
stats.append(movesCounter, pairsCounter);
export const board = createElement('div', 'board');
main.append(stats, board);

document.body.append(header, main);
