import assert from 'assert/strict';

import koans from './../../../koans/index.js';



const solve = koans.algorithms.backtracking.ratInMazeSimpleProblem;

const MSG = "Rat in a maze problem FAIL!\n"
+ "See file: algorithms/backtracking/002-rat-in-a-maze-problem.js";



function test(){

  let maze = [
    [1, 0, 0, 0],
    [1, 1, 0, 1],
    [0, 1, 0, 0],
    [1, 1, 1, 1]
  ];

  let sol = [
    { x: 0, y: 0 },
    { x: 1, y: 0 },
    { x: 1, y: 1 },
    { x: 2, y: 1 },
    { x: 3, y: 1 },
    { x: 3, y: 2 },
    { x: 3, y: 3 }
  ];

  assert.deepStrictEqual(solve(maze), sol, MSG);

}


export default test;
