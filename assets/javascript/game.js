

// declare some vairables
var wins = 0;
var losses = 0;
var guessesLeft = 8;
var guessesMade = [];
var secretLetterArray=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//generate a random letter
var secretLetter = secretLetterArray[Math.floor(Math.random()*secretLetterArray.length)];
console.log(secretLetter);

//initial scores
document.getElementById("wins").textContent = wins;
document.getElementById("losses").textContent = losses;
document.getElementById("guessesLeft").textContent = guessesLeft;

//run when a key is pressed
document.onkeyup = function(event) {

// Determines which key was pressed.
  var userGuess = event.key;
  var userGuessCode = event.keyCode;

//if the guess isn't a letter
  if (userGuessCode <= 64 || userGuessCode >=94) {
  	document.getElementById("message").textContent = "That's not a letter, try again";
  }
//iuf they guedss correctly
  else if (userGuess == secretLetter) {
  	wins++;
  	console.log(wins);
  	document.getElementById("wins").textContent = wins;
    document.getElementById("message").textContent = "Correct, the letter was " + userGuess + " You WIN!!!";
    secretLetter = secretLetterArray[Math.floor(Math.random()*secretLetterArray.length)];
    guessesMade = [];
	console.log(secretLetter);
    guessesLeft = 8;
  }
 //if they've already guessed the letter
  	else if (guessesMade.indexOf(userGuess) != "-1" ) {
  		document.getElementById("message").textContent = "you already tried that";
  	}
 //if they are out of guesses
  	else if (guessesLeft == 1) {
  		losses++;
  		document.getElementById("losses").textContent = losses;
  	  	document.getElementById("guessesLeft").textContent = --guessesLeft;
  		document.getElementById("message").textContent = "ug! you lose!!!";
  		secretLetter = secretLetterArray[Math.floor(Math.random()*secretLetterArray.length)];
    	guessesMade = [];
		console.log(secretLetter);
  		guessesLeft = 8;

  	}
  	else {
  		document.getElementById("message").textContent = "Nope, try again";
  		document.getElementById("guessesLeft").textContent = --guessesLeft;
  		guessesMade.push(userGuess);
  		document.getElementById("guessesMade").textContent = guessesMade;
  	}


}
