'use strict'

const textBlock = document.getElementById('text-block');
const toggleButton = document.getElementById('btn');

toggleButton.addEventListener('click', () => {
  textBlock.classList.toggle('active');
});
