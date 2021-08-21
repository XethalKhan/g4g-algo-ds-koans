import assert from 'assert/strict';

import koans from './../../../koans/index.js';



const sort = koans.algorithms.sort.bubbleSortOptimized;

const MSG = "Iterative bubble sort FAIL!\n"
+ "See file: algorithms/sort/003-bubble-sort-optimized.js";



function test(){

  let test1 = sort([1, 7, 4, 2, 6, 3, 5]);

  assert.deepStrictEqual(test1, [1, 2, 3, 4, 5, 6, 7], MSG);

  let test2 = sort([1, 2, 3, 4, 5, 6, 7]);

  assert.deepStrictEqual(test2, [1, 2, 3, 4, 5, 6, 7], MSG);

  let test3 = sort([7, 6, 5, 4, 3, 2, 1]);

  assert.deepStrictEqual(test3, [1, 2, 3, 4, 5, 6, 7], MSG);

  let test4 = sort([3, 6, 1, 4, 5, 7, 2, 6, 7, 5, 1, 3, 4, 2]);

  assert.deepStrictEqual(test4, [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7], MSG);

}



export default test;
