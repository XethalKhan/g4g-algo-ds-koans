import assert from 'assert/strict';

import koans from './../../../koans/index.js';



const solve = koans.chef.medium.treeroot;

const MSG = "Codechef TREEROOT problem FAIL!\n"
+ "See file: chef/medium/003-TREEROOT.js";


function test(){

  let nodes = [
    {
        id: 1,
        sum: 5
    },
    {
        id: 2,
        sum: 0
    },
    {
        id: 3,
        sum: 0
    },
    {
        id: 4,
        sum: 0
    },
    {
        id: 5,
        sum: 5
    },
    {
        id: 6,
        sum: 5
    }
  ]

  assert.deepStrictEqual(solve(nodes), 6, MSG);

}



export default test;
