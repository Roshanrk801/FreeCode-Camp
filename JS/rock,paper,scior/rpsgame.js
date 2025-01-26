const rockBtn = document.getElementById("rock-btn").addEventListener("click", () => handlerBtn("Rock"));
const paperBtn = document.getElementById("paper-btn").addEventListener("click", () => handlerBtn("Paper"));
const scissorBtn = document.getElementById("scissors-btn").addEventListener("click", () => handlerBtn("SCissor"))
const playerScoreSpanElement = document.getElementById("player-score");
const compScoreSpanElement = document.getElementById("computer-score");
const resultsMsg = document.getElementById("results-msg");
const winnerMsg = document.getElementById("winner-msg");
const resetGameBtn = document.getElementById("reset-game-btn");
const optionsContainer = document.querySelector(".options-container");

let playerScore = 0;
let compScore = 0;

const getRandomCompOption = () => {
    const options = ["Rock", "Paper", "Scissor"];
    const randomOption = Math.floor(Math.random() * options.length);
    return options[randomOption];
}

const handlerBtn = (choice) => {
    const compChoice = getRandomCompOption();
    resultsMsg.innerText = `Player chose: ${choice}, Computer chose: ${compChoice}\n\n`;
   showResult(choice, compChoice);
}


const showResult = (player, comp) => {
    let msg = "";
    if (player === comp) {
        msg = "Both choice same option! It's a Draw Match"
    } else if (player === "Rock" && comp === "Scissor" ||
        player === "SCissor" && comp === "Paper" ||
        player === "Paper" && comp === "Rock") {
        msg = "Player Won the Match"
        playerScore++
        playerScoreSpanElement.innerText = playerScore

        if (playerScore === 3) {
            winnerMsg.innerText = 'Player is Winner'
            resetGameBtn.style.display = "block";
            optionsContainer.style.display = "none"
        }
    } else {
        compScore++
        console.log(compScore);
        compScoreSpanElement.innerText = compScore
        msg = "Computer Won The Match";
        if (compScore === 3) {
            winnerMsg.innerText = 'Computer is Winner'
            resetGameBtn.style.display = "block";
            optionsContainer.style.display = "none"
        }
    }
    resultsMsg.innerText += msg
    return msg
}


const resetGame = () => {
    playerScore=0;
    compScore=0
    playerScoreSpanElement.innerText = playerScore;
    compScoreSpanElement.innerText  = compScore;
    winnerMsg.innerText = "";
    resultsMsg.innerText = "";

    resetGameBtn.style.display = "none";
    optionsContainer.style.display = "block"
}

resetGameBtn.addEventListener("click", () => resetGame())

