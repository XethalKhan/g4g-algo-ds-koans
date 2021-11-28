import assert from 'assert/strict';

import { Queue, functions } from './../../../koans/ds/queue/index.js';

const solve = functions.reverseQueue;

const MSG = "Reverse queue FAIL!\n"
+ "See file: ds/queue/040-reverse-queue.js";


function test(){

  let queue1 = new Queue();

  queue1.enqueue(5);
  queue1.enqueue(1);
  queue1.enqueue(2);
  queue1.enqueue(3);
  queue1.enqueue(4);

  let test1 = solve(queue1);

  assert.deepStrictEqual(test1.toString(), "4 3 2 1 5", MSG);

  let queue2 = new Queue();

  let test2 = solve(queue2);

  assert.deepStrictEqual(test2.toString(), "EMPTY", MSG);

  let queue3 = new Queue();

  queue3.enqueue(1);
  queue3.enqueue(2);
  queue3.enqueue(3);
  queue3.enqueue(4);
  queue3.enqueue(5);
  queue3.enqueue(6);

  let test3 = solve(queue3);

  assert.deepStrictEqual(test3.toString(), "6 5 4 3 2 1", MSG);

}

export default test;
