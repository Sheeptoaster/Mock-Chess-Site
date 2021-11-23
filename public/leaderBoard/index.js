import { leaderboard } from "./leaderboard.js";
import { generatePlayer } from "./generatePlayer.js";

//Creates Linear Gradient Background for Main Page
const page = () => {
    document.body.style.background = 'rgb(205, 86, 255)';
    document.body.style.background = 'linear-gradient(180deg, rgba(1,1,22,1) 0%, rgba(1,1,22,1) 60%, rgba(7,0,133,1) 100%)';
    document.body.style.height = '100%';
    document.body.style.backgroundAttachment = 'fixed';
}

window.onload = () => {
    page();
    leaderboard();
    generatePlayer();
}
