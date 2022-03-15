
let number =  window.prompt('Enter a number 1 to 100:');
const container = document.querySelector('.main');

createBoard(number, number);

//create grid of square divs (number x number)
function createBoard(rows, cols) {

    container.style.setProperty('--grid-rows', rows); 
    container.style.setProperty('--grid-cols', cols); 
    for (let r = 0; r < rows; r++){
        createCells(cols);
    }
}

function createCells(number) {
    for (let i = 0; i < number; i++){
        const box = document.createElement('div');
        box.className = "game-cell";
        container.appendChild(box);
    }
}

//cells change color as the cursor passes through 
container.addEventListener('mouseover', function(event) {
    event.target.style.backgroundColor = 'seagreen';
});

//add reset button at top of page
const header = document.querySelector('.header');
const resetBtn = document.createElement('button');
resetBtn.className = "reset-grid";
resetBtn.textContent = "Reset";
header.appendChild(resetBtn);

resetBtn.addEventListener('click',() => location.reload());