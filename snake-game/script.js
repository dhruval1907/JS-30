const board = document.querySelector(".board")
const boardHeight = 80
const boardWidth = 80

const rows = Math.floor(board.clientHeight / boardHeight)
const cols = Math.floor(board.clientWidth / boardWidth)


const blocks = []
console.log(blocks);

const snake = [{
    x: 1,
    y: 3
}, {
    x: 1,
    y: 4
}, {
    x: 1,
    y: 5
}]

for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
        const block = document.createElement("div")
        block.classList.add("block")
        board.appendChild(block)
        block.innerText = `${row},${col}`
    }
}


function render() {
    snake.forEach(function (elem) {
        blocks[`${elem.x} - ${elem.y} `].classList.add("fill")
    })
}

render()