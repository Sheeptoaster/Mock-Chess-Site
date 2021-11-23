//Imports Scripts to Be Run on Load
import { gameBoard } from './gamePieces/game-board.js';
import { gamePieces } from './gamePieces/game-pieces.js';

//Creates Linear Gradient Background for Main Page
const page = () => {
    document.body.style.background = 'rgb(205, 86, 255)';
    document.body.style.background = 'linear-gradient(180deg, rgba(1,1,22,1) 0%, rgba(1,1,22,1) 60%, rgba(7,0,133,1) 100%)';
}

//Loads Board and Pieces on Window Load
window.onload = () => {
    page();
    gameBoard();
    gamePieces();
}
