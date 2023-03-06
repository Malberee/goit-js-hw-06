const inputRef = document.querySelector('#validation-input')

inputRef.addEventListener('blur', () => {
    // console.log(inputRef.dataset.length)
    console.log(Number(inputRef.dataset.length))
    if (inputRef.value.length == Number(inputRef.dataset.length)) {
        inputRef.classList.remove('invalid')
        inputRef.classList.add('valid')
        
    } else {
        inputRef.classList.remove('valid')
        inputRef.classList.add('invalid')
    }
})