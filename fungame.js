let userScore = 0;
let compScore = 0;

let msg = document.querySelector("h2");

const choicesme = document.querySelectorAll(".choices");
const userscore = document.querySelector("#user-score");
const compscore = document.querySelector("#comp-score");


const showWinner = (userWin, Userchoice, compchoices) => {
    if(userWin) {
        userScore++;
        userscore.innerText = userScore;
        msg.innerText = `You Win! Your ${Userchoice} beats ${compchoices}`;
       
        msg.style.backgroundColor = "green";
    }else{
        console.log("You Lose! Play Again.");
        compScore++;
        compscore.innerText = compScore;
        msg.innerText = `You Lose! ${compchoices} beats your ${Userchoice}`;;
        msg.style.backgroundColor = "red";
    };
};

const compchoice = () => {
    //rock, paper, scissors
    const options = ["rock", "paper" ,"scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    msg.innerText = "Game was Draw.Play Again."
    msg.style.backgroundColor = "blue";
}

const playGame = (Userchoice) => {
    console.log("User Choice = ", Userchoice);
    // Generating comp choice
    const compchoices = compchoice();
    console.log("Comp Choice = ", compchoices);

    if(Userchoice === compchoices) {
        //Draw Game
        drawGame();
    }else{
        let userWin = true;
        if(Userchoice === "rock"){
            //scissors, paper
            userWin = compchoices === "paper" ? false : true ;

        }else if(Userchoice === "paper"){
            //rock, scissors
            userWin = compchoices === "rock" ? true : false ;

        }else {
            //paper, rock
            userWin = compchoices === "paper" ? true : false ;
        }
        showWinner(userWin, Userchoice, compchoices);
    }

}

choicesme.forEach((choice) => {
    choice.addEventListener("click", () => {
        const Userchoice = choice.getAttribute("id");
        
        playGame(Userchoice);
    });
});



