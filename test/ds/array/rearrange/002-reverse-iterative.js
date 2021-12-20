import assert from 'assert/strict';

import koans from './../../../../koans/index.js';



const rearrange = koans.dataStructures.array.rearrange.reverseIterative;

const MSG = "Reverse an array iteratively FAIL!\n"
+ "See file: ds/array/array-rearrange/002-reverse-iterative.js";



function test(){

  let test1 = rearrange([1, 2, 3]);

  assert.deepStrictEqual(test1, [3, 2, 1], MSG);

  let test2 = rearrange([1, 2, 3, 4]);

  assert.deepStrictEqual(test2, [4, 3, 2, 1], MSG);

  let test3 = rearrange([5, 4, 3, 2, 1, 0, -1, -2, -3]);

  assert.deepStrictEqual(test3, [-3, -2, -1, 0, 1, 2, 3, 4, 5], MSG);

}



export default test;
