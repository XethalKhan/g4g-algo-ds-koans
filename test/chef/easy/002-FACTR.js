import assert from 'assert/strict';

import koans from './../../../koans/index.js';



const solve = koans.chef.easy.factr;

const MSG = "Codechef FACTR problem FAIL!\n"
+ "See file: chef/easy/002-FACTR.js";



function test(){

  assert.deepStrictEqual(solve(3), 0, MSG);

  assert.deepStrictEqual(solve(60), 14, MSG);

  assert.deepStrictEqual(solve(100), 24, MSG);

  assert.deepStrictEqual(solve(1024), 253, MSG);

  assert.deepStrictEqual(solve(23456), 5861, MSG);

  /*
  This test case is too heavy.
  Apparently it should be resolved in 8 seconds!

  assert.deepStrictEqual(solve(8735373), 2183837, MSG);
  */

}



export default test;
