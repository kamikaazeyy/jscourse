'use strict';

//selecting elements
const player0EL = document.querySelector('.player--0');
const player1EL = document.querySelector('.player--1');
const score0EL = document.querySelector('#score--0');
const score1EL = document.getElementById('score--1');
const current0el = document.getElementById('current--0');
const current1el = document.getElementById('current--1');
const DiceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
let currentScore, scores, activePlayer, playing;
//initializing elements
const init = function () {
  DiceEl.classList.add('hidden');
  scores = [0, 0];
  document.getElementById('score--0').textContent = 0;
  document.getElementById('score--1').textContent = 0;
  currentScore = 0;
  document.getElementById('current--0').textContent = 0;
  document.getElementById('current--1').textContent = 0;
  player0EL.classList.remove('player--winner');
  player1EL.classList.remove('player--winner');
  player0EL.classList.add('player--active');
  player1EL.classList.remove('player--active');
  activePlayer = 0;
  playing = true;
};
init();
const swithcPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0EL.classList.toggle('player--active');
  player1EL.classList.toggle('player--active');
};
//rolling the dice functionaity
btnRoll.addEventListener('click', function () {
  if (playing) {
    //1. generate a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    //2. display the dice
    DiceEl.classList.remove('hidden');
    DiceEl.src = `dice-${dice}.png`;
    // console.log(dice);

    //3. check for a 1
    if (dice !== 1) {
      // add dice to the score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //switch player
      swithcPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    //console.log('btn hold');
    //1. add the current score to the score of the active player
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //2. check if players score is les than 100;
    if (scores[activePlayer] >= 100) {
      // finish the game
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      DiceEl.classList.add('hidden');
    }
    //if so then finish the game
    else {
      //switch to the next player
      swithcPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
