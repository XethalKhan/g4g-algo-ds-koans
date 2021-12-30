import assert from 'assert/strict';

import { functions } from './../../../../koans/ds/stack/index.js';

let solve = functions.standardProblems.prefixToInfix;



const MSG = "Stack standard problems, convert prefix to infix expression FAIL!\n"
+ "See file: ds/stack/standard-problems/002-prefix-to-infix.js";

function test(){

  assert.deepStrictEqual(solve("+ab"), "(a+b)", MSG);

  assert.deepStrictEqual(solve("*ab"), "(a*b)", MSG);

  assert.deepStrictEqual(solve("*+abc"), "((a+b)*c)", MSG);

  assert.deepStrictEqual(solve("+a*bc"), "(a+(b*c))", MSG);

  assert.deepStrictEqual(solve("*-A/BC-/AKL"), "((A-(B/C))*((A/K)-L))", MSG);

}

export default test;
