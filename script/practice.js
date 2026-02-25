
box = document.querySelector('.box')

change = 1

box.addEventListener('click', () =>{
    if (change == 1)
    {
        console.log("bigger")
    box.style.width = "200px"
    box.style.height = "200px"
    change = 0
    }
    else
    {
        console.log("smaller")
    box.style.width = "50px"
    box.style.height = "50px"
    change = 1
    }
})



// size = 50
// direction = "bigger


// int = setInterval(sizing, 30)

// function sizing () {
//     if(size > 200)
//         {
//             direction = "smaller"
//         }
//     if(size < 50)
//     {
//         direction = "bigger"
//     }
//     if (direction == "bigger")
//     {
//         size = size + 1
//     }
//     else
//     {
//         size = size - 1
//     }
//     box.style.width = `${size}px`
//     box.style.height = `${size}px`
// }
