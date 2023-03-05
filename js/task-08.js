const formRef = document.querySelector('.login-form')

formRef.addEventListener('submit', event => {
    event.preventDefault()

    const { elements: { email, password } } = event.currentTarget
    
    if (email.value === '' || password.value === '') {
        alert('Все поля должны быть заполнены')
    } else {
        const formData = { email: email.value, password: password.value }
        console.log(formData)
        event.currentTarget.reset()
    }
})
