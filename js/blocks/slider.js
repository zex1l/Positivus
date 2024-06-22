const slider = () => {
    const prevSlideButton = document.querySelector('.testimonials__btns-prev') 
    const nextSlideButton = document.querySelector('.testimonials__btns-next')

    const sliderList = document.querySelector('.testimonials__list')
    const starsList = document.querySelectorAll('.star')

    let currentTranlate = 346
    let valueTranslate = 642

    let count = 1

    starsList[count].setAttribute('id', 'active')


    nextSlideButton.addEventListener('click', () => {
        
        count++

        if(starsList[count]) {
            starsList[count].setAttribute('id', 'active')
            starsList[count-1].removeAttribute('id', 'active')
        }
        
        if(count > 3) {
            starsList[count-1].removeAttribute('id', 'active')
            sliderList.style.transform = `translateX(${346 + valueTranslate}px)`
            count = 0
            starsList[count].setAttribute('id', 'active')
            currentTranlate = 346 + valueTranslate
            return
        }
        currentTranlate -= valueTranslate
        sliderList.style.transform = `translateX(${currentTranlate}px)` 
    })

    prevSlideButton.addEventListener('click', () => {
        count--
        
        if(starsList[count]) {
            starsList[count].setAttribute('id', 'active')
            starsList[count+1].removeAttribute('id', 'active')
        }

        if(count < 0) {
            starsList[count+1].removeAttribute('id', 'active')
            sliderList.style.transform = `translateX(${346 - valueTranslate * 2}px)`
            currentTranlate = -938
            count = 3
            starsList[count].setAttribute('id', 'active')
            return
        }
       
        currentTranlate += valueTranslate
        sliderList.style.transform = `translateX(${currentTranlate}px)`
    })
}


const nextSLide = (sliderList, btn, value) => {
    btn.addEventListner('click', () => {
        console.log(1);
    })
}

export default slider