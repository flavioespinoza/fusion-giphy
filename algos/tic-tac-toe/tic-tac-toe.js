const boxes = document.querySelectorAll('.game-square');
const header = document.getElementById('game-heading');
const resetBtn = document.getElementById('restart-button');

const tick_x = 'X';
const tick_o = 'O';

let square = [];
let currentPlayer = tick_x;

const WIN = [
  [0, 1, 2], // top row
  [3, 4, 5], // middle row
  [6, 7, 8], // bottom row
  [0, 3, 6], // left col
  [1, 4, 7], // middle col
  [2, 5, 8], // right col
  [0, 4, 8], // top-left to right-bottom diagonal
  [2, 4, 6], // top-right to left-bottom diagonal
];

function playerWon() {
  return WIN.some((condition) => {
    return condition.every((index) => {
      return boxes[index].textContent === currentPlayer;
    });
  });
}

function playerDraw() {
  let moves = 0;
  for (let i = 0; i < square.length; i++) {
    if (square[i]) {
      moves++;
    }
  }
  if (moves === 9) {
    return true;
  }
  return false;
}

function boxClicked(e) {
  const id = e.target.id;
  if (!square[id]) {
    square[id] = currentPlayer;
    e.target.textContent = currentPlayer;
    e.target.disabled = true;
    // if a player has won
    if (playerWon()) {
      if (currentPlayer === 'X') {
        header.textContent = 'Player 1 Won!';
      } else {
        header.textContent = 'Player 2 Won!';
      }
      return true;
    }
    // if there is a tie game
    if (playerDraw()) {
      header.textContent = 'Tie Game!';
      return true;
    }
  }
  return false;
}

function handleClick(e) {
  const gameOver = boxClicked(e);
  if (gameOver) {
    resetBtn.style.display = 'block';
    for (const box of boxes) {
      box.disabled = true;
    }
  } else {
    if (currentPlayer === 'X') {
      currentPlayer = tick_o;
      header.textContent = `Player 2's Turn`;
    } else {
      currentPlayer = tick_x;
      header.textContent = `Player 1's Turn`;
    }
  }
}

function handleReset() {
  square = [];
  for (const box of boxes) {
    box.textContent = '';
    box.disabled = false;
  }
  resetBtn.style.display = 'none';
  header.textContent = `Player 1's Turn`;
  currentPlayer = tick_x;
}

function init() {
  let id = 0;
  for (const box of boxes) {
    box.id = id;
    box.textContent = '';
    box.addEventListener('click', handleClick);
    id++;
  }
  currentPlayer = tick_x;
  resetBtn.addEventListener('click', handleReset);
}

init();