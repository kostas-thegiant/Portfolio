let p1Wins = 0;
let p2Wins = 0;
let draws = 0;



function rollDice() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  var img1 = document.querySelector(".img1");
  var img2 = document.querySelector(".img2");

  img1.setAttribute("src", "images/dice" + randomNumber1 + ".png");
  img2.setAttribute("src", "images/dice" + randomNumber2 + ".png");

  var heading = document.querySelector("h1");

  if (randomNumber1 > randomNumber2) {
    heading.innerHTML = "🎉 Player 1 Wins!";
  } else if (randomNumber2 > randomNumber1) {
    heading.innerHTML = "Player 2 Wins 🎉!";
  } else {
    heading.innerHTML = "It's a Draw!";
  }
  // win counter
 if (randomNumber1 > randomNumber2) {
    p1Wins++;
  } else if (randomNumber2 > randomNumber1) {
    p2Wins++;
  } else {
    draws++;
  }

  document.getElementById("score").textContent =
    `P1: ${p1Wins} | P2: ${p2Wins} | Draws: ${draws}`;

}

// roll once on initial load
//rollDice();
document.getElementById("roll-btn").addEventListener("click", rollDice);

