import assert from 'assert/strict';

import koans from './../../../koans/index.js';



const solve = koans.algorithms.greedy.jobSequencingProblem;

const MSG = "Job sequencing problem FAIL!\n"
+ "See file: algorithms/greedy/003-job-sequencing-problem.js\n";



function test(){

  let jobs = [['a', 4, 20], ['b', 1, 10], ['c', 1, 40], ['d', 1, 30]];

  let test1 = solve(jobs);

  assert.deepStrictEqual(
    test1,
    ['c', 'a'],
    MSG
  );

  jobs = [['a', 2, 100], ['b', 1, 19], ['c', 2, 27], ['d', 1, 25], ['e', 3, 15]];

  let test2 = solve(jobs);

  assert.deepStrictEqual(
    test2,
    ['a', 'c', 'e'],
    MSG
  );

}


export default test;
