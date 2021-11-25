import assert from 'assert/strict';

import koans from './../../../koans/index.js';



const solve = koans.algorithms.backtracking.knightTourProblem;

const MSG = "Knight tour problem FAIL!\n"
+ "See file: algorithms/backtracking/001-knight-tour-problem.js";



function test(){

  assert.deepStrictEqual(solve(0, 0), false, MSG);

  assert.deepStrictEqual(solve(4, 4), false, MSG);

  assert.deepStrictEqual(solve(4, 5), true, MSG);

  assert.deepStrictEqual(solve(5, 5), true, MSG);

}



export default test;
