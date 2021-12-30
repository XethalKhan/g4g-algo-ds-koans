import assert from 'assert/strict';

import koans from './../../../koans/index.js';



const solve = koans.chef.medium.flipcoin;

const MSG = "Codechef FLIPCOIN problem FAIL!\n"
+ "See file: chef/medium/004-FLIPCOIN.js";


function test(){

    let q = [
        {
            type: false,
            start: 0,
            end: 3
        },
        {
            type: true,
            start: 1,
            end: 2
        },
        {
            type: false,
            start: 0,
            end: 1
        },
        {
            type: false,
            start: 0,
            end: 0
        },
        {
            type: true,
            start: 0,
            end: 3
        },
        {
            type: false,
            start: 0,
            end: 3
        },
        {
            type: false,
            start: 3,
            end: 3
        }
    ];

  assert.deepStrictEqual(solve(4, q), [0, 1, 0, 2, 1], MSG);

}



export default test;
