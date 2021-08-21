import assert from 'assert/strict';

import koans from './../../../../koans/index.js';



const rearrange = koans.dataStructures.array.rearrange.rearrangeArrIEqualI;

const MSG = "Rearrange array such that arr[i] = i FAIL!\n"
+ "See file: ds/array/array-rearrange/001-rearrange-such-that-i-=-arr[i].js";



function test(){

  let test1 = rearrange([-1, -1, 6, 1, 9, 3, 2, -1, 4, -1]);

  assert.deepStrictEqual(test1, [-1, 1, 2, 3, 4, -1, 6, -1, -1, 9], MSG);

  let test2 = rearrange([19, 7, 0, 3, 18, 15, 12, 6, 1, 8, 11, 10, 9, 5, 13, 16, 2, 14, 17, 4]);

  assert.deepStrictEqual(test2, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], MSG);

  let test3 = rearrange([-1, 7, 4, -1, 0, 6, 1, 8, -1, 2]);

  assert.deepStrictEqual(test3, [0, 1, 2, -1, 4, -1, 6, 7, 8, -1], MSG);

}



export default test;
