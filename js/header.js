'use strict';

{
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');
  const video1 = document.getElementById('video2');

  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
    video2.classList.add('hide');
  });
  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
    video2.classList.remove('hide');
  });
}








