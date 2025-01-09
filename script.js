let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameActive = true;

const messageElement = document.getElementById('message');
const cells = document.querySelectorAll('.cell');
const resetButton = document.getElementById('reset-btn');

function makeMove(index) {
  if (board[index] === '' && gameActive) {
    board[index] = currentPlayer;
    cells[index].textContent = currentPlayer;
    if (checkWinner()) {
      gameActive = false;
      messageElement.textContent = ${currentPlayer} выиграл!;
    } else if (board.every(cell => cell !== '')) {
      gameActive = false;
      messageElement.textContent = 'Ничья!';
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
}

function checkWinner() {
  const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  return winningPatterns.some(pattern => {
    const [a, b, c] = pattern;
    return board[a] && board[a] === board[b] && board[a] === board[c];
  });
}

function resetGame() {
  board = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  gameActive = true;
  messageElement.textContent = '';
  cells.forEach(cell => cell.textContent = '');
}
