import assert from 'assert/strict';

import { functions } from './../../../../koans/ds/stack/index.js';

let solve = functions.standardProblems.infixToPostfix;



const MSG = "Stack standard problems, convert infix to postfix expression FAIL!\n"
+ "See file: ds/stack/standard-problems/001-infix-to-postfix.js";

function test(){

  assert.deepStrictEqual(solve("a+b"), "ab+", MSG);

  assert.deepStrictEqual(solve("a*b"), "ab*", MSG);

  assert.deepStrictEqual(solve("a+b*c"), "abc*+", MSG);

  assert.deepStrictEqual(solve("(a+b)*c"), "ab+c*", MSG);

  assert.deepStrictEqual(solve("a+b*(c^d-e)^(f+g*h)-i"), "abcd^e-fgh*+^*+i-", MSG);

}

export default test;
