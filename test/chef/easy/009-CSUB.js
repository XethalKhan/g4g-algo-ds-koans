import assert from 'assert/strict';

import koans from './../../../koans/index.js';



const solve = koans.chef.easy.csub;

const MSG = "Codechef CSUB problem FAIL!\n"
+ "See file: chef/easy/009-CSUB.js";



function test(){

  assert.deepStrictEqual(solve('1111'), 10, MSG);

  assert.deepStrictEqual(solve('10001'), 3, MSG);

  assert.deepStrictEqual(solve('10101'), 6, MSG);

  assert.deepStrictEqual(solve('0000001000000000'), 1, MSG);

}



export default test;
