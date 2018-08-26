
var countryNames = ["canada", "mexico", "france", "spain", "germany", "brazil", "argentina", "china", "japan", "egypt", "nigeria", "australia", "india", "panama"];
var wrongGuess = [];
var wins = 0;
var remainingGuesses = 10;
var guessingWord = [];

var winstext = document.getElementById("win");
var currentWordText = document.getElementById("word");
var remainingGuessesText = document.getElementById("remaining");
var lettersGuessedText = document.getElementById("guessed");

var answer = countryNames[Math.floor(Math.random() * countryNames.length)];
console.log(answer);

var remainingLetters = answer.length;

for (var i = 0; i < answer.length; i++) {
    guessingWord[i] = "_";
}
console.log(guessingWord);

while (remainingLetters > 0) {

    document.onkeyup = function (event) {
        var userguess = event.key;
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            console.log(userguess);
        }
    }

    for (var j = 0; j < answer.length; j++) {
        if (answer[j] === userguess) {
            guessingWord[j] = userguess;
            remainingLetters--;
        }
    }
}