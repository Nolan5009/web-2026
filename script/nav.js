nav = document.querySelector('.nav')

window.addEventListener('scroll', ()=> {
    console.log(scrollY)
    if (scrollY > 500) {
        console.log("hello")
        nav.classList.add('active')
    }
    else {
        nav.classList.remove('active')
    }
})
