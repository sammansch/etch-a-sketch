//2. create 16x16 grid of square divs with JS

const container = document.querySelector('.main');

//loop to create 16 "game cells"
let x = 0;
do{
    for (let i = 0; i < 16; i++){
        const box = document.createElement('div');
        box.className = "game-cell";
        //box.style.backgroundColor = 'lightgray';
        box.textContent = i+1;
        container.appendChild(box);
    }
    x++
} while (x < 16)


//3. Set up a “hover” effect so that the grid divs change color 
//when your mouse passes over them, leaving a (pixelated) trail 
//through your grid like a pen would.