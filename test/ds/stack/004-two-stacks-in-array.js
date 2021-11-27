import assert from 'assert/strict';

import Stack from './../../../koans/ds/stack/004-two-stacks-in-array.js';



const MSG = "Implement two stacks in an array FAIL!\n"
+ "See file: ds/stack/004-two-stacks-in-array.js";

function test(){

  let s = new Stack(5);

  assert.deepStrictEqual(s.pop1(), null, MSG);
  assert.deepStrictEqual(s.pop2(), null, MSG);
  assert.deepStrictEqual(s.toString(), ",,,,", MSG);

  assert.deepStrictEqual(s.push1(10), true, MSG);
  assert.deepStrictEqual(s.toString(), "10,,,,", MSG);

  assert.deepStrictEqual(s.push2(20), true, MSG);
  assert.deepStrictEqual(s.toString(), "10,,,,20", MSG);

  assert.deepStrictEqual(s.push1(30), true, MSG);
  assert.deepStrictEqual(s.toString(), "10,30,,,20", MSG);

  assert.deepStrictEqual(s.push2(40), true, MSG);
  assert.deepStrictEqual(s.toString(), "10,30,,40,20", MSG);

  assert.deepStrictEqual(s.push1(50), true, MSG);
  assert.deepStrictEqual(s.toString(), "10,30,50,40,20", MSG);

  assert.deepStrictEqual(s.push2(60), false, MSG);
  assert.deepStrictEqual(s.toString(), "10,30,50,40,20", MSG);

  assert.deepStrictEqual(s.push1(70), false, MSG);
  assert.deepStrictEqual(s.toString(), "10,30,50,40,20", MSG);

  assert.deepStrictEqual(s.pop1(), 50, MSG);
  assert.deepStrictEqual(s.toString(), "10,30,50,40,20", MSG);

  assert.deepStrictEqual(s.pop2(), 40, MSG);
  assert.deepStrictEqual(s.toString(), "10,30,50,40,20", MSG);

  assert.deepStrictEqual(s.push1(100), true, MSG);
  assert.deepStrictEqual(s.toString(), "10,30,100,40,20", MSG);

  assert.deepStrictEqual(s.pop1(), 100, MSG);
  assert.deepStrictEqual(s.toString(), "10,30,100,40,20", MSG);

  assert.deepStrictEqual(s.pop2(), 20, MSG);
  assert.deepStrictEqual(s.toString(), "10,30,100,40,20", MSG);

  assert.deepStrictEqual(s.pop1(), 30, MSG);
  assert.deepStrictEqual(s.toString(), "10,30,100,40,20", MSG);

  assert.deepStrictEqual(s.pop2(), null, MSG);
  assert.deepStrictEqual(s.toString(), "10,30,100,40,20", MSG);

  assert.deepStrictEqual(s.pop1(), 10, MSG);
  assert.deepStrictEqual(s.toString(), "10,30,100,40,20", MSG);

}

export default test;
