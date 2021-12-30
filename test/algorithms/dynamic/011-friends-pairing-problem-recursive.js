import assert from 'assert/strict';

import koans from './../../../koans/index.js';



const solve = koans.algorithms.dynamic.friendsPairingProblemRecursive;

const MSG = "Friends pairing problem - recursive FAIL!\n"
+ "See file: algorithms/dynamic/011-friends-pairing-problem-recursive.js";



function test(){

  assert.deepStrictEqual(solve(1), 1, MSG);

  assert.deepStrictEqual(solve(2), 2, MSG);

  assert.deepStrictEqual(solve(3), 4, MSG);

  assert.deepStrictEqual(solve(4), 10, MSG);

}



export default test;
