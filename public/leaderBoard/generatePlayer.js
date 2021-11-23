import { randomNumberGenerator } from '../miscFuncs/miscFuncs.js';

const playerName = [];
const playerScore = [];

export const generatePlayer = () => {
    const inputDiv = document.createElement('div');
    const addPlayer = document.createElement('button');
    const playerInput = document.createElement('textarea');

    inputDiv.style.display = 'flex';
    inputDiv.style.justifyContent = 'center';

    addPlayer.innerText = 'Add Player';
    addPlayer.style.marginRight = '.75%';
    playerInput.setAttribute('placeholder', 'Enter Name');
    playerInput.style.marginLeft = '.75%';

    let place = 1;

    addPlayer.addEventListener('click', () => {
        const scoreBoard = document.querySelector('.score-board');

        const inputVal = playerInput.value;
        const genScore = generateScore();
        playerName.push(inputVal);
        playerScore.push(genScore);

        const playerDiv = document.createElement('ol');
        playerDiv.innerText = `${place}  ${inputVal}: ${genScore}`
        playerDiv.style.color = 'white';
        playerDiv.style.marginTop = '2%';
        playerDiv.style.fontSize = '3em';
        playerDiv.style.marginRight = '40%';


        if(place === 1 || place === 2 || place === 3) playerDiv.style.textShadow = '-4px -4px 6px rgba(206,89,55,0.84), 4px 4px 6px rgba(206,89,55,0.84)';
        place++;

        scoreBoard.appendChild(playerDiv);
    })

    inputDiv.appendChild(addPlayer);
    inputDiv.appendChild(playerInput);

    document.body.appendChild(inputDiv);
}


const generateScore = () => {
    const val = randomNumberGenerator(1500);
    return val + 1000;
}
