let options = ["rock","paper","scissors"];

function getComputerChoice(){
    return options[Math.floor(Math.random() * options.length)]
};

let game_choices = document.getElementsByClassName("buttons");
let rock_choice = document.getElementById("rock");
let paper_choice = document.getElementById("paper");
let scissors_choice = document.getElementById("scissors");


function GameOn(){   
    let computer_choices = getComputerChoice();               //function takes care of handling input and compare it to determine winner//
    
    if (rock_choice){
        if (computer_choices === "scissors") {AddVictories(); notifiying_w()}
        else if (computer_choices === "paper") {AddDefeats(); notifying_l()}
        else {notifying_d()}

    } else if (paper_choice){
        if (computer_choices === "rock") {AddVictories(); notifiying_w()}
        else if (computer_choices === "scissors") {AddDefeats(); notifying_l()}
        else {notifying_d()}

    } else if (scissors_choice){
        if (computer_choices === "paper") {AddVictories(); notifiying_w()}
        else if (computer_choices === "rock") {AddDefeats(); notifying_l()}
        else {notifying_d()}

    } else {
        
        console.log("Something went wrong")
    }
}




let victories = document.getElementById("wins");

function AddVictories(){                                     //functions take care of counting wins and defeats//
  let vic = Number(victories.innerText);
  victories.innerText = vic +1;
}

let defeats = document.getElementById("defeats");

function AddDefeats(){                                      
   let def = Number(defeats.innerText);
   defeats.innerText = def + 1;
}



let notifier = document.getElementById("notifier");                      

function notifiying_w(){                            //functions take care of notices//
    notifier.textContent =  "You win!";

}
function notifying_l(){
    notifier.textContent  = "Awww, you lost";
}
function notifying_d(){
    notifier.textContent  = "Draw!, let's go again";
}




rock_choice.addEventListener("click",GameOn);
paper_choice.addEventListener("click",GameOn);
scissors_choice.addEventListener("click",GameOn);








