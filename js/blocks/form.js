const form = () => {
    const inputRadios = document.getElementsByName('contact-radio')
    const inputName = document.querySelector('.input-name')
    const inputEmail = document.querySelector('.input-email')
    const inputMessage = document.querySelector('.input-message')

    const form = document.querySelector('.contact__form')

    console.log(inputRadios.value);
    form.addEventListener('submit', (e) => {
        e.preventDefault()

        let radioVal = ''

        for(let val of inputRadios) {
            if(val.checked) {
                radioVal = val.value
                break
            }
        }
        

        const data = {
            radioVal,
            name: inputName.value,
            email: inputEmail.value,
            message: inputMessage.value
        }

        console.log(data);
    })
}

export default form