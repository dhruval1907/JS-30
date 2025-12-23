const board = document.querySelector(".board");

const blockSize = 80;
const rows = Math.floor(board.clientHeight / blockSize);
const cols = Math.floor(board.clientWidth / blockSize);

const blocks = [];

const snake = [
    { x: 1, y: 3 },
    { x: 1, y: 4 },
    { x: 1, y: 5 }
];

for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
        const block = document.createElement("div");
        block.classList.add("block");
        block.innerText = `${row},${col}`;
        board.appendChild(block);
        blocks.push(block);
    }
}
function render() {
    blocks.forEach(block => block.classList.remove("fill"));
    snake.forEach(segment => {
        const index = segment.x * cols + segment.y;
        if (blocks[index]) {
            blocks[index].classList.add("fill");
        }
    });
}

render();

setInterval(() => { 
    render()
}, 300);