/*
Rock Paper Scissors
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!" */

function rockPaperScissors(input1, input2) {
    if(input1 === 'rock' && input2 === 'scissors' || input1 === 'paper' && input2 === 'rock' || input1 === 'scissors' && input2 === 'paper'){
        return 'Player 1 won!'
    } else if (input1 === 'scissors' && input2 === 'rock' || input1 === 'rock' && input2 === 'paper' || input1 === 'paper' && input2 === 'scissors'){
        return 'Player 2 won!'
    } else if (input1 === input2){
        return 'Draw!'
    }
}