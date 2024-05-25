let boxes = document.querySelectorAll(".box")
let resetBtn = document.querySelector("#reset-btn")
let newGame = document.querySelector("#new-game")
let winnerArea = document.querySelector("#winnerArea")

let turn0 = true;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const disableBoxes = () => {
    for (box of boxes) {
        box.disabled = true
    }
}

const enableBoxes = () => {
    for (box of boxes) {
        box.disabled = false
    }
}

boxes.forEach((box) => {
    box.addEventListener("click", (e) => {
        if (turn0) {
            box.innerText = "0"
            turn0 = false
        }
        else {
            box.innerText = "X"
            turn0 = true
        }
        box.disabled = true
        checkWinner()
    })

})

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerText
        let pos2 = boxes[pattern[1]].innerText
        let pos3 = boxes[pattern[2]].innerText

        let count = 0;
        for (box of boxes) {
            if (box.innerText != "") {
                count++
            }
        }

        if (count == 9) {
            winnerArea.innerText = "Draw"
        }

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                disableBoxes()
                winnerArea.innerText = `The Winner is: ${pos1}`
            }
        }
    }
}

resetBtn.addEventListener("click", (e) => {
    boxes.forEach((box) => {
        box.innerText = ""
    })
    turn0 = true
    enableBoxes()
    winnerArea.innerText = "The winner is:"
})

newGame.addEventListener("click", (e) => {
    boxes.forEach((box) => {
        box.innerText = ""
    })
    enableBoxes()
    turn0 = true
    winnerArea.innerText = "The winner is:"
})