import assert from 'assert/strict';

import koans from './../../../koans/index.js';



const solve = koans.algorithms.backtracking.nQueensProblem;

const MSG = "N queens problem FAIL!\n"
+ "See file: algorithms/backtracking/003-n-queens.js";



function test(){


  assert.deepStrictEqual(check(solve(5)), true, MSG);

  assert.deepStrictEqual(check(solve(6)), true, MSG);

  assert.deepStrictEqual(check(solve(7)), true, MSG);

  assert.deepStrictEqual(check(solve(8)), true, MSG);

  assert.deepStrictEqual(check(solve(9)), true, MSG);

}

function check(board){

    for(let i = 0; i < board.length; i++){

        for(let j = 0; j < board.length; j++){

            if(board[i][j] == 1){

                //Check left streight line
                for(let x = 0; x < j; x++){

                    if(board[i][x] == 1){
                        return false;
                    }

                }

                //Check right streight line
                for(let x = j + 1; x < board[i].length; x++){

                    if(board[i][x] == 1){
                        return false;
                    }

                }

                //Check up streight line
                for(let y = i + 1; y < board.length; y++){

                    if(board[y][j] == 1){
                        return false;
                    }

                }

                //Check down streight line
                for(let y = 0; y < i; y++){

                    if(board[y][j] == 1){
                        return false;
                    }

                }

                //Check up left diagonal
                for(let x = j - 1, y = i + 1; x >= 0 && y < board.length; x--, y++){
                    if(board[y][x] == 1){
                        return false;
                    }
                }

                //Check up right diagonal
                for(let x = j + 1, y = i + 1; x < board.length && y < board.length; x++, y++){
                    if(board[y][x] == 1){
                        return false;
                    }
                }

                //Check bottom right diagonal
                for(let x = j + 1, y = i - 1; x < board.length && y >= 0; x++, y--){
                    if(board[y][x] == 1){
                        return false;
                    }
                }

                //Check bottom right diagonal
                for(let x = j - 1, y = i - 1; x >= 0 && y >= 0; x--, y--){
                    if(board[y][x] == 1){
                        return false;
                    }
                }

            }

        }
    }

    return true;

}


export default test;
