import assert from 'assert/strict';

import koans from './../../../koans/index.js';



const solve = koans.chef.hard.cardshuf;

const MSG = "Codechef CARDSHUF problem FAIL!\n"
+ "See file: chef/hard/009-CARDSHUF.js";



function test(){

  assert.deepStrictEqual(solve(10, [{a: 6, b: 2, c: 2}, {a: 5, b: 3, c: 6}]), [1, 2, 8, 7, 3, 9, 6, 5, 4, 10], MSG);

  assert.deepStrictEqual(solve(5, [{a: 2, b: 2, c: 3}, {a: 3, b: 1, c: 1}]), [1, 4, 2, 5, 3], MSG);

}



export default test;
