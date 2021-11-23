//Imports possibleMoves()
import { possibleMoves } from "./moving-pieces.js";
//Imports getPosition()
import { getPosition } from "./moving-pieces.js";

export const gamePieces = () => {
    //Declaring Start Positions
    const bKingStart = document.querySelector('.e1');
    const wKingStart = document.querySelector('.e8');
    const bQueenStart = document.querySelector('.d1');
    const wQueenStart = document.querySelector('.d8');
    const bLRookStart = document.querySelector('.a1');
    const bRRookStart = document.querySelector('.h1');
    const wLRookStart = document.querySelector('.a8');
    const wRRookStart = document.querySelector('.h8');
    const bLBishopStart = document.querySelector('.c1');
    const bRBishopStart = document.querySelector('.f1');
    const wLBishopStart = document.querySelector('.c8');
    const wRBishopStart = document.querySelector('.f8');
    const bLKnightStart = document.querySelector('.b1');
    const bRKnightStart = document.querySelector('.g1');
    const wLKnightStart = document.querySelector('.b8');
    const wRKnightStart = document.querySelector('.g8');

    //Creating Kings
    const bKing = createPiece('\u2654');
    bKing.className = 'black';
    bKing.id = 'black-king';
    const wKing = createPiece('\u2654');
    wKing.className = 'white'
    wKing.id = 'white-king';

    //Creating Queens
    const bQueen = createPiece('\u2655');
    bQueen.className = 'black';
    bQueen.id = 'black-queen';
    const wQueen = createPiece('\u2655');
    wQueen.className = 'white';
    wQueen.id = 'white-queen';

    //Creating Rooks
    const bLRook = createPiece('\u2656');
    bLRook.className = 'black';
    bLRook.id = 'black-rook-left';
    const bRRook = createPiece('\u2656');
    bRRook.className = 'black';
    bRRook.id = 'black-rook-right';
    const wLRook = createPiece('\u2656');
    wLRook.className = 'white';
    wLRook.id = 'white-rook-left';
    const wRRook = createPiece('\u2656');
    wRRook.className = 'white';
    wRRook.id = 'white-rook-right';

    //Creating Bishops
    const bLBishop = createPiece('\u2657');
    bLBishop.className = 'black';
    bLBishop.id = 'black-bishop-left';
    const bRBishop = createPiece('\u2657');
    bRBishop.className = 'black';
    bRBishop.id = 'black-bishop-right';
    const wLBishop = createPiece('\u2657');
    wLBishop.className = 'white';
    wLBishop.id = 'white-bishop-left';
    const wRBishop = createPiece('\u2657');
    wRBishop.className = 'white';
    wRBishop.id = 'white-bishop-right';

    //Creating Knights
    const bLKnight = createPiece('\u2658');
    bLKnight.className = 'black';
    bLKnight.id = 'black-knight-left';
    const bRKnight = createPiece('\u2658');
    bRKnight.className = 'black';
    bRKnight.id = 'black-knight-right';
    const wLKnight = createPiece('\u2658');
    wLKnight.className = 'white'
    wLKnight.id = 'white-knight-left';
    const wRKnight = createPiece('\u2658');
    wRKnight.className = 'white';
    wRKnight.id = 'white-knight-right';



    //King EventListeners
    bKing.addEventListener('click', () => {
        //Creates Arr with All Possible Moves
        const res = possibleMoves('king', getParent(bKing));

        //Highlights All Available Tiles Based on res of possibleMoves()
        highLightTiles(res);

        //Moves Piece Based on Second Click
        return movePieceFunc(res, bKing);
    })

    wKing.addEventListener('click', async () => {
        //Creates Arr with All Possible Moves
        const res = possibleMoves('king', getParent(wKing));

        //Highlights All Available Tiles Based on res of possibleMoves()
        highLightTiles(res);

        //Moves Piece Based on Second Click
        return movePieceFunc(res, wKing);
    })


    //Queen EventListeners
    bQueen.addEventListener('click', () => {
        //Creates Arr with All Possible Moves
        const res = possibleMoves('queen', getParent(bQueen));

        //Highlights All Available Tiles Based on res of possibleMoves()
        highLightTiles(res);

        //Moves Piece Based on Second Click
        return movePieceFunc(res, bQueen);
    })

    wQueen.addEventListener('click', () => {
        //Creates Arr with All Possible Moves
        const res = possibleMoves('queen', getParent(wQueen));

        //Highlights All Available Tiles Based on res of possibleMoves()
        highLightTiles(res);

        //Moves Piece Based on Second Click
        return movePieceFunc(res, wQueen);
    })


    //Rook EventListeners
    wRRook.addEventListener('click', () => {
        //Creates Arr with All Possible Moves
        const res = possibleMoves('rook', getParent(wRRook));

        //Highlights All Available Tiles Based on res of possibleMoves()
        highLightTiles(res);

        //Moves Piece Based on Second Click
        return movePieceFunc(res, wRRook);
    })

    wLRook.addEventListener('click', () => {
        //Creates Arr with All Possible Moves
        const res = possibleMoves('rook', getParent(wLRook));

        //Highlights All Available Tiles Based on res of possibleMoves()
        highLightTiles(res);

        //Moves Piece Based on Second Click
        return movePieceFunc(res, wLRook);
    })

    bRRook.addEventListener('click', () => {
        //Creates Arr with All Possible Moves
        const res = possibleMoves('rook', getParent(bRRook));

        //Highlights All Available Tiles Based on res of possibleMoves()
        highLightTiles(res);

        //Moves Piece Based on Second Click
        return movePieceFunc(res, bRRook);
    })

    bLRook.addEventListener('click', () => {
        //Creates Arr with All Possible Moves
        const res = possibleMoves('rook', getParent(bLRook));

        //Highlights All Available Tiles Based on res of possibleMoves()
        highLightTiles(res);

        //Moves Piece Based on Second Click
        return movePieceFunc(res, bLRook);
    })


    //Bishop EventListeners
    wLBishop.addEventListener('click', () => {
        //Creates Arr with All Possible Moves
        const res = possibleMoves('bishop', getParent(wLBishop));

        //Highlights All Available Tiles Based on res of possibleMoves()
        highLightTiles(res);

        //Moves Piece Based on Second Click
        return movePieceFunc(res, wLBishop);
    })

    wRBishop.addEventListener('click', () => {
        //Creates Arr with All Possible Moves
        const res = possibleMoves('bishop', getParent(wRBishop));

        //Highlights All Available Tiles Based on res of possibleMoves()
        highLightTiles(res);

        //Moves Piece Based on Second Click
        return movePieceFunc(res, wRBishop);
    })

    bLBishop.addEventListener('click', () => {
        //Creates Arr with All Possible Moves
        const res = possibleMoves('bishop', getParent(bLBishop));

        //Highlights All Available Tiles Based on res of possibleMoves()
        highLightTiles(res);

        //Moves Piece Based on Second Click
        return movePieceFunc(res, bLBishop);
    })

    bRBishop.addEventListener('click', () => {
        //Creates Arr with All Possible Moves
        const res = possibleMoves('bishop', getParent(bRBishop));

        //Highlights All Available Tiles Based on res of possibleMoves()
        highLightTiles(res);

        //Moves Piece Based on Second Click
        return movePieceFunc(res, bRBishop);
    })


    //Knight EventListeners
    wLKnight.addEventListener('click', () => {
        //Creates Arr with All Possible Moves
        const res = possibleMoves('knight', getParent(wLKnight));

        //Highlights All Available Tiles Based on res of possibleMoves()
        highLightTiles(res);

        //Moves Piece Based on Second Click
        return movePieceFunc(res, wLKnight);
    })

    wRKnight.addEventListener('click', () => {
        //Creates Arr with All Possible Moves
        const res = possibleMoves('knight', getParent(wRKnight));

        //Highlights All Available Tiles Based on res of possibleMoves()
        highLightTiles(res);

        //Moves Piece Based on Second Click
        return movePieceFunc(res, wRKnight);
    })

    bLKnight.addEventListener('click', () => {
        //Creates Arr with All Possible Moves
        const res = possibleMoves('knight', getParent(bLKnight));

        //Highlights All Available Tiles Based on res of possibleMoves()
        highLightTiles(res);

        //Moves Piece Based on Second Click
        return movePieceFunc(res, bLKnight);
    })

    bRKnight.addEventListener('click', () => {
        //Creates Arr with All Possible Moves
        const res = possibleMoves('knight', getParent(bRKnight));

        //Highlights All Available Tiles Based on res of possibleMoves()
        highLightTiles(res);

        //Moves Piece Based on Second Click
        return movePieceFunc(res, bRKnight);
    })


    //Array for Pawn Start Positions
    let bPawnArr = [];
    let start = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

    let wPawnArr = [];

    //Loop Pushing Start Position Names into Array
    for (let i = 1; i < 9; i++) {
        bPawnArr.push(`bPawn${i}`);
        wPawnArr.push(`wParn${i}`);
    }


    //Id for Pawns
    let bId = 1;
    let wId = 1;
    //Loop Creating 8 Of Each Pawn
    for (let i = 0; i < 8; i++) {
        //Establishing Black Pawn Starting Class
        let bStart = "." + start[i] + 2;
        const bStartDiv = document.querySelector(`${bStart}`)

        //Appending Created Pawns to Start Position
        bStartDiv.appendChild(bPawnArr[i] = createBPawn('\&#x2659', bId));
        //Incrementing Id Counter
        bId++;

        //Establishing White Pawn Starting Class
        let wStart = '.' + start[i] + 7;
        const wStartDiv = document.querySelector(`${wStart}`);

        //Appending Created Pawns to Start Position
        wStartDiv.appendChild(wPawnArr[i] = createWPawn('\&#x2659', wId));
        //Incrementing Id Counter
        wId++;
    }


    //Creating EventListener for White Pawns
    for (let i = 1; i < 9; i++) {
        //Establishing var to querySelect Pawns With
        const val = `#wPawn${i}`;
        const piece = document.querySelector(val);

        //Establishing Each Pawns Parent
        const parent = piece.parentNode;

        //Adding EventListener to Each Pawn
        piece.addEventListener('click', () => {
            //Checking if Pawn has moved from Starting Position
            if (parent.id === 'a7' || parent.id === 'b7' || parent.id === 'c7' || parent.id === 'd7' || parent.id === 'e7' || parent.id === 'f7' || parent.id === 'g7' || parent.id === 'h7') {
                //Fetching Potential Spots to Move
                const res = possibleMoves('whitePawnMove', getParent(piece), true);

                //Highlighting Potential Move Spaces
                highLightTiles(res);

                //Moves Piece Based on Second Click
                return moveWPawnFunc(res, piece);
            }
            else {
                //Not in Starting Position
                const res = possibleMoves('whitePawnMove', getParent(piece));

                //Highlighting Potential Move Spaces
                highLightTiles(res);

                //Moves Piece Based on Second Click
                return moveWPawnFunc(res, piece);
            }
        })
    }


    //Creating EventListeners for Black Pawns
    for (let i = 1; i < 9; i++) {

        //Establishes Var to querySelect Each Pawn
        const val = `#bPawn${i}`;
        const piece = document.querySelector(val);

        //Establishes Parent of Each Pawn
        const parent = piece.parentNode;

        //Adding EventListener to Each Pawn
        piece.addEventListener('click', () => {

            //Checks if Pawn has moved from Starting Position
            if (parent.id === 'a2' || parent.id === 'b2' || parent.id === 'c2' || parent.id === 'd2' || parent.id === 'e2' || parent.id === 'f2' || parent.id === 'g2' || parent.id === 'h2') {
                //Gets All Possible Moves for Piece if Moved
                const res = possibleMoves('blackPawnMove', getParent(piece), true);

                //Highlights All Possible Moves for Piece
                highLightTiles(res, true);

                //Moves Piece Based on Second Click
                return moveBPawnFunc(res, piece);
            }
            else {
                //Gets All Possible Moves for Piece if Not Moved
                const res = possibleMoves('blackPawnMove', getParent(piece));

                //Highlights All Possible Moves for Piece
                highLightTiles(res);

                //Moves Piece Based on Second Click
                return moveBPawnFunc(res, piece);
            }
        })
    }

    //Appening Kings to Start Position
    bKingStart.appendChild(bKing);
    wKingStart.appendChild(wKing);

    //Appending Queens to Start Position
    bQueenStart.appendChild(bQueen);
    wQueenStart.appendChild(wQueen);

    //Appending Rooks to Start Position
    bLRookStart.appendChild(bLRook);
    bRRookStart.appendChild(bRRook);
    wLRookStart.appendChild(wLRook);
    wRRookStart.appendChild(wRRook);

    //Appending Bishops to Start Position
    bLBishopStart.appendChild(bLBishop);
    bRBishopStart.appendChild(bRBishop);
    wLBishopStart.appendChild(wLBishop);
    wRBishopStart.appendChild(wRBishop);

    //Appending Knights to Start Position
    bLKnightStart.appendChild(bLKnight);
    bRKnightStart.appendChild(bRKnight);
    wLKnightStart.appendChild(wLKnight);
    wRKnightStart.appendChild(wRKnight);
}

