import assert from 'assert/strict';

import koans from './../../../koans/index.js';



const solve = koans.chef.medium.coins;

const MSG = "Codechef COINS problem FAIL!\n"
+ "See file: chef/medium/001-COINS.js";



function test(){

  assert.deepStrictEqual(solve(2), 2, MSG);

  assert.deepStrictEqual(solve(12), 13, MSG);

  assert.deepStrictEqual(solve(24), 27, MSG);

  assert.deepStrictEqual(solve(48), 57, MSG);

}



export default test;
