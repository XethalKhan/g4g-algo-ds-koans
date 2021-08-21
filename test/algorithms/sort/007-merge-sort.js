import assert from 'assert/strict';

import koans from './../../../koans/index.js';



const sort = koans.algorithms.sort.mergeSort;

const MSG = "Merge sort FAIL!\n"
+ "See file: algorithms/sort/007-merge-sort.js";



function test(){

  let test1 = [1, 7, 4, 2, 6, 3, 5];

  sort(test1, 0, test1.length - 1);

  assert.deepStrictEqual(test1, [1, 2, 3, 4, 5, 6, 7], MSG);

  let test2 = [1, 2, 3, 4, 5, 6, 7];

  sort(test2, 0, test2.length - 1);

  assert.deepStrictEqual(test2, [1, 2, 3, 4, 5, 6, 7], MSG);

  let test3 = [7, 6, 5, 4, 3, 2, 1];

  sort(test3, 0, test3.length - 1);

  assert.deepStrictEqual(test3, [1, 2, 3, 4, 5, 6, 7], MSG);

  let test4 = [3, 6, 1, 4, 5, 7, 2, 6, 7, 5, 1, 3, 4, 2];

  sort(test4, 0, test4.length - 1);

  assert.deepStrictEqual(test4, [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7], MSG);

}



export default test;
