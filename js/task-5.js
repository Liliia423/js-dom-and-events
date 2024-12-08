const changeBackgroundColorBtn = document.querySelector('button.change-color');

const bodyStyle = body.classList.add('body-style');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
