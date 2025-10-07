// Puoi cambiare questa parola!
const secretWord = "PUZZI";

// Elementi HTML
const board = document.getElementById("game-board");
const input = document.getElementById("guess-input");
const button = document.getElementById("submit-btn");
const message = document.getElementById("message");

let gameOver = false;

button.addEventListener("click", () => {
  if (gameOver) return;
  const guess = input.value.toUpperCase();
  if (guess.length === secretWord.length) {
    checkWord(guess);
    input.value = "";
  } else {
    message.textContent = "Inserisci una parola di 5 lettere!";
  }
});

function checkWord(guess) {
  const guessArr = guess.split("");
  const secretArr = secretWord.split("");

  // Crea una nuova riga
  const row = document.createElement("div");
  row.classList.add("row");

  guessArr.forEach((letter, i) => {
    const tile = document.createElement("div");
    tile.classList.add("tile");
    tile.textContent = letter;
    if (letter === secretArr[i]) tile.classList.add("correct");
    else if (secretArr.includes(letter)) tile.classList.add("present");
    else tile.classList.add("absent");
    row.appendChild(tile);
  });

  board.appendChild(row);

  if (guess === secretWord) {
    message.textContent = "Hai indovinato!❤️";
    gameOver = true;
  } else {
    message.textContent = "Riprova! 💬";
  }
}
button.addEventListener("click", () => {
  const guess = input.value.toUpperCase();
  if (guess.length === secretWord.length) {
    checkWord(guess);
    input.value = "";
  }
});






