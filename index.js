const relaxingButton = document.querySelector('.relaxing__cell-button');
const relaxingText = document.querySelector('.relaxing__cell-text');

function expandText() {
  relaxingText.classList.add('relaxing__cell-text_active');
}

relaxingButton.addEventListener('click', expandText);
