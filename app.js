const number1 = document.querySelector(".number1");
const number2 = document.querySelector(".number2");
const avatar1 = document.querySelector(".avatar1");
const avatar2 = document.querySelector(".avatar2");
const reset = document.querySelector(".reset");
const select = document.querySelector(".select");

let one;
let two;
function remember() {
  one = prompt("Birinchi:Sizning ismingiz");
  two = prompt("Ikkinchi:Sizning ismingiz");
  while (one == "" || one == null) {
    one = prompt("Birinchi:Sizning ismingiz");
  }
  while (two == "" || two == null) {
    two = prompt("Ikkinchi:Sizning ismingiz");
  }
}
remember();
let scorePlayer1 = 0;
let scorePlayer2 = 0;

let gameScore = 3;
let gameOver = true;
avatar1.textContent = one;
avatar2.textContent = two;

avatar1.addEventListener("click", () => {
  if (gameOver) {
    scorePlayer1++;
    number1.textContent = scorePlayer1;
    if (gameScore == scorePlayer1) {
      number1.style.color = "green";
      number2.style.color = "red";
      gameOver = false;
      alert(`Ura ${one} siz yutdingiz`);
    }
  }
});
avatar2.addEventListener("click", () => {
  if (gameOver) {
    scorePlayer2++;
    number2.textContent = scorePlayer2;
    if (gameScore == scorePlayer2) {
      number1.style.color = "red";
      number2.style.color = "green";
      gameOver = false;
      alert(`Ura ${two} siz yutdingiz`);
    }
  }
});

select.addEventListener("change", () => {
  gameScore = +select.value;
  refresh();
});
reset.addEventListener("click", refresh);

function refresh() {
  gameOver = true;
  scorePlayer1 = 0;
  scorePlayer2 = 0;
  number1.textContent = 0;
  number2.textContent = 0;
  number1.style.color = "";
  number2.style.color = "";
}
