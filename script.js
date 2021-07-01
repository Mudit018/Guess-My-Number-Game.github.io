'use strict';


// console.log(document.querySelector('.message').textContent);
// console.log(document.querySelector('.message').textContent = 'Correct Number: ')

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 10
// console.log(document.querySelector('.guess').value);


// document.querySelector('.check').addEventListener('click', function() {
//     const val = document.querySelector('.guess').value;
//     console.log(val);
//     const ans = 17;
//     let high = Number(document.querySelector('.highscore').value);
//     if(val>ans) {
//         document.querySelector('.message').textContent = "Too High!";
//         high++;
//         document.querySelector('.highscore').value = high;
//         var k = Number (document.querySelector('.score').value)
//         k--;
//         console.log(k);
//         document.querySelector('.score').value = k;
//     }
//     else if(val<ans) {
//         document.querySelector('.message').textContent = "Too Low!";
//         high++;
//         document.querySelector('.highscore').value = high;
//         var k = Number(document.querySelector('.score').value)
//         k--;
//         console.log(k);
//         document.querySelector('.score').value = k;
//     }
//     else {
//         document.querySelector('.message').textContent = "🎉Correct Number!";
//         high++;
//         document.querySelector('.highscore').value = high;
//     }
// });

let num = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click' , function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess , typeof guess);
    if(!guess) {
        document.querySelector('.message').textContent = "🔴 No Number!";
    } else {
        if(guess === num) {
            document.querySelector('.number').textContent = num;
            // document.querySelector('.message').textContent = "🎉Correct Number!";
            displayMessage('🎉Correct Number!')
            document.querySelector('body').style.backgroundColor = '#60b347'; 
            document.querySelector('.number').style.width = '30rem'

            if(highScore < score) {
                highScore = score;
                document.querySelector('.highscore').textContent = highScore;
            }
        } else if(guess !== num) {
            if(score>1) {
                document.querySelector('.message').textContent = (guess <= num) ? "📉Too Low!" : "📈Too High!";
                score--;
                document.querySelector('.score').textContent = score;
            } else {
                document.querySelector('.message').textContent = "😥You lose the game!"
            }
        } 
        // else if(guess <= num) {
        //     if(score>1) {
        //         document.querySelector('.message').textContent = "📉Too Low!";
        //         score--;
        //         document.querySelector('.score').textContent = score;
        //     } else {
        //         document.querySelector('.message').textContent = "😥You lose the game!"
        //     }
        // } else {
        //     if(score>1) {
        //         document.querySelector('.message').textContent = "📈Too High!";
        //         score--;
        //         document.querySelector('.score').textContent = score;
        //     } else {
        //         document.querySelector('.message').textContent = "😥You lost the game!"
        //         document.querySelector('.score').textContent = 0;
        //     }
        // }
    }
})

document.querySelector('.again').addEventListener('click' , function() {
    num = Math.trunc(Math.random() * 20) + 1;
    score = 20
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';
})
