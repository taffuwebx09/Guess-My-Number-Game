"use strict";

/*--Game mystery Number--*/

let mysteryNumber = Number(Math.trunc(Math.random() * 20) + 1);

let score = 20;
let highScore = 0;

const gameMessage = (message) => {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  /*--no input--*/
  if (!guess) {
    gameMessage("⛔️ No number!");

    /*--corect number--*/
  } else if (guess === mysteryNumber) {
    gameMessage("🎉 Correct Number!");
    // document.querySelector(".message").textContent = "🎉 Correct Number!";
    document.querySelector("body").style.background = "#60b347";
    document.querySelector(".number").textContent = mysteryNumber;
    document.querySelector(".number").style.cssText = `
    width: 20rem;
    height: 10rem;
    font-size: 8rem;
    padding-top: 1rem;`;

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    /*--too high / too low--*/
  } else if (guess !== mysteryNumber) {
    if (score > 1) {
      gameMessage(guess > mysteryNumber ? "📈 Too high!" : "📉 Too low!");

      score--;
      document.querySelector(".score").textContent = score;
    } else {
      gameMessage("💥 You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }
});

/*--game-again-start--*/

document.querySelector(".again").addEventListener("click", () => {
  /*--Game mystery New Number--*/
  mysteryNumber = Number(Math.trunc(Math.random() * 20) + 1);

  /*-- Score Value Again Start--*/
  score = 20;
  document.querySelector(".score").textContent = score;

  /*-- Guess value Restart --*/
  document.querySelector(".guess").value = "";

  /*-- Message Again Start--*/
  document.querySelector(".message").textContent = "Start guessing...";

  /*-- Background Color Restart --*/
  document.querySelector("body").style.background = "#222222";

  /*-- Qustion Mark return --*/
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.cssText = `
    width: 15rem;
    height: 14rem;
    font-size: 6rem;
    padding-top: 4rem;`;
});
