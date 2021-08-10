const board_border = 'black';
const board_background = "blue";
const snake_col = 'red';
const snake_border = 'black';
// canvas coordinate goes from 0 to 290 (x) and 0 to 140 (y)
let snake = [
    {x: 200, y: 0},
    {x: 190, y: 0},
    {x: 180, y: 0},
    {x: 170, y: 0},
    {x: 160, y: 0}
]
//score variable
let score = 0;
//change direction let
let changing_direction = false;
//food position
let food_x;
let food_y;
//velocity
// Horizontal velocity
let dx = 10;
// Vertical velocity
let dy = 0;


// Get the canvas element
const snakeGround = document.getElementById('snakeGround');
// Return a two dimensional drawing context
const snakeGround_ctx = snakeGround.getContext('2d');   
// Start game
main();
//food generator
gen_food();
//i put an eventListener for the keydown
document.addEventListener("keydown", change_direction);

// main function called repeatedly to keep the game running
function main() {
    if (has_game_ended()) return;//game ending function
    changing_direction = false;
    setTimeout(function onTick() {
    clearCanvas();
    drawFood();
    move_snake();
    drawSnake();
    // Call main again
    main();
  }, 100)
}
// draw a border around the canvas
function clearCanvas() {
    //  Select the colour to fill the drawing
    snakeGround_ctx.fillStyle = board_background;
    //  Select the colour for the border of the canvas
    snakeGround_ctx.strokeStyle = board_border;
    // Draw a "filled" rectangle to cover the entire canvas
    snakeGround_ctx.fillRect(0, 0, snakeGround.width, snakeGround.height);
    // Draw a "border" around the entire canvas
    snakeGround_ctx.strokeRect(0, 0, snakeGround.width, snakeGround.height);
}

// Draw the snake on the canvas
function drawSnake() {
    // Draw each part
    snake.forEach(drawSnakePart);
}
//draw food
function drawFood() {
    snakeGround_ctx.fillStyle = 'lightgreen';
    snakeGround_ctx.strokeStyle = 'darkgreen';
    snakeGround_ctx.fillRect(food_x, food_y, 10, 10);
    snakeGround_ctx.strokeRect(food_x, food_y, 10, 10);
  }
// Draw one snake part
function drawSnakePart(snakePart) {
    // Set the colour of the snake part
    snakeGround_ctx.fillStyle = snake_col;
    // Set the border colour of the snake part
    snakeGround_ctx.strokeStyle = snake_border;
    // Draw a "filled" rectangle to represent the snake part at the coordinates
    // the part is located
    snakeGround_ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
    // Draw a border around the snake part
    snakeGround_ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
}
//moving the snake
function move_snake() {
    // Create the new Snake's head
    const head = {x: snake[0].x + dx, y: snake[0].y + dy};
    // Add the new head to the beginning of snake body
    snake.unshift(head);
    const has_eaten_food = snake[0].x === food_x && snake[0].y === food_y;
    if (has_eaten_food) {
      // Increase score
      score += 10;
      // Display score on screen
      document.getElementById('score').innerHTML = '' + score;
      // Generate new food location
      gen_food();
    } else {
      // Remove the last part of snake body
      snake.pop();
    }
  }
  //game ending function
  function has_game_ended() {
    for (let i = 4; i < snake.length; i++) {
      if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) return true
    }
    const hitLeftWall = snake[0].x < 0;
    const hitRightWall = snake[0].x > snakeGround.width - 10;
    const hitToptWall = snake[0].y < 0;
    const hitBottomWall = snake[0].y > snakeGround.height - 10;
    return hitLeftWall || hitRightWall || hitToptWall || hitBottomWall
}
  //direction changing function
function change_direction(event) {
    //declaring the key as constant
    const LEFT_KEY = 37;
    const RIGHT_KEY = 39;
    const UP_KEY = 38;
    const DOWN_KEY = 40;
    
    // Prevent the snake from reversing
    
    if (changing_direction) return;
    changing_direction = true;
    const keyPressed = event.keyCode;
    const goingUp = dy === -10;
    const goingDown = dy === 10;
    const goingRight = dx === 10;
    const goingLeft = dx === -10;
    if (keyPressed === LEFT_KEY && !goingRight) {
        dx = -10;
        dy = 0;
    }
    if (keyPressed === UP_KEY && !goingDown) {
        dx = 0;
        dy = -10;
    }
    if (keyPressed === RIGHT_KEY && !goingLeft) {
        dx = 10;
        dy = 0;
    }
    if (keyPressed === DOWN_KEY && !goingUp) {
        dx = 0;
        dy = 10;
    }
}
function random_food(min, max) {
    return Math.round((Math.random() * (max-min) + min) / 10) * 10;
  }
function gen_food() {
    // Generate a random number the food x-coordinate
    food_x = random_food(0, snakeGround.width - 10);
    // Generate a random number for the food y-coordinate
    food_y = random_food(0, snakeGround.height - 10);
    // if the new food location is where the snake currently is, generate a new food location
    snake.forEach(function has_snake_eaten_food(part) {
      const has_eaten = part.x == food_x && part.y == food_y;
      if (has_eaten) gen_food();
    });
  }
 