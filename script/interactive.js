clickbtn = document.querySelector('.button')
bg = document.querySelector('.bg')
btn1 = document.querySelector('.btn')
btn2 = document.querySelector('.btn2')
text = document.querySelector('.text')

clickbtn.addEventListener('click', () => {
    bg.classList.toggle('active')
    btn1.classList.toggle('active')
    btn2.classList.toggle('active')
    text.classList.toggle('active')
})
