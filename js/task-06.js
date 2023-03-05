const inputRef = document.querySelector('#validation-input')

inputRef.addEventListener('blur', () => {
    if(inputRef.value.length > inputRef.dataset.length) {
    inputRef.classList.add('invalid')
    } else {
        inputRef.classList.add('valid')
    }
})