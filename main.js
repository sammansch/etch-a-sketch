//2. create 16x16 grid of square divs with JS

const container = document.querySelector('.main');

//loop to create 16 "game cells"
let x = 0;
do{
    for (let i = 0; i < 16; i++){
        const box = document.createElement('div');
        box.className = "game-cell";

        container.appendChild(box);
    }
    x++
} while (x < 16);

//cells change color as the cursor passes through 
container.addEventListener('mouseover', function(event) {
    event.target.style.backgroundColor = 'seagreen';
});

//add reset button at top of page
const header = document.querySelector('.header');
const resetBtn = document.createElement('button');
resetBtn.className = "reset-grid";
resetBtn.textContent = "Clear Grid";
header.appendChild(resetBtn);

resetBtn.addEventListener('click',() => location.reload());