'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'guess mofo

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 25;

document.querySelector('.guess').value = 29;*/

let number = Math.trunc(Math.random() * 20) + 1;
let SCORE = 20;
let highscore = 0;
document.querySelector('.again').addEventListener('click', function () {
  SCORE = 20;
  document.querySelector('.score').textContent = SCORE;
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No Number👎';
  } else if (guess === number) {
    document.querySelector('.message').textContent = 'correct guess✅';
    document.querySelector('.number').textContent = number;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
    if (SCORE > highscore) {
      highscore = SCORE;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== number) {
    if (SCORE > 1) {
      document.querySelector('.message').textContent =
        guess > number ? 'too high' : 'too low';
      SCORE--;
      document.querySelector('.score').textContent = SCORE;
    } else {
      document.querySelector('.message').textContent = 'you lose the game';
      document.querySelector('.score').textContent = 0;
    }
  }
  /*else if (guess > number) {
    document.querySelector('body').style.backgroundColor = '#e61515';
    if (SCORE > 1) {
      document.querySelector('.message').textContent = 'too high 👆';
      SCORE--;
      document.querySelector('.score').textContent = SCORE;
    } else {
      document.querySelector('.message').textContent = 'you lose the game';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < number) {
    document.querySelector('body').style.backgroundColor = '#e61515';
    if (SCORE > 1) {
      document.querySelector('.message').textContent = 'too LOW 👇';
      SCORE--;
      document.querySelector('.score').textContent = SCORE;
    } else {
      document.querySelector('.message').textContent = 'you lose the game';
      document.querySelector('.score').textContent = 0;
    }
  }*/
});
