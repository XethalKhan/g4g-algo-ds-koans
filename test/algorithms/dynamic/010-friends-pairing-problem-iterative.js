import assert from 'assert/strict';

import koans from './../../../koans/index.js';



const solve = koans.algorithms.dynamic.friendsPairingProblemIterative;

const MSG = "Friends pairing problem - iterative FAIL!\n"
+ "See file: algorithms/dynamic/010-friends-pairing-problem-iterative.js";



function test(){

  assert.deepStrictEqual(solve(1), 1, MSG);

  assert.deepStrictEqual(solve(2), 2, MSG);

  assert.deepStrictEqual(solve(3), 4, MSG);

  assert.deepStrictEqual(solve(4), 10, MSG);

}



export default test;
