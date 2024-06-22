const banner = () => {
    const bannerBtn = document.querySelector('.banner__body-btn')
    const form = document.querySelector('.contact')

    bannerBtn.addEventListener('click', () => {
        const paddingY = 70
        const coordinateY = form.offsetTop - paddingY

        window.scrollTo({
            top: coordinateY,
            behavior: "smooth"
        })
    })
} 

export default banner