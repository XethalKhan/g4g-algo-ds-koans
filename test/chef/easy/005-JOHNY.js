import assert from 'assert/strict';

import koans from './../../../koans/index.js';



const solve = koans.chef.easy.johny;

const MSG = "Codechef JOHNY problem FAIL!\n"
+ "See file: chef/easy/005-JOHNY.js";



function test(){

  assert.deepStrictEqual(solve([1, 3, 4, 2], 2), 3, MSG);

  assert.deepStrictEqual(solve([1, 2, 3, 9, 4], 5), 4, MSG);

  assert.deepStrictEqual(solve([1, 2, 3, 9, 4], 1), 1, MSG);

}



export default test;
