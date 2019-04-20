var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// объекты игры
var bird = new Image();
var bg = new Image();
var fg = new Image();
var pipeUp = new Image();
var pipeBottom = new Image();

bird.src = "img/bird.png";
bg.src = "img/bg.png";
fg.src = "img/fg.png";
pipeUp.src = "img/pipeUp.png";
pipeBottom.src = "img/pipeBottom.png";

// Звуки игры
var fly = new Audio();
var scoreAudio = new Audio();

fly.src = "audio/fly.mp3";
scoreAudio.src = "audio/score.mp3";

// Разрыв между верхней трубой и нижней
var gap = 90;

// Счет
var score = 0;

// Позиции птички
var xPos = 10;
var yPos = 150;

// Гравитация
var grav = 1.5;

// Трубы
var pipe = [];

pipe[0] = {
	x: canvas.width,
	y: 0
};

// Рисуем счет
function drawScore() {
	ctx.font = "20px Courier";
	ctx.fillStyle = "Black"
	ctx.textAlign = "left";
	ctx.textBaseline = "top";
	ctx.fillText("Счет: " + score, 10, 10);
};

// Делаем функцию, чтобы птичка летала
function moveUp () {
	yPos -= 25;
	fly.play();
};

// Основная функция игры
function drawGame () {
	ctx.drawImage(bg, 0, 0);

	for (var i = 0; i < pipe.length; i++) {
		ctx.drawImage(pipeUp, pipe[i].x, pipe[i].y);
		ctx.drawImage(pipeBottom, pipe[i].x, pipe[i].y + pipeUp.height + gap);

		pipe[i].x--;

		if (pipe[i].x === 100) {
			pipe.push({
				x: canvas.width,
				y: Math.floor(Math.random() * pipeUp.height) - pipeUp.height
			});
		}

		// Отслеживание прикосновений
		if (
			xPos + bird.width >= pipe[i].x &&
			xPos <= pipe[i].x + pipeUp.width &&
			(yPos <= pipe[i].y + pipeUp.height ||
			yPos + bird.height >= pipe[i].y + pipeUp.height + gap) ||
			yPos + bird.height >= canvas.height - fg.height
		) {
			location.reload();
		}

		if (pipe[i].x + pipeUp.width === xPos) {
			score++;
			scoreAudio.play();
		}
	}
	
	ctx.drawImage(fg, 0, canvas.height - fg.height);
	ctx.drawImage(bird, xPos, yPos);

	drawScore();
	yPos += grav;
	requestAnimationFrame(drawGame);
};

// Отслеживаем нажатие клавиши
document.addEventListener("keydown", moveUp);

// Рисуем все объекты игры + метод drawImage используем
// после загрузки самой картинки. Функция без скобок,
// так как мы не вызываем ее, а связываем с загрузкой страницы
bg.onload = drawGame;