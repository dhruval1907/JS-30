const board = document.querySelector(".board")
const boardHeight = 80
const boardWidth = 80

const rows = Math.floor(board.clientHeight / boardHeight)
const cols = Math.floor(board.clientWidth / boardWidth)


for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols ; col++) {
        const block = document.createElement("div")
        block.classList.add("block")
        board.appendChild(block)
        block.innerText = `${row},${col}`
        blocks
    }
}