//Helper Function To Create All Non Pawn Pieces
const createPiece = (pieceId) => {
    //Creates Element for New Piece
    const piece = document.createElement('div');

    //Sets InnerHTML to Unicode with pieceId
    piece.innerHTML = pieceId;

    //Styles Piece
    piece.style.color = 'white';
    piece.style.fontSize = '4em';
    piece.style.marginLeft = '.2em';
    return piece;
}

//Helper Function to Create White Pawns
const createWPawn = (pieceId, id) => {
    //Creates Element for White Pawn
    const piece = document.createElement('div');

    //Sets InnerHTML to Unicode with pieceId
    piece.innerHTML = pieceId;

    //Styles Piece
    piece.style.color = 'white';
    piece.style.fontSize = '4em';
    piece.style.marginLeft = '.2em';

    //Sets Unique Class Name for White Pawn
    piece.className = 'white';
    piece.id = `wPawn${id}`;

    return piece;
}


//Helper Function to Create Black Pawns
const createBPawn = (pieceId, id) => {
    //Creates Element for Black Pawn
    const piece = document.createElement('div');

    //Sets InnerHTML to Unicode with pieceId
    piece.innerHTML = pieceId;

    //Styles Piece
    piece.style.color = 'white';
    piece.style.fontSize = '4em';
    piece.style.marginLeft = '.2em';

    //Sets Unique Class Name for Black Pawn
    piece.className = 'black'
    piece.id = `bPawn${id}`;

    return piece;
}


