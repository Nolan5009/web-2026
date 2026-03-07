clickbtn = document.querySelector('.button')
bg = document.querySelector('.bg')
movebtn = document.querySelector('.btn')

clickbtn.addEventListener('click', () => {
    bg.classList.toggle('active')
    movebtn.classList.toggle('active')
})
