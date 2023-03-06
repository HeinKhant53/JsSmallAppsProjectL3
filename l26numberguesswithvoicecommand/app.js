//Get UI
const minnum = document.querySelector('.minnumber'),
        maxnum = document.querySelector('.maxnumber');

const getinput = document.getElementById('guessnumber');
const getbtn = document.getElementById('btn');

const message1 = document.querySelector('.message1'),
        message2 = document.querySelector('.message2');

const getgamectn = document.getElementById('game-container');

const getmicbtn = document.getElementById('mic-btn');

const getvocctn = document.getElementById('voice-container');

let min = 10,
    max = 100,
    gameleft = 3,
    winningnum = randomnum(min,max);

minnum.innerText = min;
maxnum.textContent = max;

function randomnum(min,max){
    let getrdm = Math.floor((Math.random()*(max-min))+10);
    return getrdm;
}
console.log(winningnum);

function setmessage1(msg,color){
    message1.textContent = msg;
    message1.style.color = color;
}

function setmessage2(msg,color){
    message2.textContent = msg;
    message2.style.color = color;
}

function gameover(won,msg){
    let color;

    won === true ? color = 'green' : color = 'red';

    getinput.disabled = true;

    getinput.style.borderColor = color;

    setmessage1(msg,color);

    getbtn.value = 'Play Again';
}

getbtn.addEventListener('click',function(){

    let guess = +getinput.value;
    // console.log(guess);
    // console.log(typeof guess);

    if(guess<min || guess>max || isNaN(guess)){
        setmessage2(`Please enter a number between ${min} to ${max}`,'red');
    }

    if(guess === winningnum){
        // Game Over Won

        gameover('true',`${winningnum} is correct!!, You Won`)
    }else{
        gameleft--;

        if(gameleft === 0){
            //Game Over Lost

            gameover('false',`Game Over, You Lost, The correct number is ${winningnum}`);
        }else{
            // Continue Game
        }
    }
});