//Helper Function to Move White Pawn
const moveWPawn = (pieceId, id) => {
    //Creates New Element to Replace Old White Pawn
    const piece = document.createElement('div');

    //Sets InnerHTML to Unicode with pieceId
    piece.innerHTML = pieceId;

    //Styles Piece
    piece.style.color = 'white';
    piece.style.fontSize = '4em';
    piece.style.marginLeft = '.2em';

    //Reuses Class Name of Deleted Pawn for New White Pawn
    piece.className = 'white';
    piece.id = id;

    return piece;
}


//Helper Function to Move Black Pawn
const moveBPawn = (pieceId, id) => {
    //Creates New Element to Replace Old Black Pawn
    const piece = document.createElement('div');

    //Sets InnerHTML to Unicode with pieceId
    piece.innerHTML = pieceId;

    //Styles Piece
    piece.style.color = 'white';
    piece.style.fontSize = '4em';
    piece.style.marginLeft = '.2em';

    //Reuses Class Name of Deleted Pawn for New Black Pawn
    piece.className = 'white';
    piece.id = id;

    return piece;
}


//Helper Function to Piece's Parent Node
const getParent = (piece) => {
    //Gets Parent Node of piece
    const parent = piece.parentNode;

    //Gets className of Parent
    const className = parent.className;

    //Returns position in matrix of className
    return getPosition(className);
}


