const board = document.querySelector(".board")
const boardHeight = 30
const boardWidth = 30

const rows = Math.floor(board.clientHeight / boardHeight)
const cols = Math.floor(board.clientWidth / boardWidth)
console.log(rows);
console.log(cols);

