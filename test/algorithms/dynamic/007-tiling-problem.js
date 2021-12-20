import assert from 'assert/strict';

import koans from './../../../koans/index.js';



const solve = koans.algorithms.dynamic.tilingProblem;

const MSG = "Tiling problem FAIL!\n"
+ "See file: algorithms/dynamic/007-tiling-problem.js";



function test(){

  assert.deepStrictEqual(solve(3), 3, MSG);

  assert.deepStrictEqual(solve(4), 5, MSG);

  assert.deepStrictEqual(solve(5), 8, MSG);

  assert.deepStrictEqual(solve(6), 13, MSG);

}



export default test;
