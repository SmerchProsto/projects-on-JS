var words = [
	"рыба",
	"кот",
	"птица",
	"прекрасный",
	"макака"
];
var word = words[Math.floor(Math.random() * words.length)];
var answerArray = [];
var attempts = 9;
var letterInArray;
var guess;

for (var i = 0; i < word.length; i++) {
	answerArray[i] = "_";
}
var remainingLetters = word.length;

while ((remainingLetters > 0) && (attempts > 0)) {
	alert(answerArray.join(" "));
	guess = prompt("Введите букву или нажмите Отмена для выхода.");
	letterInArray = false;
	if (guess === null) {
		break;
	}	else if (guess.length !== 1) {
		alert("Пожалуйста, введите только одну букву");
	}	else {
		guess = guess.toLowerCase();
		for (var j = 0; j < word.length; j++) {
			if (answerArray[j] === guess) {
				alert("Вы уже вводили эту букву.");
				letterInArray = true;
				break;
			}
			if (word[j] === guess) {
				answerArray[j] = guess;
				letterInArray = true;
				remainingLetters--;
			}
		}
		if (letterInArray == false){
			attempts--;
			alert("У вас осталось " + attempts + " попыток");
		}
	}
}

if (remainingLetters == 0) {
	alert("Поздравляем вы выйграли! Было загадано слово " + answerArray.join(""));
}	else {
	alert("Конец игры!");
}