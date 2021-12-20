import assert from 'assert/strict';

import koans from './../../../koans/index.js';



const solve = koans.chef.easy.horses;

const MSG = "Codechef HORSES problem FAIL!\n"
+ "See file: chef/easy/004-HORSES.js";



function test(){

  assert.deepStrictEqual(solve([4, 9, 1, 32, 13]), 3, MSG);

  assert.deepStrictEqual(solve([6, 5, 4, 3, 2, 1]), 1, MSG);

  assert.deepStrictEqual(solve([1, 2, 3, 2, 1]), 0, MSG);

  assert.deepStrictEqual(solve([7, 21, 9, 33, 15]), 2, MSG);

}



export default test;
