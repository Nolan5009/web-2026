clickbtn = document.querySelector('.button')
bg = document.querySelector('.bg')

clickbtn.addEventListener('click', () => {
    bg.classList.toggle('active')
})
