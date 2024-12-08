const changeBackgroundColorBtn = document.querySelector('button.change-color');
const body = document.querySelector('body');
const spanColorValue = document.querySelector('span.color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
changeBackgroundColorBtn.addEventListener('click', () => {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  spanColorValue.textContent = randomColor;
});
