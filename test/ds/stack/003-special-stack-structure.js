import assert from 'assert/strict';

import Stack from './../../../koans/ds/stack/003-special-stack-structure.js';



const MSG = "Special stack structure implementation FAIL!\n"
+ "See file: ds/stack/003-special-stack-structure.js";

function test(){

  let s = new Stack();

  assert.deepStrictEqual(s.peek(), null, MSG);
  assert.deepStrictEqual(s.isEmpty(), true, MSG);
  assert.deepStrictEqual(s.getMin(), Number.MAX_VALUE, MSG);

  s.push(40);

  assert.deepStrictEqual(s.peek(), 40, MSG);
  assert.deepStrictEqual(s.isEmpty(), false, MSG);
  assert.deepStrictEqual(s.getMin(), 40, MSG);

  s.push(20);

  assert.deepStrictEqual(s.peek(), 20, MSG);
  assert.deepStrictEqual(s.isEmpty(), false, MSG);
  assert.deepStrictEqual(s.getMin(), 20, MSG);

  s.push(30);

  assert.deepStrictEqual(s.peek(), 30, MSG);
  assert.deepStrictEqual(s.isEmpty(), false, MSG);
  assert.deepStrictEqual(s.getMin(), 20, MSG);

  s.push(10);

  assert.deepStrictEqual(s.peek(), 10, MSG);
  assert.deepStrictEqual(s.isEmpty(), false, MSG);
  assert.deepStrictEqual(s.getMin(), 10, MSG);

  let test1 = s.pop();

  assert.deepStrictEqual(test1, 10, MSG);
  assert.deepStrictEqual(s.peek(), 30, MSG);
  assert.deepStrictEqual(s.isEmpty(), false, MSG);
  assert.deepStrictEqual(s.getMin(), 20, MSG);

  let test2 = s.pop();

  assert.deepStrictEqual(test2, 30, MSG);
  assert.deepStrictEqual(s.peek(), 20, MSG);
  assert.deepStrictEqual(s.isEmpty(), false, MSG);
  assert.deepStrictEqual(s.getMin(), 20, MSG);

  s.push(40);

  assert.deepStrictEqual(s.peek(), 40, MSG);
  assert.deepStrictEqual(s.isEmpty(), false, MSG);
  assert.deepStrictEqual(s.getMin(), 20, MSG);

  let test3 = s.pop();

  assert.deepStrictEqual(test3, 40, MSG);
  assert.deepStrictEqual(s.peek(), 20, MSG);
  assert.deepStrictEqual(s.isEmpty(), false, MSG);
  assert.deepStrictEqual(s.getMin(), 20, MSG);

  let test4 = s.pop();

  assert.deepStrictEqual(test4, 20, MSG);
  assert.deepStrictEqual(s.peek(), 40, MSG);
  assert.deepStrictEqual(s.isEmpty(), false, MSG);
  assert.deepStrictEqual(s.getMin(), 40, MSG);

  let test5 = s.pop();

  assert.deepStrictEqual(test5, 40, MSG);
  assert.deepStrictEqual(s.peek(), null, MSG);
  assert.deepStrictEqual(s.isEmpty(), true, MSG);
  assert.deepStrictEqual(s.getMin(), Number.MAX_VALUE, MSG);

  let test6 = s.pop();

  assert.deepStrictEqual(test6, null, MSG);
  assert.deepStrictEqual(s.peek(), null, MSG);
  assert.deepStrictEqual(s.isEmpty(), true, MSG);
  assert.deepStrictEqual(s.getMin(), Number.MAX_VALUE, MSG);

}

export default test;
