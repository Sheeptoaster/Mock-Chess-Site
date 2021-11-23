export const possibleMoves = (piece, position, moved = false) => {
    //If Statements to Determine which Function to Run on invoke
    if (piece === 'king') return kingGetNeighbors(position, grid);
    if (piece === 'queen') return queenGetNeighbors(position, grid);
    if (piece === 'knight') return knightGetNeighbors(position, grid);
    if (piece === 'rook') return rookGetNeighbors(position, grid);
    if (piece === 'bishop') return bishopGetNeighbors(position, grid);
    if (piece === 'whitePawnMove') {
        return whitePawnGetNeighbors(position, grid, moved);
    }
    if (piece === 'blackPawnMove') {
        return blackPawnGetNeighbors(position, grid, moved);
    }
}

//Establishes Matrix With Class Names and Positions of All Divs on Board
const grid = [
    [`a8`, 'b8', 'c8', 'd8', 'e8', 'f8', 'g8', 'h8'],
    ['a7', 'b7', 'c7', 'd7', 'e7', 'f7', 'g7', 'h7'],
    ['a6', 'b6', 'c6', 'd6', 'e6', 'f6', 'g6', 'h6'],
    ['a5', 'b5', 'c5', 'd5', 'e5', 'f5', 'g5', 'h5'],
    ['a4', 'b4', 'c4', 'd4', 'e4', 'f4', 'g4', 'h4'],
    ['a3', 'b3', 'c3', 'd3', 'e3', 'f3', 'g3', 'h3'],
    ['a2', 'b2', 'c2', 'd2', 'e2', 'f2', 'g2', 'h2'],
    ['a1', 'b1', 'c1', 'd1', 'e1', 'f1', 'g1', 'h1']
]

export const getPosition = (str) => {
    //Initializes Outer Loop to Search Through Rows on Matrix(grid)
    for (let i = 0; i < grid.length; i++) {

        //Initializes Inner Loop to Search Through Col on Matrix(grid)
        for (let j = 0; j < grid[i].length; j++) {

            //Checks if Val at Position[i][j] is Equal to Str Param
            if (grid[i][j] === str) {
                //Creates PositionArr
                let positionArr = [];

                //Pushes row(i) and col(grid[i].indexOf(str)) into positionArr
                positionArr.push(i);
                positionArr.push(grid[i].indexOf(str));

                //Returns positionArr
                return positionArr;
            }
        }
    }
}

//Checks for Possible Moves for King
const kingGetNeighbors = (node, matrix) => {
    //Initializes Arrs
    let neighborArr = [];
    let top = [];
    let bottom = [];
    let right = [];
    let left = [];
    let topRight = [];
    let topLeft = [];
    let bottomRight = [];
    let bottomLeft = [];

    //Sets Row and Col Vars
    let row = node[0];
    let col = node[1];

    //Checks Top
    if (row > 0) {
        top.push(matrix[row - 1][col]);
    }
    //Checks Bottom
    if (row < matrix.length - 1) {
        bottom.push(matrix[row + 1][col]);
    }

    //Checks Right
    if (col < matrix[row].length - 1) {
        right.push(matrix[row][col + 1]);
    }

    //Checks Left
    if (col > 0) {
        left.push(matrix[row][col - 1]);
    }


    //Checks Top Right
    if (row > 0 && col < matrix[row].length - 1) {
        topRight.push(matrix[row - 1][col + 1]);
    }

    //Checks Top Left
    if (row > 0 && col > 0) {
        topLeft.push(matrix[row - 1][col - 1]);
    }

    //Checks Bottom Left
    if (row < matrix.length - 1 && col > 0) {
        bottomLeft.push(matrix[row + 1][col - 1]);
    }

    //Checks Bottom Right
    if (row < matrix.length - 1 && col < matrix[row].length - 1) {
        bottomRight.push(matrix[row + 1][col + 1]);
    }

    //Checks if subArrs have had a value pushed
    //If True Then Pushes subArr into mainArr
    if (top.length) neighborArr.push(top);
    if (bottom.length) neighborArr.push(bottom);
    if (left.length) neighborArr.push(left);
    if (right.length) neighborArr.push(right);

    if (topRight.length) neighborArr.push(topRight);
    if (topLeft.length) neighborArr.push(topLeft);
    if (bottomRight.length) neighborArr.push(bottomRight);
    if (bottomLeft.length) neighborArr.push(bottomLeft);

    //Returns mainArr with subArrs Nested
    return neighborArr;
}

