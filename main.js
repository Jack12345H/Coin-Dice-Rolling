// COIN FLIP SIMULATOR

// HTML variables
let outputEl = document.getElementById("output");
let outputEls = document.getElementById("output2");
let headsEl = document.getElementById("heads-out");
let tailsEl = document.getElementById("tails-out");
let oneEl = document.getElementById("one-out");
let twoEl = document.getElementById("two-out");
let threeEl = document.getElementById("three-out");
let fourEl = document.getElementById("four-out");
let fiveEl = document.getElementById("five-out");
let sixEl = document.getElementById("six-out");
// Count Variables
let numHeads = 0;
let numTails = 0;
let numOne = 0;
let numTwo = 0;
let numThree = 0;
let numFour = 0;
let numFive = 0;
let numSix = 0;

// Button event listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  //generate a random number
  let randNum = Math.random();
  console.log(randNum);

  //simulate the coin flip
  if (randNum < 0.5) {
    outputEl.innerHTML = "<img src='img/heads.png' />";
    numHeads++;
    headsEl.innerHTML = numHeads;
  } else {
    outputEl.innerHTML = "<img src='img/tails.png' />";
    numTails++;
    tailsEl.innerHTML = numTails;
  }
}

document.getElementById("btn2").addEventListener("click", btnRoll);

function btnRoll() {
  let randNum2 = Math.random();

  if (randNum2 < 0.17) {
    outputEls.innerHTML = "<img src='img/1.png' />";
    numOne++;
    oneEl.innerHTML = numOne;
  } else if (randNum2 < 0.33) {
    outputEls.innerHTML = "<img src='img/2.png' />";
    numTwo++;
    twoEl.innerHTML = numTwo;
  } else if (randNum2 < 0.5) {
    outputEls.innerHTML = "<img src='img/3.png' />";
    numThree++;
    threeEl.innerHTML = numThree;
  } else if (randNum2 < 0.67) {
    outputEls.innerHTML = "<img src='img/4.png' />";
    numFour++;
    fourEl.innerHTML = numFour;
  } else if (randNum2 < 0.83) {
    outputEls.innerHTML = "<img src='img/5.png' />";
    numFive++;
    fiveEl.innerHTML = numFive;
  } else {
    outputEls.innerHTML = "<img src='img/6.png' />";
    numSix++;
    sixEl.innerHTML = numSix;
  }
}
