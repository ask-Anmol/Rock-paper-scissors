const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoice = document.querySelectorAll('button');
let userChoice;
let computerChoice;
let result;

possibleChoice.forEach(possibleChoice =>{ possibleChoice.addEventListener('click',(e) =>{
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;                     // updates the display of user choice
    generateComputerChoice();
    getResult();
})
})

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3) + 1;        //  Math.floor(Math.random() * 3); --> it returns a random integer between 0 to 2.  Math.floor() --> it always rounds down and returns the largest integer less than or equal to given number.

    if(randomNumber === 1){
        computerChoice = 'rock';
    }
    if(randomNumber === 2){
        computerChoice = 'paper';
    }
    if(randomNumber === 3){
        computerChoice = 'scissors';
    }

    computerChoiceDisplay.innerHTML=computerChoice;                // updates the display of computer choice
}

function getResult(){
    if(computerChoice === userChoice){
        result = 'its a draw!';
    }
    if(computerChoice === 'rock' && userChoice === 'paper'){
        result = 'You win!';
    }
    if(computerChoice === 'rock' && userChoice === 'scissors'){
        result = 'You lost!';
    }
    if(computerChoice === 'paper' && userChoice === 'rock'){
        result = 'You lost!';
    }
    if(computerChoice === 'paper' && userChoice === 'scissors'){
        result = 'You win!';
    }
    if(computerChoice === 'scissors' && userChoice === 'paper'){
        result = 'You lost!';
    }
    if(computerChoice === 'scissors' && userChoice === 'rock'){
        result = 'You win!';
    }

    resultDisplay.innerHTML=result;                                 // updates the display of result
}