const queenGetNeighbors = (node, matrix) => {
    //Initializes Arrs
    let neighborArr = [];
    let top = [];
    let bottom = [];
    let right = [];
    let left = [];
    let topRight = [];
    let topLeft = [];
    let bottomRight = [];
    let bottomLeft = [];

    //Sets Row and Col Vars
    let row = node[0];
    let col = node[1];

    //Checks Up
    while (row > 0) {
        top.push(matrix[row - 1][col]);
        row--;
    }


    //Resets Row and Col After While Loop Increments and Decrements
    row = node[0];
    col = node[1];
    //Checks Down
    while (row < matrix.length - 1) {
        bottom.push(matrix[row + 1][col]);
        row++;
    }


    //Resets Row and Col After While Loop Increments and Decrements
    row = node[0];
    col = node[1];
    //Checks Right
    while (col < matrix[row].length - 1) {
        right.push(matrix[row][col + 1]);
        col++;
    }


    //Resets Row and Col After While Loop Increments and Decrements
    row = node[0];
    col = node[1];
    //Checks Left
    while (col > 0) {
        left.push(matrix[row][col - 1]);
        col--;
    }


    //Resets Row and Col After While Loop Increments and Decrements
    row = node[0];
    col = node[1];
    //Checks Top Right
    while (row > 0 && col < matrix[row].length - 1) {
        topRight.push(matrix[row - 1][col + 1]);
        row--;
        col++;
    }


    //Resets Row and Col After While Loop Increments and Decrements
    row = node[0];
    col = node[1];
    //Checks Top Left
    while (row > 0 && col > 0) {
        topLeft.push(matrix[row - 1][col - 1]);
        row--;
        col--;
    }


    //Resets Row and Col After While Loop Increments and Decrements
    row = node[0];
    col = node[1];
    //Checks Bottom Left
    while (row < matrix.length - 1 && col > 0) {
        bottomLeft.push(matrix[row + 1][col - 1]);
        row++;
        col--;
    }


    //Resets Row and Col After While Loop Increments and Decrements
    row = node[0];
    col = node[1];
    //Checks Bottom Right
    while (row < matrix.length - 1 && col < matrix[row].length - 1) {
        bottomRight.push(matrix[row + 1][col + 1]);
        row++;
        col++;

    }


    //Checks if subArrs have had a value pushed
    //If True Then Pushes subArr into mainArr
    if (top.length) neighborArr.push(top);
    if (bottom.length) neighborArr.push(bottom);
    if (right.length) neighborArr.push(right);
    if (left.length) neighborArr.push(left);

    if (topRight.length) neighborArr.push(topRight);
    if (topLeft.length) neighborArr.push(topLeft);
    if (bottomLeft.length) neighborArr.push(bottomLeft);
    if (bottomRight.length) neighborArr.push(bottomRight);


    //Returns mainArr with subArrs Nested
    return neighborArr;
}

