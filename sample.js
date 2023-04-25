const grid = document.getElementById('grid');
const resetButton = document.getElementById('reset-button');
const movesLeftElement = document.getElementById('moves-left');
const bestScoreElement = document.getElementById('best-score');
const currentScoreElement = document.getElementById('current-score');
let movesLeft = 20;
let bestScore = localStorage.getItem('bestScore') || 0;
let currentScore = 0;
let squares = [];
let gameStarted = false;

createGrid();

resetButton.addEventListener('click', () => {
  movesLeft = 20;
  currentScore = 0;
  movesLeftElement.innerText = movesLeft;
  currentScoreElement.innerText = currentScore;
  resetGrid();
});

function createGrid() {
  grid.innerHTML = '';
  squares = [];
  const initialPattern = [    1, 0, 1, 0, 1,    0, 1, 0, 1, 0,    1, 0, 1, 0, 1,    0, 1, 0, 1, 0,    1, 0, 1, 0, 1  ];
  for (let i = 0; i < 25; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.classList.add('square-rectangular');
    if (initialPattern[i] === 1) {
      square.classList.add('black');
    }
    squares.push(square);
    square.addEventListener('click', () => {
      if (movesLeft > 0 && !square.classList.contains('selected')) {
        if (!gameStarted) {
          gameStarted = true;
        }
        flipSquares(squares, i);
        currentScore++;
        currentScoreElement.innerText = currentScore;
        movesLeft--;
        movesLeftElement.innerText = movesLeft;
        if (checkForWin(squares)) {
          clearInterval(intervalId);
          alert('Congratulations, you win!');
          window.location.href = 'hcode.html';
          resetGrid();
        } else if (movesLeft === 0) {
          alert('Game over, you lose.');
          resetGrid();
        }
      }
    });
    grid.appendChild(square);
  }
}

function resetGrid() {
  movesLeftElement.innerText = movesLeft;
  currentScoreElement.innerText = currentScore;
  if (gameStarted) {
    createGrid();
  }
}

function flipSquares(squares, index) {
  const row = Math.floor(index / 5);
  const col = index % 5;
  flipSquare(squares, row, col);
  flipSquare(squares, row, col + 1);
  flipSquare(squares, row, col - 1);
  if (row > 0) {
    flipSquare(squares, row - 1, col);
    flipSquare(squares, row - 1, col + 1);
    flipSquare(squares, row - 1, col - 1);
  }
  if (row < 4) {
    flipSquare(squares, row + 1, col);
    flipSquare(squares, row + 1, col + 1);
    flipSquare(squares, row + 1, col - 1);
  }
}

function flipSquare(squares, row, col) {
  if (row >= 0 && row < 5 && col >= 0 && col < 5) {
    const index = row * 5 + col;
    squares[index].classList.toggle('black');
  }
}

function checkForWin() {
  var squares = document.querySelectorAll('.square');
  var allBlack = true;
  squares.forEach(function(square) {
    if (!square.classList.contains('black')) {
      allBlack = false;
    }
  });
  if (allBlack) {
    alert('Congratulations!');
    window.location.href = 'hcode.html';
  }
}

function checkWin(squares) {
  return squares.every((square) => square.classList.contains('black'));
}