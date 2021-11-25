/*
A Maze is given as N*N binary matrix of blocks where source block is the upper left most block i.e., maze[0][0] 
and destination block is lower rightmost block i.e., maze[N-1][N-1]. A rat starts from source and has to reach
the destination. The rat can move only in two directions: forward and down. 

In the maze matrix, 0 means the block is a dead end and 1 means the block can be used in the path
from source to destination. Note that this is a simple version of the typical Maze problem. For example,
a more complex version can be that the rat can move in 4 directions and a more complex version can be
with a limited number of moves.

TODO: make complex versions mentioned in paragraph above.

See: https://www.geeksforgeeks.org/rat-in-a-maze-backtracking-2/

*/

const moveX = [1, 0];
const moveY = [0, 1];


function move(x, y, maze, path){

    if(x > 3 || y > 3 || maze[x][y] == 0){
        return false;
    }

    path.push({x: x, y: y});

    if(x == maze.length - 1 && y == maze[0].length - 1){
        return true;
    }

    for(let i = 0; i < 2; i++){

        let nextX = x + moveX[i];
        let nextY = y + moveY[i];

        if(move(nextX, nextY, maze, path)){
            return true;
        }

    }

    path.pop();

    return false;

}


function solve(maze){

    let path = new Array();

    let sol = move(0, 0, maze, path);

    return path;

}

export default solve;