import assert from 'assert/strict';

import koans from './../../../../koans/index.js';



const rotate = koans.dataStructures.array.rotation.leftRotateFirstMethod;

const MSG = "Array left rotation method 1 FAIL!\n"
+ "See file: ds/array/array_rotation/001_array_rotation_using_temp_array.js";



function test(){

  let start = [1, 2, 3, 4, 5, 6, 7];

  let test1 = rotate(start, 2);

  assert.deepStrictEqual(test1, [3, 4, 5, 6, 7, 1, 2], MSG);

  let test2 = rotate(test1, 0);

  assert.deepStrictEqual(test2, [3, 4, 5, 6, 7, 1, 2], MSG);

  let test3 = rotate(test2, 5);

  assert.deepStrictEqual(test3, start, MSG);

}



export default test;
