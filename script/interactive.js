clickbtn = document.querySelector('.button')
bg = document.querySelector('.bg')
movebtn = document.querySelector('btn')

clickbtn.addEventListener('click', () => {
    bg.classList.toggle('active')
    movebtn.style.transform: translate(50px, 0px)
})
