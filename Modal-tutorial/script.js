'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.close-modal');
const btnOpen = document.querySelectorAll('.show-modal');
console.log(btnOpen);
const openModal = function () {
  //For opening the modal
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModal = function () {
  // For closing the modal
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
for (let i = 0; i < btnOpen.length; i++) {
  btnOpen[i].addEventListener('click', openModal);
}

btnClose.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (evt) {
  console.log(evt);
  //E in escape has to be capital for it to work therfore: 'Escape'
  if (evt.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
