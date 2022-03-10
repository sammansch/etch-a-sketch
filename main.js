//1. create 16x16 grid of square divs with JS

const container = document.querySelector('.main');

//loop to create 16 "game cells"
for (let i = 0; i < 16; i++){
    const box = document.createElement('div');
    box.className = "game-cell";
    box.style.backgroundColor = 'lightgray';
    box.textContent = i+1;
    container.appendChild(box);
}
