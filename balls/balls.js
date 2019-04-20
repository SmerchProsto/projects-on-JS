var Ball = function () {
			this.x = 100;
			this.y = 100;
			this.xSpeed = Math.random() * 10 - 5;
			this.ySpeed = Math.random() * 10 - 5;
		};

		var balls = [];

		function makeBalls (balls) {
			for (var i = 0; i < 10; i++) {
				balls[i] = new Ball();
			}
			return balls;
		};

		balls = makeBalls(balls);

		var canvas = document.getElementById("canvas");
		var width = canvas.width;
		var height = canvas.height;
		var ctx = canvas.getContext("2d");

		function circle (x, y, radius, fillCircle) {
			ctx.beginPath();
			ctx.arc(x, y, radius, 0, Math.PI * 2, false);
			if (fillCircle) {
				ctx.fill();
			}	else {
				ctx.stroke();
			}
		};

		Ball.prototype.draw = function () {
			circle(this.x, this.y, 3, true)
		};

		Ball.prototype.move = function () {
			this.x += this.xSpeed;
			this.y += this.ySpeed;
		};

		Ball.prototype.checkCollision = function() {
			if (this.x < 0 || this.x > width) {
				this.xSpeed = -this.xSpeed
			}

			if (this.y < 0 || this.y > height) {
				this.ySpeed = -this.ySpeed;
			}
		};
		
		var ball = new Ball();

		setInterval(function () {
			ctx.clearRect(0, 0, width, height);
			for (var i = 0; i < balls.length; i++) {
				balls[i].draw();
				balls[i].move();
				balls[i].checkCollision();
			}
			ctx.strokeRect(0, 0, width, height);
		}, 20);
