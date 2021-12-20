import assert from 'assert/strict';

import koans from './../../../../koans/index.js';



const reverse = koans.dataStructures.array.rearrange.reverseRecursive;

const MSG = "Reverse an array recursively FAIL!\n"
+ "See file: ds/array/array-rearrange/003-reverse-recursive.js";



function test(){

  let test1 = reverse([1, 2, 3], 0, 2);

  assert.deepStrictEqual(test1, [3, 2, 1], MSG);

  let test2 = reverse([1, 2, 3, 4], 0, 3);

  assert.deepStrictEqual(test2, [4, 3, 2, 1], MSG);

  let test3 = reverse([5, 4, 3, 2, 1, 0, -1, -2, -3], 0, 8);

  assert.deepStrictEqual(test3, [-3, -2, -1, 0, 1, 2, 3, 4, 5], MSG);

}



export default test;
