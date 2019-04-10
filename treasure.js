function getRandomNumber (size) {
	return Math.floor(Math.random() * size);
};

function getDistance (event, target) {
	var diffX = event.offsetX - target.x;
	var diffY = event.offsetY - target.y;
	return Math.sqrt((diffX * diffX) + (diffY * diffY));
};

function getDistanceHint (event, distance, attemps) {
	if (distance < 10) {
		return "Обожжешься! " + event.offsetX +"px" + " " + event.offsetY + "px" + " Осталось кликов:" + attemps;
	}	else if (distance < 20) {
		return "Очень Горячо! " + event.offsetX +"px" + " " + event.offsetY + "px" + " Осталось кликов:" + attemps;
	}	else if (distance < 40) {
		return "Горячо! " + event.offsetX +"px" + " " + event.offsetY + "px" + " Осталось кликов:" + attemps;
	}	else if (distance < 80) {
		return "Тепло! " + event.offsetX +"px" + " " + event.offsetY + "px" + " Осталось кликов:" + attemps;
	}	else if (distance < 160) {
		return "Холодно! " + event.offsetX +"px" + " " + event.offsetY + "px" + " Осталось кликов:" + attemps;
	}	else if (distance < 320) {
		return "Очень Холодно! " + event.offsetX +"px" + " " + event.offsetY + "px" + " Осталось кликов:" + attemps;
	}	else {
		return "Замерзнешь! " + event.offsetX +"px" + " " + event.offsetY + "px" + " Осталось кликов:" + attemps;
	}
};

var width = 400;
var height = 400;
var clicks = 0;
var attemps = 40;

var target = {
	x: getRandomNumber(width),
	y: getRandomNumber(height)
};


$("#map").click(function (event) {
	if (attemps > 0) {
		attemps--;
		clicks++;
		var distance = getDistance(event, target);
		var distanceHint = getDistanceHint(event, distance , attemps);
		$("#distance").text(distanceHint);
		if (distance < 8) {
			alert("Клад найден! Сделано кликов: " + clicks + ". Координаты клада: " + event.offsetX +"px" + " " + event.offsetY + "px");
		}
	}	else {
		alert("Вы проиграли, лопата сломалась!");
	}	
});