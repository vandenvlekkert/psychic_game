var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
               'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
               'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
               'y', 'z'];

var guessedLetters = [];
var letterToGuess = null;
var totalGuesses = 10;
var guessesRemaining = 10;

var wins = 0;
var losses = 0;

var updateGuessesRemaining = function() {
 document.querySelector('#guessesRemaining').innerHTML = guessesRemaining;
};

var updateLettersToGuess = function() {
 this.letterToGuess = this.letters[Math.floor(Math.random() * this.letters.length)];
};

var updateGuessedLetters = function() {
 document.querySelector('#guessedLetters').innerHTML = guessedLetters.join(', ');
};

var reset = function() {
 totalGuesses = 10;
 guessesRemaining = 10;
 guessedLetters = [];
 updateLettersToGuess();
 updateGuessesRemaining();
 updateGuessed();
}

updateGuessedLetters();
updateGuessesRemaining();

document.onkeyup = function(event) {
 guessesRemaining--;

 var letter = String.fromCharCode(event.keyCode).toLowerCase();
 guessedLetters.push(letter);
 updateGuessesRemaining();
 updateGuessedLetters();

 if(guessesRemaining >0) {
   if(letter == letterToGuess) {
     wins++;
     document.querySelector('#wins').innerHTML = wins;
     reset();
   } else if (guessesRemaining == 0){
     losses++;
     doucment.querySelector('#losses').innerHTML = losses;
     reset();
   }
 }
};
