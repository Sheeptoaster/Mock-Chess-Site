export const randomNumberGenerator = (num) => {
    return Math.floor(Math.random() * num);
}

const piecesLeft = (color) => {
    let bRemaining = 0;
    let wRemaining = 0;

    const blackPieces = document.querySelectorAll('.black');
    const whitePieces = document.querySelectorAll('.white');

    if (color === 'black') {
        while (blackPieces.length) {
            bRemaining++;
            blackPieces.pop();
        }
        return bRemaining;
    }
        if (color === 'white') {
            while (whitePieces.length) {
                wRemaining++;
                whitePieces.pop();
            }
            return wRemaining;
        }
    }
