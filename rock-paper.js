
let options = ["rock","paper","scissors"];

function getComputerChoice(){
    return options[Math.floor(Math.random() * options.length)]
};

let rock_choice = document.getElementById("rock");
let paper_choice = document.getElementById("paper");
let scissors_choice = document.getElementById("scissors");


function GameOn(){
    let computer_choices = getComputerChoice();
    if (rock_choice){
        computer_choices == "scissors"? true
        : computer_choices == "paper"? false
        : alert("Draw! try again");
    } else if (paper_choice){
        computer_choices == "rock"? true
        : computer_choices == "scissors"? false
        : alert("Draw! try again");
    } else if (scissors_choice){
        computer_choices == "paper"? true
        : computer_choices == "rock"? false
        : alert("Draw! try again");
    } else {
        console.log("Something went wrong")
    }
}

rock_choice.addEventListener("click",GameOn);
paper_choice.addEventListener("click",GameOn);
scissors_choice.addEventListener("click",GameOn);






