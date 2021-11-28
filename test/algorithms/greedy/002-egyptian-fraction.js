import assert from 'assert/strict';

import koans from './../../../koans/index.js';



const solve = koans.algorithms.greedy.egyptianFractionProblem;

const MSG = "Egyptian fraction problem FAIL!\n"
+ "See file: algorithms/greedy/002-egyptian-fraction.js\n";



function test(){

  let test1 = solve(2, 3);

  assert.deepStrictEqual(
    test1,
    [ { nr: 1, dr: 2 }, { nr: 1, dr: 6 } ],
    MSG
  );

  let test2 = solve(6, 14);

  assert.deepStrictEqual(
    test2,
    [ { nr: 1, dr: 3 }, { nr: 1, dr: 11 }, { nr: 1, dr: 231 } ],
    MSG
  );

  let test3 = solve(12, 13);

  assert.deepStrictEqual(
    test3,
    [
        { nr: 1, dr: 2 },
        { nr: 1, dr: 3 },
        { nr: 1, dr: 12 },
        { nr: 1, dr: 156 }
    ],
    MSG
  );

  let test4 = solve(5, 1);

  assert.deepStrictEqual(
    test4,
    [ { nr: 5, dr: 1 } ],
    MSG
  );

}


export default test;
