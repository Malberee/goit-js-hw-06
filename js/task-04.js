let counterValue = 0

const valueRef = document.querySelector('#value')

const buttonPlusRef = document.querySelector('button[data-action="increment"]')
const buttonMinusRef = document.querySelector('button[data-action="decrement"]')

buttonMinusRef.addEventListener('click', () => {
    counterValue -= 1;
    valueRef.textContent = counterValue
})

buttonPlusRef.addEventListener('click', () => {
    counterValue += 1;
    valueRef.textContent = counterValue
})