container = document.getElementById('container')
text = document.getElementById('text')

totalTime = 7500
breathTime = (totalTime / 5) * 2
holdTime = (totalTime /5)

breathAnimation()

function breathAnimation() {
    text.innerText = 'Breath In'
    container.classList.add('grow')

    setTimeOut( ()=> {
        text.innerText = 'hold'
    }, breathTime)
}
