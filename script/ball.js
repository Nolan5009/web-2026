const ball = document.createElement('div')
document.body.appendChild(ball)
const LPaddle = document.createElement('div')
document.body.appendChild(LPaddle)
const RPaddle = document.createElement('div')
document.body.appendChild(RPaddle)
const windowHeight = window.innerHeight
const windowWidth = window.innerWidth
let LPaddleHeight = 100
let LPaddleWidth = 20
let LPaddleSpeed = 10

let RPaddleHeight = 100
let RPaddleWidth = 20
let RPaddleSpeed = 10

const ballRadius = 10
let LPaddleYPosition = windowHeight / 2 - LPaddleHeight / 2
let LPaddleXPosition = 70
let ballXPosition = windowWidth / 2 - ballRadius
let ballYPosition = windowHeight / 2 - ballRadius
let ballSpeed = 15
let ballXDirection = 1
let ballYDirection = 1

let ballTop = ballYPosition
let ballBottom = ballYPosition + 2 * ballRadius
let ballLeft = ballXPosition
let LPaddleTop = LPaddleYPosition
let LPaddleBottom = LPaddleYPosition + LPaddleHeight
let LPaddleRight = 90



//setInterval(moveBall, 5)

function moveBall() {

    if (
        (ballYPosition + 2 * ballRadius >= LPaddleYPosition) &&
        (ballYPosition <= LPaddleYPosition + LPaddleHeight) &&
        (ballXPosition + ballRadius <= 90) &&
        (ballXDirection == -1)
    ) {
        console.log("Hit")
        ballXDirection = ballXDirection * -1
    }

    ballXPosition = ballXPosition + ballSpeed * ballXDirection
    ballYPosition = ballYPosition + ballSpeed * ballYDirection
    ball.style.left = `${ballXPosition}px`
    ball.style.top = `${ballYPosition}px`
    if (ballYPosition < 0 || ballYPosition > windowHeight - 2 * ballRadius) {
        ballYDirection = ballYDirection * -1
    }
    if (ballXPosition < 0 || ballXPosition > windowWidth - 2 * ballRadius) {
        ballXDirection = ballXDirection * -1
    }
}


createBall()

function createBall() {
    ball.style.height = `${2 * ballRadius}px`
    ball.style.width = `${2 * ballRadius}px`
    ball.style.borderRadius = '50%'
    ball.style.backgroundColor = 'green'
    ball.style.position = 'absolute'
    ball.style.top = `${ballYPosition}px`
    ball.style.left = `${ballXPosition}px`
}

createLPaddle()

function createLPaddle() {
    LPaddle.style.height = `${LPaddleHeight}px`
    LPaddle.style.width = `${LPaddleWidth}px`
    LPaddle.style.backgroundColor = 'blue'
    LPaddle.style.position = 'absolute'
    LPaddle.style.left = '50px'
    LPaddle.style.top = `${LPaddleYPosition}px`
}

wKey = false
sKey = false

document.addEventListener('keydown', (event) => {
    if (event.key == 'w') {
            wKey = true

    }

    if (event.key == 's') {
            sKey = true
    }
})


document.addEventListener('keyup', (event) => {
    if (event.key == 'w') {
        wKey = false
    }
    if (event.key == 's') {
        sKey = false
    }
})



function moveLPaddle() {
    if (wKey == true && LPaddleYPosition > 0) {
        LPaddleYPosition = LPaddleYPosition - LPaddleSpeed
    }
    if (sKey == true && LPaddleYPosition < windowHeight - LPaddleHeight) {
        LPaddleYPosition = LPaddleYPosition + LPaddleSpeed
    }
    LPaddle.style.top = `${LPaddleYPosition}px`
}

function animate() {
    moveBall()
    moveLPaddle()
    requestAnimationFrame(animate)
}

animate()
