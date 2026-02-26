loadText = document.querySelector('.loading-text')
bg = document.querySelector('.bg')

load = 0

int = setInterval(blurring, 30)

function blurring() {
    if(load > 98)
    {
        clearInterval(int)
    }
    load = load + 1
    loadText.innerText = `${load}%`
    leadText.style.opacity = 1 - load/100
    bg.style.filter = `blur(${30-(load/100)*30}px)`
    if (load > 99) {
        clearInterval(int)
    }
}
