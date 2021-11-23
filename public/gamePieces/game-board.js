export const gameBoard = () => {
    //Creates Board Element
    const board = document.createElement('div');

    //Assigns Class Name to Board
    board.className = 'main-board';

    //Styles Board Div
    board.style.margin = ' 5% auto';
    board.style.backgroundColor = 'black';
    board.style.height = '55em';
    board.style.width = '55em';
    board.style.display = 'grid';
    board.style.gridTemplateColumns = 'repeat(8, 6.7em)';
    board.style.gridTemplateRows = 'repeat(8, 6.7em)';
    board.style.justifyContent = 'center';
    board.style.alignContent = 'center';
    board.style.boxShadow = '1px 1px 31px 13px rgba(215,255,255,0.75)';

    //Initializes LetterArr for Naming Each Div
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    //Initializes Outer Loop for Number In Div Class Name
    for (let i = 8; i > 0; i--) {

        //Initializes Inner Loop for Letter in Div Class Name
        for (let j = 0; j < 8; j++) {

            //Creates Small Container Div
            const row = document.createElement('div');

            //Assigns Container Div Class Name Based on Chess Board Naming
            row.className = `${letters[j]}${i}`;

            //Styles Each Container
            row.style.height = '5.5em';
            row.style.width = '5.5em';
            row.style.margin = '.55em';

            //Creating Alternating Pattern of Box Shadows To Make ChessBoard Pattern
            if (j % 2 === 0 && i % 2 === 0) {
                row.style.boxShadow = '1px 1px 7px 6px rgba(215,255,255,0.55), inset 1px 1px 7px 6px rgba(215,255,255,0.55)'
            }

            if(j % 2 === 0 && i % 2 !== 0) {
                row.style.boxShadow = '1px 1px 7px 6px rgba(0,255,255,0.55), inset 1px 1px 7px 6px rgba(0,255,255,0.55)'
            }

            if(j % 2 !== 0 && i % 2 !== 0) {
                row.style.boxShadow = '1px 1px 7px 6px rgba(215,255,255,0.55), inset 1px 1px 7px 6px rgba(215,255,255,0.55)'
            }

            if(j % 2 !== 0 && i % 2 === 0) {
                row.style.boxShadow = '1px 1px 7px 6px rgba(0,255,255,0.55), inset 1px 1px 7px 6px rgba(0,255,255,0.55)'
            }

            //Appends Each Div To Main Board
            board.appendChild(row);
        }
    }


    //Appends Board To Document Body
    document.body.appendChild(board);
}