const knightGetNeighbors = (node, matrix) => {
    //Initializes Arrs
    let neighborrArr = [];
    let topLeft = [];
    let topRight = [];
    let bottomLeft = [];
    let bottomRight = [];
    let rightUp = [];
    let rightDown = [];
    let leftUp = [];
    let leftDown = [];


    //Sets Row and Col Vars
    let row = node[0];
    let col = node[1];

    //Check Top Left
    if (row > 1 && col > 0) {
        topLeft.push(matrix[row - 2][col - 1]);
    }

    //Check Top Right
    if (row > 1 && col < matrix[row].length - 1) {
        topRight.push(matrix[row - 2][col + 1]);
    }

    //Check Bottom Left
    if (row < matrix.length - 2 && col > 0) {
        bottomLeft.push(matrix[row + 2][col - 1]);
    }

    //Check Bottom Right
    if (row < matrix.length - 2 && col < matrix[row].length - 1) {
        bottomRight.push(matrix[row + 2][col + 1]);
    }

    //Check Right Up
    if (row > 0 && col < matrix[row].length - 2) {
        rightUp.push(matrix[row - 1][col + 2]);
    }

    //Check Right Down
    if (row < matrix.length - 1 && col < matrix[row].length - 2) {
        rightDown.push(matrix[row + 1][col + 2])
    }

    //Check Left Up
    if (row > 0 && col > 1) {
        leftUp.push(matrix[row - 1][col - 2]);
    }

    //Check Left Down
    if (row < matrix.length - 1 && col > 1) {
        leftDown.push(matrix[row + 1][col - 2]);
    }


    //Checks if subArrs have had a value pushed
    //If True Then Pushes subArr into mainArr
    if(topLeft.length) neighborrArr.push(topLeft)
    if(topRight.length) neighborrArr.push(topRight)
    if(bottomLeft.length) neighborrArr.push(bottomLeft)
    if(bottomRight.length) neighborrArr.push(bottomRight)
    if(leftUp.length) neighborrArr.push(leftUp)
    if(leftDown.length) neighborrArr.push(leftDown)
    if(rightUp.length) neighborrArr.push(rightUp)
    if(rightDown.length) neighborrArr.push(rightDown)


    //Returns mainArr with subArrs Nested
    return neighborrArr;
}

const rookGetNeighbors = (node, matrix) => {
    //Initializes Arrs
    let neighborArr = [];
    let up = [];
    let down = [];
    let right = [];
    let left = [];


    //Sets Row and Col Vars
    let row = node[0];
    let col = node[1];

    //Checks Up
    while (row > 0) {
        up.push(matrix[row - 1][col])
        row--;
    }



    //Checks Down
    //Resets Row and Col After While Loop Increments and Decrements
    row = node[0];
    col = node[1];
    while (row < matrix.length - 1) {
        down.push(matrix[row + 1][col]);
        row++
    }


    //Checks Right
    //Resets Row and Col After While Loop Increments and Decrements
    row = node[0];
    col = node[1];
    while (col < matrix[row].length - 1) {
        right.push(matrix[row][col + 1])
        col++
    }


    //Checks Left
    //Resets Row and Col After While Loop Increments and Decrements
    row = node[0];
    col = node[1];
    while (col > 0) {
        left.push(matrix[row][col - 1])
        col--;
    }


    //Checks if subArrs have had a value pushed
    //If True Then Pushes subArr into mainArr
    if(up.length) neighborArr.push(up);
    if(down.length) neighborArr.push(down);
    if(right.length) neighborArr.push(right);
    if(left.length) neighborArr.push(left);


    //Returns mainArr with subArrs Nested
    return neighborArr;
}

