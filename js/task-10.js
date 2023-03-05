function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsRef = document.querySelector('#controls')
const inputRef = document.querySelector('input[type="number"]')
const createBtnRef = document.querySelector('button[data-create]')
const destroyBtnRef = document.querySelector('button[data-destroy]')
const boxesRef = document.querySelector('#boxes')

boxesRef.style.display = 'flex'
boxesRef.style.gap = '30px'
boxesRef.style.alignItems = 'center'
boxesRef.style.flexWrap = 'wrap'
boxesRef.style.margin = '30px'

createBtnRef.addEventListener('click', () => {
  createBoxes(inputRef.value)
})

destroyBtnRef.addEventListener('click', () => {
  destroyBoxes()
})

function createBoxes() {
  const boxesArray = []

  for (let i = 0, size = 30; i < inputRef.value; i += 1, size += 10) {
    const box = `<div style="background-color: ${getRandomHexColor()}; width: ${size}px; height: ${size}px;
"></div>`

    boxesArray.push(box)
  }

  boxesRef.insertAdjacentHTML('beforeend', boxesArray.join(''))
}

function destroyBoxes() {
  boxesRef.innerHTML = ''
}
