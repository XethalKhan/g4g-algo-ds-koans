import assert from 'assert/strict';

import Stack from './../../../koans/ds/stack/index.js';



const MSG = "Stack linked list implementation FAIL!\n"
+ "See file: ds/stack/002-linked-list-implementation.js";

function test(){

  let s = new Stack(3);

  assert.deepStrictEqual(s.peek(), null, MSG);
  assert.deepStrictEqual(s.isEmpty(), true, MSG);

  s.push(10);

  assert.deepStrictEqual(s.peek(), 10, MSG);
  assert.deepStrictEqual(s.isEmpty(), false, MSG);
  assert.deepStrictEqual(s.toString(), "10", MSG);

  s.push(20);

  assert.deepStrictEqual(s.peek(), 20, MSG);
  assert.deepStrictEqual(s.isEmpty(), false, MSG);
  assert.deepStrictEqual(s.toString(), "20 10", MSG);

  s.push(30);

  assert.deepStrictEqual(s.peek(), 30, MSG);
  assert.deepStrictEqual(s.isEmpty(), false, MSG);
  assert.deepStrictEqual(s.toString(), "30 20 10", MSG);

  s.push(40);

  assert.deepStrictEqual(s.peek(), 40, MSG);
  assert.deepStrictEqual(s.isEmpty(), false, MSG);
  assert.deepStrictEqual(s.toString(), "40 30 20 10", MSG);

  let test1 = s.pop();

  assert.deepStrictEqual(test1, 40, MSG);
  assert.deepStrictEqual(s.peek(), 30, MSG);
  assert.deepStrictEqual(s.isEmpty(), false, MSG);
  assert.deepStrictEqual(s.toString(), "30 20 10", MSG);

  let test2 = s.pop();

  assert.deepStrictEqual(test2, 30, MSG);
  assert.deepStrictEqual(s.peek(), 20, MSG);
  assert.deepStrictEqual(s.isEmpty(), false, MSG);
  assert.deepStrictEqual(s.toString(), "20 10", MSG);

  s.push(40);

  assert.deepStrictEqual(s.peek(), 40, MSG);
  assert.deepStrictEqual(s.isEmpty(), false, MSG);
  assert.deepStrictEqual(s.toString(), "40 20 10", MSG);

  let test3 = s.pop();

  assert.deepStrictEqual(test3, 40, MSG);
  assert.deepStrictEqual(s.peek(), 20, MSG);
  assert.deepStrictEqual(s.isEmpty(), false, MSG);
  assert.deepStrictEqual(s.toString(), "20 10", MSG);

  let test4 = s.pop();

  assert.deepStrictEqual(test4, 20, MSG);
  assert.deepStrictEqual(s.peek(), 10, MSG);
  assert.deepStrictEqual(s.isEmpty(), false, MSG);
  assert.deepStrictEqual(s.toString(), "10", MSG);

  let test5 = s.pop();

  assert.deepStrictEqual(test5, 10, MSG);
  assert.deepStrictEqual(s.peek(), null, MSG);
  assert.deepStrictEqual(s.isEmpty(), true, MSG);
  assert.deepStrictEqual(s.toString(), "EMPTY", MSG);

  let test6 = s.pop();

  assert.deepStrictEqual(test6, null, MSG);
  assert.deepStrictEqual(s.peek(), null, MSG);
  assert.deepStrictEqual(s.isEmpty(), true, MSG);
  assert.deepStrictEqual(s.toString(), "EMPTY", MSG);

}

export default test;
