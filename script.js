// Parole personalizzate per i 24 giorni
//const words = [
  //"KATIA", "PUZZI", "AMORE", "BACIO", "CUORE", "FIORE", "SMILE", "DOLCE",
  //"FILMM", "PIANO", "POLII", "ZARAA", "MUSIC", "POPCO", "CAFFE", "SORRI",
  //"NOTTI", "RICHI", "SOGNI", "MUSLI", "CALDO", "MILAN", "FUTUR", "NATAL"
//];

const words= ["PUZZI"];

// Calcola il giorno automatico (1 → 24 dicembre)
// const today = new Date();
//const start = new Date(today.getFullYear(), 11, 1); // 1 dicembre
//let day = today.getDate() - start.getDate() + 1;
//if (day < 1 || day > 24) day = 1; // per testarlo fuori dicembre
//document.getElementById("day-number").textContent = day;

// Parola segreta del giorno
const secretWord = words[1];

// Elementi HTML
const board = document.getElementById("game-board");
const input = document.getElementById("guess-input");
const button = document.getElementById("submit-btn");
const message = document.getElementById("message");

// Logica del gioco
function checkWord(guess) {
  const guessArr = guess.split("");
  const secretArr = secretWord.split("");
  guessArr.forEach((letter, i) => {
    const tile = document.createElement("div");
    tile.classList.add("tile");
    tile.textContent = letter;
    if (letter === secretArr[i]) tile.classList.add("correct");
    else if (secretArr.includes(letter)) tile.classList.add("present");
    else tile.classList.add("absent");
    board.appendChild(tile);
  });

  if (guess === secretWord) {
    message.textContent = "Hai indovinato!❤️";
  } else {
    message.textContent = "Riprova! 💬";
  }
}

// Evento click
button.addEventListener("click", () => {
  const guess = input.value.toUpperCase();
  if (guess.length === secretWord.length) {
    checkWord(guess);
    input.value = "";
  }
});

