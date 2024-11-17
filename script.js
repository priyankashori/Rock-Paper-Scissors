let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");;

const drawGame = () => {
    msg.innerText = "Game was Draw. Play again";
    msg.style.backgroundColor = "#081b31";

}

const userscorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");


const showWinner = (userWin, userChoice, computerChoice) => {
    if (userWin) {
        userScore++;
        userscorePara.innerText = userScore;

        msg.innerText = `you win! ${userChoice}  beats ${computerChoice}`;
        msg.style.backgroundColor = "green";


    } else {
        computerScore++;
        computerScorePara.innerText = computerScore;
        msg.innerText = `you lose. ${computerChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";

    }
}


const genComputerChoice = () => {
    // rock , paper, scissors.


    const options = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];

}

const playGame = (userChoice) => {
    //Generate computer choice -> modular (reusable components)
    const computerChoice = genComputerChoice();
    console.log("computer choice =", computerChoice);

    if (userChoice === computerChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            // scissors , paper
            userWin = computerChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            //rock, scissors

            userWin = computerChoice === "scissors" ? false : true;
        } else {
            computerChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, computerChoice);
    }
}

// to track click event 

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
