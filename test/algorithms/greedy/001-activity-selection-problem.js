import assert from 'assert/strict';

import koans from './../../../koans/index.js';



const solve = koans.algorithms.greedy.activitySelectionProblem;

const MSG = "Activity selection problem FAIL!\n"
+ "See file: algorithms/greedy/001-activity-selection-problem.js\n";



function test(){

  let start = [10, 12, 20];
  let end = [20, 25, 30];

  let test1 = solve(start, end);

  assert.deepStrictEqual(
    test1,
    [0, 2],
    MSG + "Input: start = " + (start.toString()) + ", end = " + (end.toString())
  );

  start = [1, 3, 0, 5, 8, 5];
  end = [2, 4, 6, 7, 9, 9];

  let test2 = solve(start, end);

  assert.deepStrictEqual(
    test2,
    [0, 1, 3, 4],
    MSG + "Input: start = " + (start.toString()) + ", end = " + (end.toString())
  );

}


export default test;
