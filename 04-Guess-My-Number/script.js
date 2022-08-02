'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 23;

let secreNumber = Math.trunc(Math.random() * 20) + 1;
let Score = 20;
let hightScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('😅 No number!');
  } else if (guess === secreNumber) {
    displayMessage('🍕 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secreNumber;
    if (hightScore < Score) {
      hightScore = Score;
      document.querySelector('.highscore').textContent = hightScore;
    }
  } else if (guess !== secreNumber) {
    if (Score > 1) {
      //   document.querySelector('.message').textContent =
      //     guess > secreNumber ? '😀 Too hight!' : '😀 Too low!';
      displayMessage(guess > secreNumber ? '😀 Too hight!' : '😀 Too low!');

      Score--;
      document.querySelector('.score').textContent = Score;
    } else {
      displayMessage('😆 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secreNumber = Math.trunc(Math.random() * 20) + 1;
  Score = 20;
  document.querySelector('.score').textContent = Score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
});
