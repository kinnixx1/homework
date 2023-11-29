const canvas = document.getElementById('game');
const context = canvas.getContext('2d');
const gridSize = 16;
const scoreElement = document.getElementById('score');
const difficultyElement = document.getElementById('difficulty');

let snake = [
    { x: canvas.width / 2, y: canvas.height / 2 },
];
let snakeDX = gridSize;
let snakeDY = 0;
let food = generateFood();
let lastRenderTime = 0;
let gameOver = false;
let score = 0;

function main(currentTime) {
    if (gameOver) {
        if (confirm('Вы проиграли. Начать заново?')) {
            location.reload();
        }
        return;
    }

    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    const snakeSpeed = parseInt(difficultyElement.value);
    if (secondsSinceLastRender < 1 / snakeSpeed) return;

    lastRenderTime = currentTime;

    update();
    draw();
}

function update() {
    const head = { x: snake[0].x + snakeDX, y: snake[0].y + snakeDY };

    if (head.x === food.x && head.y === food.y) {
        score++;
        scoreElement.textContent = score;
        food = generateFood();
    } else {
        snake.pop();
    }

    snake.unshift(head);

    if (head.x < 0 || head.x >= canvas.width || head.y < 0 || head.y >= canvas.height) {
        gameOver = true;
    }

    for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
            gameOver = true;
            break;
        }
    }
}

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = 'green';
    for (let i = 0; i < snake.length; i++) {
        context.fillRect(snake[i].x, snake[i].y, gridSize, gridSize);
    }

    context.fillStyle = 'red';
    context.fillRect(food.x, food.y, gridSize, gridSize);
}

function generateFood() {
    return {
        x: Math.floor(Math.random() * canvas.width / gridSize) * gridSize,
        y: Math.floor(Math.random() * canvas.height / gridSize) * gridSize,
      };
      }
      
      function changeDirection(event) {
      if (event.key === 'ArrowUp' && snakeDY === 0) {
      snakeDX = 0;
      snakeDY = -gridSize;
      } else if (event.key === 'ArrowDown' && snakeDY === 0) {
      snakeDX = 0;
      snakeDY = gridSize;
      } else if (event.key === 'ArrowLeft' && snakeDX === 0) {
      snakeDX = -gridSize;
      snakeDY = 0;
      } else if (event.key === 'ArrowRight' && snakeDX === 0) {
      snakeDX = gridSize;
      snakeDY = 0;
      }
      }
      
      window.addEventListener('keydown', changeDirection);
      window.requestAnimationFrame(main);