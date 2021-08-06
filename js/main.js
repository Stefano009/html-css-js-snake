//creo l'array di spazi che fungerà da snake
let snake = [];
let snakeLength = 6;

// for (let i = 1; i <= cell; i++){
//     let cell = `<div id = "cell" onclick = "onClick" data-cell="${i}" class = "cell">${i}</div>`;
//     let templateCell = document.createElement('DIV');
//     templateCell.classList.add('square');
//     templateCell.innerHTML = cell;
//     document.getElementById('campo').appendChild(templateCell);
// }

//functions
function snakeCreation(lenght) {
    for (let i = 0; i < lenght; i++) {
        snake[i] = `<div class = "snake-square"></div>`;
    }
    let snakeBody = document.createElement('DIV');
    snakeBody.innerHTML = snake;
    document.getElementById('snake-ground').appendChild(snakeBody);    
}
