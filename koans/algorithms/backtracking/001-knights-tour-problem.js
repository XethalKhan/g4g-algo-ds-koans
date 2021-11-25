const moveX = [2, 2, 1, -1, -2, -2, -1, 1];
const moveY = [1, -1, -2, -2, 1, -1, 2, 2];

function isMoveValid(x, y, board){
    return (x >= 0 && x < board.length && y >= 0 && y < board[0].length && board[x][y] == -1);
}

function printBoard(board){
    for(let i = 0; i < board.length; i++){
        console.log(board[i].toString());
    }
}

function move(x, y, board, n){

    if(n == board.length * board[0].length){
        return true;
    }

    for(let i = 0; i < 8; i++){
        let nextX = x + moveX[i];
        let nextY = y + moveY[i];

        if(isMoveValid(nextX, nextY, board)){

            board[nextX][nextY] = n;

            if(move(nextX, nextY, board, n + 1)){
                return true;
            }else{
                board[nextX][nextY] = -1;
            }

        }
    }

    return false;

}

function solve(height, width){

    if(height < 1 || width < 1){
        return false;
    }

    let board = new Array(height);
    for(var i = 0; i < board.length; i++)
    {
        board[i] = new Array(width);
    }

    for(let i = 0; i < height; i++){
        for(let j = 0; j < width; j++){
            board[i][j] = -1;
        }
    }

    board[0][0] = 0;

    if(move(0, 0, board, 1)){
        return true;
    }

    return false;

}

export default solve;