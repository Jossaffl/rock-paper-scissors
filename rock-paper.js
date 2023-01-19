let options = ["rock","paper","scissors"];

function getComputerChoice(){
    return options[Math.floor(Math.random() * options.length)]
};

let game_choices = document.getElementsByClassName("buttons");
let rock_choice = document.getElementById("rock");
let paper_choice = document.getElementById("paper");
let scissors_choice = document.getElementById("scissors");

function GameOn(){
    let computer_choices = getComputerChoice();
    
    if (rock_choice){
        if (computer_choices === "scissors") {AddVictories()}
        else if (computer_choices === "paper") {AddDefeats()}
        else {console.log("Draw!");}

    } else if (paper_choice){
        if (computer_choices === "rock") {AddVictories()}
        else if (computer_choices === "scissors") {AddDefeats()}
        else {console.log("Draw!");}

    } else if (scissors_choice){
        if (computer_choices === "paper") {AddVictories()}
        else if (computer_choices === "rock") {AddDefeats()}
        else {console.log("Draw!");}

    } else {
        
        console.log("Something went wrong")
    }
}

let victories = document.getElementById("wins");

function AddVictories(){
  let vic = Number(victories.innerText);
  victories.innerText = vic +1;
}

let defeats = document.getElementById("defeats");

function AddDefeats(){
   let def = Number(defeats.innerText);
   defeats.innerText = def + 1;
}

rock_choice.addEventListener("click",GameOn);
paper_choice.addEventListener("click",GameOn);
scissors_choice.addEventListener("click",GameOn);








