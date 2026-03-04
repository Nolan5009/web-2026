clickBox = document.querySelector('.click')
clickToSpin = document.querySelector('.spin')
moveBox = document.querySelector('.move')
hoverBox = document.querySelector('.hover')
dblClickBox = document.querySelector('.dblclick')

console.log(clickBox)
console.log(moveBox)

colors = ['red', 'green', 'yellow', 'purple', 'violet']
index = 0

clickToSpin.addEventListener('click', () => {
    clickToSpin.classList.toggle('spinning')
})


clickBox.addEventListener('click', () => {
    clickBox.style.background = colors[index]
    index = index + 1
    if (index == colors.length) {
        index = 0
    }
    clickBox.style.color = 'white'
})

x = 0
y = 0

document.addEventListener('keydown', (event) => {
    if (event.key == 'ArrowRight') {x = x + 10}
    if (event.key == 'ArrowUp') {y = y - 10}
    if (event.key == 'ArrowLeft') {x = x - 10}
    if (event.key == 'ArrowDown') {y = y + 10}
    moveBox.style.transform =  `translate(${x}px, ${y}px)`
})

hoverBox.addEventListener('mouseenter', () => {
    hoverBox.style.transform = "scale(2)"
    // hoverBox.style.height = '100px'
    // hoverBox.style.width = '100px'
})

hoverBox.addEventListener('mouseleave', () => {
    hoverBox.style.transform = "scale(1)"
    // hoverBox.style.height = '80px'
    // hoverbox.style.width = '250px'
})

opacity = 1

dblClickBox.addEventListener('dblclick', () => {
    console.log(dblClickBox)
    opacity = opacity - 0.1
    dblClickBox.style.opacity = `${opacity}`
    dblClickBox.style.color = "red"
    if (opacity == 0)
    {
        dblClickBox.style.opacity = "1"
        opacity = 1
    }
})
