//creo l'array di spazi che fungerà da snake
let snake;
let reset = document.getElementById('snake-ground')

// for (let i = 1; i <= cell; i++){
//     let cell = `<div id = "cell" onclick = "onClick" data-cell="${i}" class = "cell">${i}</div>`;
//     let templateCell = document.createElement('DIV');
//     templateCell.classList.add('square');
//     templateCell.innerHTML = cell;
//     document.getElementById('campo').appendChild(templateCell);
// }
document.getElementById('start').addEventListener('click',
    function() {
        snakeCreation();
    }
)
document.getElementById('reset').addEventListener('click',
        function(){
            snakeReset(reset);
        }
)
//functions
function snakeCreation() {
    snake = `<div class = "snake-square">:</div>`;
    let snakeBody = document.createElement('DIV');
    snakeBody.innerHTML = snake;
    document.getElementById('snake-ground').appendChild(snakeBody);    
}
function snakeReset(elementID)
{
    elementID.innerHTML = "";
}