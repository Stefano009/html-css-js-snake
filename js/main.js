//creo l'array di spazi che fungerà da snake
let snake;
let reset = document.getElementById('snake-ground');
//event start and reset
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