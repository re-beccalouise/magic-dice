let images = ['./images/1.png','./images/2.png','./images/3.png','./images/4.png','./images/5.png','./images/6.png'];

const rollBtn = document.getElementById('roll');
let numberRolled = document.getElementById('score');
let diceImage = document.getElementById('diceImage');
let accumulator = document.getElementById('accumulator');

let userName = prompt('Hi! what is your name');
if (userName !=null) {
    document.getElementById('name').innerText =
    "Hey " + userName + "! Let's play Magic Dice";
};

// console.log(randomNumber);

let accumulatorValue = 0; //set the variable of acc to 0

function rollDice () {
    let randomNumber = Math.ceil(Math.random() * 6);
    diceImage.src = `images/${randomNumber}.png`
    numberRolled.innerText = `${randomNumber}`;
    accumulatorValue += randomNumber;
    setAccumulatorValue(accumulatorValue);
    checkWin();
    checkSix(randomNumber);
}

function setAccumulatorValue (number) {
    accumulatorValue = number;
    accumulator.innerText = accumulatorValue;
}

function checkSix (number) {
    if (number === 6) {
        alert(`GAME OVER! You rolled a 6. Click OK to restart game`);
        setAccumulatorValue(0);
    };
}

function checkWin () {
    if (accumulatorValue > 15) {
        alert(`You lost! Your final score was ${accumulatorValue}. Click OK to restart game`);
        setAccumulatorValue(0);
        // accumulatorValue = 0;
        // accumulator.innerText = accumulatorValue;
    } 
    if (accumulatorValue === 15) {
        alert('Winner! You scored 15. To play again click OK')
        setAccumulatorValue(0);
        // accumulatorValue = 0;
        // accumulator.innerText = accumulatorValue;
    };
}

































// function rolldice () {
//     let randomNumber = Math.ceil(Math.random() * 6);
//     diceImage.src = `images/${randomNumber}.png`
//     numberRolled.innerText = `${randomNumber}`;
//     accumulatorValue += randomNumber; //declare the accval as accval + random num
//     accumulator.innerText = accumulatorValue; //set the innertext of acc to accval, adding up score
//     checkWin();
// }

// function checkWin () {
//     if (accumulatorValue > 15) {
//         alert(`you have lost, your score was ${accumulatorValue}`)
//         accumulatorValue = 0;
//         accumulator.innerText = accumulatorValue;
//     } 
//     if (accumulatorValue === 15) {
//         alert('you have won')
//         accumulatorValue = 0;
//         accumulator.innerText = accumulatorValue;
//     };
// }



// diceImage.src = `images/${randomNumber}.png`
// numberRolled.innerText = `${randomNumber}`

// if (randomNumber === 1) {
//     diceImage.src = images[0];
//     numberRolled.innerText = 1;
// } if (randomNumber === 2) {
//     diceImage.src = images[1];
//     numberRolled.innerText = 2;
// } if (randomNumber === 3) {
//     diceImage.src = images[2];
//     numberRolled.innerText = 3;
// } if (randomNumber === 4) {
//     diceImage.src = images[3];
//     numberRolled.innerText = 4;
// } if (randomNumber === 5) {
//     diceImage.src = images[4];
//     numberRolled.innerText = 5;
// } if (randomNumber === 6) {
//     diceImage.src = images[5];
//     numberRolled.innerText = 6;
// };

