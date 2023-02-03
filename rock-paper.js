let options = ["rock","paper","scissors"];  //game
player_score = document.getElementById("wins")
computer_score = document.getElementById("defeats")
game_options = document.getElementsByClassName("buttons");
game_notifier = document.getElementById("notifier");
start_game = document.getElementById("game-start")


function getComputerChoice(){
    return options[Math.floor(Math.random() * options.length)]
};

function GameOn(player_choice){
    
    if (player_choice == "rock" && getComputerChoice() == "scissors" || player_choice == "paper" && getComputerChoice() == "rock" 
    || player_choice == "scissors" && getComputerChoice() == "paper") { 
        Game_counter("win")

    }else if (player_choice == "rock" && getComputerChoice() == "paper" || player_choice == "paper" && getComputerChoice() == "scissors" 
    || player_choice == "scissors" && getComputerChoice() == "rock") {
        Game_counter("defeat")
    }
     else if(player_choice == "rock" && getComputerChoice() == "rock" || player_choice == "paper" && getComputerChoice() == "paper" 
    || player_choice == "scissors" && getComputerChoice() == "scissors") {
        Game_counter("draw")
    }}   

    

    
function Game_counter(result){
    let w = Number(player_score.textContent);
    let l = Number (computer_score.textContent);
    
    if (result == "win"){
        player_score.textContent = w + 1,
        game_notifier.textContent = "You win!"
        if (player_score.textContent == 5){
            game_notifier.textContent = "You won the game, congrats!"   
            setTimeout(ResetGame, 3000);}

    }
    else if(result == "defeat"){
        computer_score.textContent = l + 1,
        game_notifier.textContent = "Defeat! Try again!!"
        if (computer_score.textContent == 5){
            game_notifier.textContent = "You lost the game, You can always try again in...."   
            setTimeout(ResetGame, 3000);
        }

    }
    else if (result == "draw"){
        game_notifier.textContent = "It's a draw..."
    }
    else {
        console.log("something went wrong")
    }
}


function ResetGame(){
    game_notifier.textContent =  "Let's start the match!"
    player_score.textContent = 0
    computer_score.textContent = 0
}


Array.from(game_options).forEach((element) => { 
    element.addEventListener("click", (e) => {
    const player_choice = element.id;
    GameOn(player_choice)})
})