const bishopGetNeighbors = (node, matrix) => {
    //Initializes Arrs
    let neighborArr = [];
    let topRight = [];
    let topLeft = [];
    let bottomRight = [];
    let bottomLeft = [];


    //Sets Row and Col Vars
    let row = node[0];
    let col = node[1];

    //Checks Top Right
    while (row > 0 && col < matrix[row].length - 1) {
        topRight.push(matrix[row - 1][col + 1]);
        row--;
        col++;
    }


    //Resets Row and Col After While Loop Increments and Decrements
    row = node[0];
    col = node[1];
    //Checks Top Left
    while (row > 0 && col > 0) {
        topLeft.push(matrix[row - 1][col - 1]);
        row--;
        col--;
    }


    //Resets Row and Col After While Loop Increments and Decrements
    row = node[0];
    col = node[1];
    //Checks Bottom Left
    while (row < matrix.length - 1 && col > 0) {
        bottomLeft.push(matrix[row + 1][col - 1]);
        row++;
        col--;
    }


    //Resets Row and Col After While Loop Increments and Decrements
    row = node[0];
    col = node[1];
    //Checks Bottom Right
    while (row < matrix.length - 1 && col < matrix[row].length - 1) {
        bottomRight.push(matrix[row + 1][col + 1]);
        row++;
        col++;

    }


    //Checks if subArrs have had a value pushed
    //If True Then Pushes subArr into mainArr
    if(topRight.length) neighborArr.push(topRight);
    if(topLeft.length) neighborArr.push(topLeft);
    if(bottomLeft.length) neighborArr.push(bottomLeft);
    if(bottomRight.length) neighborArr.push(bottomRight);

    //Returns mainArr with subArrs Nested
    return neighborArr;
}

const whitePawnGetNeighbors = (node, matrix, moved = false) => {
    //Initializes Arrs
    let neighborArr = [];
    let firstMove = [];
    let move = [];


    //Sets Row and Col Vars
    let row = node[0];
    let col = node[1];

    //Checks if Moved Param Has A Truthy Value Entered
    if (moved) {
        firstMove.push(matrix[row + 2][col]);
        firstMove.push(matrix[row+1][col]);
        neighborArr.push(firstMove);
        return neighborArr;
    }

    //Else If Moved is Falsey Value
    if (row < matrix.length - 1) {
        move.push(matrix[row + 1][col]);
    }

    //Checks if subArrs have had a value pushed
    //If True Then Pushes subArr into mainArr
    if(move.length) neighborArr.push(move);

    //Returns mainArr with subArrs Nested
    return neighborArr;
}

const blackPawnGetNeighbors = (node, matrix, moved = false) => {
    //Initializes Arrs
    let neighborArr = [];
    let firstMove = [];
    let move = [];


    //Sets Row and Col Vars
    let row = node[0];
    let col = node[1];

    //Checks if Moved Param has a Truthy Value Entered
    if (moved) {
        firstMove.push(matrix[row - 2][col]);
        firstMove.push(matrix[row - 1][col])
        neighborArr.push(firstMove)
        return neighborArr;
    }

    //Else If Moved Is Falsey Value
    if (row > 0) {
        move.push(matrix[row - 1][col]);
    }

    //Checks if subArrs have had a value pushed
    //If True Then Pushes subArr into mainArr
    if(move) neighborArr.push(move);

    //Returns mainArr with subArrs Nested
    return neighborArr;
}


//Currently Unused
const whitePawnAttack = (node, matrix) => {
    //Initializes Arr;
    let potentialAttack = [];


    //Sets Row and Col Vars
    let row = node[0];
    let col = node[1];

    //Checks Left
    if (row < matrix.length - 1 && col > 0) {
        potentialAttack.push(matrix[row + 1][col - 1]);
    }

    //Checks Right
    if (row < matrix.length - 1 && col < matrix[row].length - 1) {
        potentialAttack.push(matrix[row + 1][col + 1]);
    }

    //Returns mainarr
    return potentialAttack;
}


//Currentl Unused
const blackPawnAttack = (node, matrix) => {
    //Initializes Arr
    let potentialAttack = [];


    //Sets Row and Col Vars
    let row = node[0];
    let col = node[1];

    //Checks Left
    if (row > 0 && col > 0) {
        potentialAttack.push(matrix[row - 1][col - 1]);
    }

    //Checks Right
    if (row > 0 && col < matrix[row].length - 1) {
        potentialAttack.push(matrix[row - 1][col + 1]);
    }

    //Returns mainArr
    return potentialAttack;
}
