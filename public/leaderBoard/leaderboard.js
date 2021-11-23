export const leaderboard = () => {
    const leaderDiv = document.createElement('div');
    leaderDiv.className = 'score-board';
    leaderDiv.style.height = '60em';
    leaderDiv.style.width = '40em';
    leaderDiv.style.backgroundColor = 'black';
    leaderDiv.style.margin = '4% auto';
    leaderDiv.style.boxShadow = '1px 1px 31px 13px rgba(215,255,255,0.75)';
    leaderDiv.style.flexDirection = 'column';

    document.body.appendChild(leaderDiv);
}
