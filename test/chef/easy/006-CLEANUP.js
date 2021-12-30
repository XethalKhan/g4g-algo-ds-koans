import assert from 'assert/strict';

import koans from './../../../koans/index.js';



const solve = koans.chef.easy.cleanup;

const MSG = "Codechef CLEANUP problem FAIL!\n"
+ "See file: chef/easy/006-CLEANUP.js";



function test(){

  assert.deepStrictEqual(solve(6, [2, 4, 1]), { chef: [ 3, 6 ], assistant: [ 5 ] }, MSG);

  assert.deepStrictEqual(solve(3, [3, 2]), { chef: [ 1 ], assistant: [] }, MSG);

  assert.deepStrictEqual(solve(8, [3, 8]), { chef: [ 1, 4, 6 ], assistant: [ 2, 5, 7 ] }, MSG);

}



export default test;
