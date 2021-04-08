const className = 'sign-up-mode';
const container = document.querySelector('.container')
const signInBtn = document.querySelector('#sign-in-btn')
const signUpBtn = document.querySelector('#sign-up-btn')

signInBtn.addEventListener('click', () => {
    container.classList.remove(className)
})
signUpBtn.addEventListener('click', () => {
    container.classList.add(className)
})