//Helper Function that Highlights Tiles Based on Available Spaces to Move to From possibleMoves()
const highLightTiles = (res) => {
    //Initializes Outer Loop To Loop Through res Arr
    for (let i = 0; i < res.length; i++) {

        //Initializes Inner Loop to Loop Through SubArrays of Directions to Move
        for (let j = 0; j < res[i].length; j++) {
            //Creates Var to Store Each Value of subArr of res Arr
            const val = `.${res[i][j]}`;

            //Selects Tiles Based on Each val in subArr
            const tiles = document.querySelector(val);

            //If Tile Has No Children Nodes Highlights Tile as Position Able to be Moved To
            if (tiles.children.length < 1) {
                //Changes BoxShadow of Spaces Allowed in Move
                tiles.style.boxShadow = '1px 1px 7px 6px rgba(211, 11, 115, 0.8), inset 1px 1px 7px 6px rgba(211, 11, 115, 0.8';
            } else {
                //Increments to Next Sub Array in res Arr
                return i++;
            }
        }
    }
}


//Helper Function to Move White Pawn
const moveWPawnFunc = (res, piece) => {
    //Initializes Outer Loop to Loop Through res Arr
    for (let i = 0; i < res.length; i++) {

        //Initializes Inner Loop to Loop Through Each subArr of res Arr
        for (let j = 0; j < res[i].length; j++) {

            //Creates Var to Store Each Value of subArr of res Arr
            const keyVal = `.${res[i][j]}`;

            //Selects Tiles Based on Each Val in the subArr
            const tile = document.querySelector(keyVal)

            //Adds EventListener for Each Tile
            tile.addEventListener('click', () => {
                //Stores Old Piece Class Name into Var
                const newPiece = piece.className;

                //Stores Old Piece InnerText into Var
                const newPieceText = piece.innerText;

                //Removes Old Piece
                piece.remove();

                //Creates new White Pawn and Stores into Var
                const movedPiece = moveWPawn(newPieceText, newPiece);

                //Appends New White Pawn to Clicked Tile
                tile.appendChild(movedPiece);
            })
        }
    }
}


