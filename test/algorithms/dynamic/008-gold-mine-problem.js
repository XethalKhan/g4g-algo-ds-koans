import assert from 'assert/strict';

import koans from './../../../koans/index.js';



const solve = koans.algorithms.dynamic.goldMineProblem;

const MSG = "Gold mine problem FAIL!\n"
+ "See file: algorithms/dynamic/008-gold-mine-problem.js";



function test(){

  let test1 = [[1, 3, 3], [2, 1, 4], [0, 6, 4]];

  assert.deepStrictEqual(solve(test1, 3, 3), 12, MSG);

  let test2 = [[1, 3, 1, 5], [2, 2, 4, 1], [5, 0, 2, 3], [0, 6, 1, 2]];

  assert.deepStrictEqual(solve(test2, 4, 4), 16, MSG);

  let test3 = [[10, 33, 13, 15], [22, 21, 4, 1], [5, 0, 2, 3], [0, 6, 14, 2]];

  assert.deepStrictEqual(solve(test3, 4, 4), 83, MSG);

}



export default test;
