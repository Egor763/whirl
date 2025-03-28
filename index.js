const buttons = document.querySelectorAll('.relaxing__cell-button');

const arrButtons = Array.from(buttons);

console.log(arrButtons);

const relaxingText = document.querySelector('.relaxing__cell-text');
// const relaxingButtonAntiLoss = document.querySelector('#anti-loss');
// const relaxingButtonExchange = document.querySelector('#exchange');

function expandText(evt) {
  const id = evt.currentTarget.id;

  const text = document.querySelector(`#${id}-text`);

  // if (text.classList.contains('relaxing__cell-text_active')) {
  //   text.classList.remove('relaxing__cell-text_active');
  // } else {
  //   text.classList.add('relaxing__cell-text_active');
  // }

  text.classList.toggle('relaxing__cell-text_active');
}

function setEventListeners() {
  arrButtons.forEach((btn) => {
    btn.addEventListener('click', expandText);
  });
}

setEventListeners();

// function collapseText() {
//   relaxingText.classList.remove('relaxing__cell-text_active');
// }

// relaxingButtonAntiLoss.addEventListener('click', expandText);
