const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

const compScore = document.querySelector('.computer-score');
const playerScore = document.querySelector('.player-score');

const button = document.querySelectorAll('.disabled'); // play buttons
const winPlaceholder = document.querySelector('.winner'); 
const restart = document.querySelector('.restart'); //restart button

restart.addEventListener('click', () => {
    compScore.textContent = 0;
    playerScore.textContent = 0;

    button.forEach(button => {
        button.disabled = false;
        location.reload();
    });
})


rock.addEventListener('click', () => {
    let ans = playRound('rock', computerPlay());
    compScore.textContent = ans.comp;
    playerScore.textContent = ans.player;

    button.forEach(button => {
        if(ans.comp === 5 || ans.player === 5){
            button.disabled = true;
        }
    });

    if(ans.comp === 5){
            winPlaceholder.textContent = 'Computer Wins'
        }else if (ans.player === 5){
            winPlaceholder.textContent = 'Player Wins'
        }

})

paper.addEventListener('click', () => {
    let ans = playRound('paper', computerPlay());
    compScore.textContent = ans.comp;
    playerScore.textContent = ans.player;

    button.forEach(button => {
        if(ans.comp === 5 || ans.player === 5){
        button.disabled = true;
        }
    });

    if(ans.comp === 5){
            winPlaceholder.textContent = 'Computer Wins'
        }else if (ans.player === 5){
            winPlaceholder.textContent = 'Player Wins'
        }

})

scissors.addEventListener('click', () => {
    let ans = playRound('scissors', computerPlay());
    compScore.textContent = ans.comp;
    playerScore.textContent = ans.player;

    button.forEach(button => {
        if(ans.comp === 5 || ans.player === 5){
        button.disabled = true;
        }
    });

    if(ans.comp === 5){
            winPlaceholder.textContent = 'Computer Wins'
        }else if (ans.player === 5){
            winPlaceholder.textContent = 'Player Wins'
        }

})

function computerPlay(){
    let randomIndex = Math.floor(Math.random() * 3);
    // console.log(randomIndex)
    return randomIndex;

}

let scores = {
    comp: 0,
    player: 0
}


function playRound(playerSelection, computerSelection){

    let choices = ['rock', 'paper', 'scissors'];

    // player chooses  ROCK here
    if(playerSelection.toLowerCase() === choices[0]){
        if(choices[computerSelection] === choices[2]){
            alert(`You win! ${playerSelection} beats ${choices[computerSelection]}`)
            scores.player ++;
        }else if(choices[computerSelection] === choices[1]){
            alert(`You lose! ${choices[computerSelection]} beats ${playerSelection}`)
            scores.comp ++;
        }else{
            alert('It is a draw')
        }
    }

    // player chooses  PAPER here
    if(playerSelection.toLowerCase() === choices[1]){
        if(choices[computerSelection] === choices[0]){
            alert(`You win! ${playerSelection} beats ${choices[computerSelection]}`)
            scores.player ++;
        }else if(choices[computerSelection] === choices[2]){
            alert(`You lose! ${choices[computerSelection]} beats ${playerSelection}`)
            scores.comp ++;
        }else{
            alert('It is a draw')
        }
    }

    // player chooses scissors

    if(playerSelection.toLowerCase() === choices[2]){
        if(choices[computerSelection] === choices[1]){
            alert(`You win! ${playerSelection} beats ${choices[computerSelection]}`)
            scores.player ++;
        }else if(computerSelection.toLowerCase() === choices[0]){
            alert(`You lose! ${choices[computerSelection]} beats ${playerSelection}`)
            scores.comp ++;
        }else{
            alert('It is a draw')
        }
        }
    return scores;

}
function display(){
    let clock = document.querySelector('.time');
    let now = new Date();
    clock.textContent = now.toLocaleTimeString()
}

display()

setInterval(display, 1000)