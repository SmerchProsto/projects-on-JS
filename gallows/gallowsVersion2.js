var words = [
	"рыба",
	"кот",
	"птица",
	"прекрасный",
	"макака"
];

function pickWord() {
	return words[Math.floor(Math.random() * words.length)];
}

function setupAnswerArray(word) {
	var answerArray = [];
	for (var i = 0; i < word.length; i++) {
		answerArray[i] = "_";
	}

	return answerArray;
}

function getGuess() {
	return prompt("Введите букву или нажмите Отмена для выхода.");
}

function showPlayerProgress(answerArray) {
	return alert(answerArray.join(" "));
}

function updateGameState(guess, word, answerArray, letterInArray, attempts) {
	var letterInArray = false;
	var j = 0;
	for (var i = 0; i < word.length; i++) {
		if (answerArray[i] === guess) {
			alert("Вы уже вводили эту букву.");
			letterInArray = true;
			return 0;
		}
		if (word[i] === guess) {
			answerArray[i] = guess;
			letterInArray = true;
			j++;
		}
	}

	if (letterInArray == false){
		attempts--;
		alert("У вас осталось " + attempts + " попыток");
		return 0;
	}

	return j;
}

function showAnswerAndCongratulatePlayerOrNot(remainingLetters, answerArray) {
	if (remainingLetters == 0) {
		return alert("Поздравляем вы выйграли! Было загадано слово " + answerArray.join(""));
	}	else {
		return alert("Конец игры!");
	}
}

var word = pickWord();
var answerArray = setupAnswerArray(word);
var attempts = 9;
var letterInArray;
var guess;

var remainingLetters = word.length;

while ((remainingLetters > 0) && (attempts > 0)) {
	showPlayerProgress(answerArray);
	guess = getGuess();
	if (guess === null) {
		break;
	}	else if (guess.length !== 1) {
		alert("Пожалуйста, введите только одну букву");
	}	else {
		guess = guess.toLowerCase();
		var correctGuesses = updateGameState(guess, word, answerArray, letterInArray, attempts);
		remainingLetters -= correctGuesses;
	}
}

showAnswerAndCongratulatePlayerOrNot(remainingLetters, answerArray);
