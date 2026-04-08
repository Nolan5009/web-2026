container = document.getElementById('container')
text = document.getElementById('text')

totalTime = 7500
breathTime = (totalTime / 5) * 2
holdTime = (totalTime /5)

breathAnimation()

function breathAnimation() {
    text.innerText = 'Breath In'
    container.classList.add('grow')

    setTimeOut( () => {
        text.innerText = 'Hold';

        setTimeout(() => {
            text.innerText = 'Breath Out'
            container.classList.remove('grow')
            container.classList.add('shrink')
        },holdTime)
    }, breathTime)
}
