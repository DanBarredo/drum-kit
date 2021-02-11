const buttons = document.querySelectorAll(".drum")

// click handler
buttons.forEach((btn) => {
    btn.addEventListener("click", (e)=> {
        const clicked = e.target
        playSound(clicked.innerHTML)
        drumHit(clicked)
    })
})

// keyboard handler
document.addEventListener("keydown", (e)=> {
    playSound(e.key)

    buttons.forEach((btn)=> {
        const btnKey = btn.classList[0]
        if (btnKey === e.key) {
            drumHit(btn)
        }
    })

})

// show drum animation on hit
const drumHit = (drum) => {
    drum.style.color = "#7181ad"
    drum.classList.add("pressed")
    setTimeout(() => {
        drum.style.color = "#f4f4f4"
        drum.classList.remove("pressed")
    }, 100);
}

// make sound
const playSound = (key) => {
    switch (key) {
        case "w":
            const kick = new Audio("./sounds/kick-bass.mp3")
            kick.play()
            break
        case "a":
            const tom1 = new Audio("./sounds/tom-1.mp3")
            tom1.play()
            break
        case "s":
            const tom2 = new Audio("./sounds/tom-2.mp3")
            tom2.play()
            break
        case "d":
            const cowbell = new Audio("./sounds/Cowbell.wav")
            cowbell.play()
            break
        case "j":
            const snare = new Audio("./sounds/snare.mp3")
            snare.play()
            break
        case "k":
            const tom3 = new Audio("./sounds/tom-3.mp3")
            tom3.play()
            break
        case "l":
            const crash = new Audio("./sounds/crash.mp3")
            crash.play()
            break
    }
}