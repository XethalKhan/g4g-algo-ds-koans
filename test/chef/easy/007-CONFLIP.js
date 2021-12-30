import assert from 'assert/strict';

import koans from './../../../koans/index.js';



const solve = koans.chef.easy.conflip;

const MSG = "Codechef CONFLIP problem FAIL!\n"
+ "See file: chef/easy/007-CONFLIP.js";



function test(){

  assert.deepStrictEqual(solve(true, 5, true), 2, MSG);

  assert.deepStrictEqual(solve(true, 5, false), 3, MSG);

  assert.deepStrictEqual(solve(false, 7, false), 3, MSG);

  assert.deepStrictEqual(solve(false, 7, true), 4, MSG);

}



export default test;
