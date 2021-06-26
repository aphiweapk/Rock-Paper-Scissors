// console.log('its connected!')

function computerPlay(){
    let randomIndex = Math.floor(Math.random() * 3);
    // console.log(randomIndex)
    return randomIndex;

}

function playRound(playerSelection, computerSelection){

    let choices = ['rock', 'paper', 'scissors'];

    let scores = {
        comp: 0,
        player: 0
    }

    // player chooses  ROCK here
    if(playerSelection.toLowerCase() === choices[0]){
        if(choices[computerSelection] === choices[2]){
            console.log(`You win! ${playerSelection} beats ${choices[computerSelection]}`)
            scores.player ++;
        }else if(choices[computerSelection] === choices[1]){
            console.log(`You lose! ${choices[computerSelection]} beats ${playerSelection}`)
            scores.comp ++;
        }else{
            console.log('It is a draw')
        }
    }

    // player chooses  PAPER here
    if(playerSelection.toLowerCase() === choices[1]){
        if(choices[computerSelection] === choices[0]){
            console.log(`You win! ${playerSelection} beats ${choices[computerSelection]}`)
            scores.player ++;
        }else if(choices[computerSelection] === choices[2]){
            console.log(`You lose! ${choices[computerSelection]} beats ${playerSelection}`)
            scores.comp ++;
        }else{
            console.log('It is a draw')
        }
    }

    // player chooses scissors

    if(playerSelection.toLowerCase() === choices[2]){
        if(choices[computerSelection] === choices[1]){
            console.log(`You win! ${playerSelection} beats ${choices[computerSelection]}`)
            scores.player ++;
        }else if(computerSelection.toLowerCase() === choices[0]){
            console.log(`You lose! ${choices[computerSelection]} beats ${playerSelection}`)
            scores.comp ++;
        }else{
            console.log('It is a draw')
        }
    }

    return scores;

}

function game(){

    let play = 0;

    let compScore = 0;
    let playerScore = 0;

    while(play < 5){

        play ++;

        let player = prompt('Rock, Paper or Scissors?');

        const computer = computerPlay();
        
        let increment = playRound(player, computer)
        compScore += increment.comp
        playerScore += increment.player

    }

    let finalScore = ''

    if(compScore > playerScore){
        finalScore = `Final Score: 
Computer: ${compScore}
Player: ${playerScore}
        
        Computer Wins`
    }else if(compScore < playerScore){
        finalScore = `Final Score: 
Player: ${playerScore}
Computer: ${compScore}
        
        Player Wins`
    }else{
        finalScore = `Draw 
Computer: ${compScore}
Player: ${playerScore}`
    }

    return finalScore;
}


console.log(game())
