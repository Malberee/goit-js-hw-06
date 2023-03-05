function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonRef = document.querySelector('.change-color')
const bodyRef = document.querySelector('body')
const spanRef = document.querySelector('span.color')

buttonRef.addEventListener('click', event => {
  bodyRef.style.backgroundColor = getRandomHexColor()
  spanRef.textContent = `${getRandomHexColor()}`
})
