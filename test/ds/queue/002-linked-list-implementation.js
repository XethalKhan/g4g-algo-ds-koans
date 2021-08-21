import assert from 'assert/strict';

import Queue from './../../../koans/ds/queue/index.js';



const MSG = "Queue array implementation FAIL!\n"
+ "See file: ds/queue/002-linked-list-implementation.js";

function test(){

  let q = new Queue();

  assert.deepStrictEqual(q.getFront(), null, MSG);
  assert.deepStrictEqual(q.getRear(), null, MSG);
  assert.deepStrictEqual(q.toString(), "EMPTY", MSG);

  q.enqueue(10);
  q.enqueue(20);
  q.enqueue(30);

  assert.deepStrictEqual(q.getFront(), 10, MSG);
  assert.deepStrictEqual(q.getRear(), 30, MSG);
  assert.deepStrictEqual(q.toString(), "10 20 30", MSG);

  let test1 = q.dequeue();

  assert.deepStrictEqual(q.getFront(), 20, MSG);
  assert.deepStrictEqual(q.getRear(), 30, MSG);
  assert.deepStrictEqual(test1, 10, MSG);
  assert.deepStrictEqual(q.toString(), "20 30", MSG);

  let test2 = q.dequeue();

  assert.deepStrictEqual(q.getFront(), 30, MSG);
  assert.deepStrictEqual(q.getRear(), 30, MSG);
  assert.deepStrictEqual(test2, 20, MSG);
  assert.deepStrictEqual(q.toString(), "30", MSG);

  q.enqueue(40);
  q.enqueue(50);
  q.enqueue(60);
  q.enqueue(70);

  assert.deepStrictEqual(q.getFront(), 30, MSG);
  assert.deepStrictEqual(q.getRear(), 70, MSG);
  assert.deepStrictEqual(q.toString(), "30 40 50 60 70", MSG);

  let test3 = q.dequeue();

  assert.deepStrictEqual(q.getFront(), 40, MSG);
  assert.deepStrictEqual(q.getRear(), 70, MSG);
  assert.deepStrictEqual(test3, 30, MSG);
  assert.deepStrictEqual(q.toString(), "40 50 60 70", MSG);

  let test4 = q.dequeue();

  assert.deepStrictEqual(q.getFront(), 50, MSG);
  assert.deepStrictEqual(q.getRear(), 70, MSG);
  assert.deepStrictEqual(test4, 40, MSG);
  assert.deepStrictEqual(q.toString(), "50 60 70", MSG);

  let test5 = q.dequeue();

  assert.deepStrictEqual(q.getFront(), 60, MSG);
  assert.deepStrictEqual(q.getRear(), 70, MSG);
  assert.deepStrictEqual(test5, 50, MSG);
  assert.deepStrictEqual(q.toString(), "60 70", MSG);

  let test6 = q.dequeue();

  assert.deepStrictEqual(q.getFront(), 70, MSG);
  assert.deepStrictEqual(q.getRear(), 70, MSG);
  assert.deepStrictEqual(test6, 60, MSG);
  assert.deepStrictEqual(q.toString(), "70", MSG);

  let test7 = q.dequeue();

  assert.deepStrictEqual(q.getFront(), null, MSG);
  assert.deepStrictEqual(q.getRear(), null, MSG);
  assert.deepStrictEqual(test7, 70, MSG);
  assert.deepStrictEqual(q.toString(), "EMPTY", MSG);

  let test8 = q.dequeue();

  assert.deepStrictEqual(q.getFront(), null, MSG);
  assert.deepStrictEqual(q.getRear(), null, MSG);
  assert.deepStrictEqual(test8, null, MSG);
  assert.deepStrictEqual(q.toString(), "EMPTY", MSG);

}

export default test;
