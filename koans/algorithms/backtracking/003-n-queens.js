

function solve(n){

    let board = new Array(n);

    for(let i = 0; i < n; i++){
        board[i] = new Array(n);
    }

    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            board[i][j] = 0;
        }
    }

    place(board, 0, n);

    return board;

}

function place(board, column, n){

    if(column >= n){
        return board;
    }

    for(let row = 0; row < n; row++){
        if(isSafe(board, row, column, n)){
            board[row][column] = 1;

            if(place(board, column + 1, n) != null){
                return board;
            }

            board[row][column] = 0;
        }
    }

    return null;

}

function isSafe(board, row, column, n){

    for(let i = 0; i < column; i++){
        if(board[row][i] == 1){
            return false;
        }
    }

    for(let i = row, j = column; i >= 0 && j >= 0; i--, j--){
        if(board[i][j] == 1){
            return false;
        }
    }

    for(let i = row, j = column; i < n && j >= 0; i++, j--){
        if(board[i][j] == 1){
            return false;
        }
    }

    return true;

}

export default solve;