//Helper Function to Move Black Pawn
const moveBPawnFunc = (res, piece) => {
    //Initializes Outer Loop to Loop Through res Arr
    for (let i = 0; i < res.length; i++) {

        //Creates Var to Store Each Value of subArr of res Arr
        for (let j = 0; j < res[i].length; j++) {

            //Creates Var to Store Each Value of subArr of res Arr
            const keyVal = `.${res[i][j]}`;

            //Selects Tiles Based on Each Val in the subArr
            const tile = document.querySelector(keyVal)

            //Adds EventListener for Each Tile
            tile.addEventListener('click', () => {
                //Stores Old Piece Class Name into Var
                const newPiece = piece.className;

                //Stores Old Piece InnerText into Var
                const newPieceText = piece.innerText;

                //Removes Old Piece
                piece.remove();

                //Creates new Black Pawn and Stores into Var
                const movedPiece = moveBPawn(newPieceText, newPiece);

                //Appends New Black Pawn to Clicked Tile
                tile.appendChild(movedPiece);
            })
        }
    }
}


//Helper Function to Move All Non Pawn Pieces
const movePieceFunc = (res, piece) => {
    //Initializes Outer Loop to Loop Through res Arr
    for (let i = 0; i < res.length; i++) {

        //Creates Var to Store Each Value of subArr of res Arr
        for (let j = 0; j < res[i].length; j++) {
            //Creates Var to Store Each Value of subArr of res Arr
            const keyVal = `.${res[i][j]}`;

            //Selects Tiles Based on Each Val in the subArr
            const tile = document.querySelector(keyVal)

            //Adds EventListener for Each Tile
            tile.addEventListener('click', () => {
                //Stores Old Piece Class Name into Var
                const newPiece = piece.className;
                const newId = piece.id;

                //Stores Old Piece InnerText into Var
                const newPieceText = piece.innerText;

                //Removes Old Piece
                piece.remove();

                //Creates new Piece and Stores into Var
                const movedPiece = createPiece(newPieceText);

                //Assigns Class and Id
                movedPiece.className = newPiece;
                movedPiece.id = newId;

                //Appends New Piece to Clicked Tile
                tile.appendChild(movedPiece);
            })
        }
    }
}
