import assert from 'assert/strict';

import { Queue, functions } from './../../../koans/ds/queue/index.js';

const solve = functions.sortQueueIntoAnotherQueueUsingStack;

const MSG = "Sort queue into another queue using stack FAIL!\n"
+ "See file: ds/queue/020-sort-queue-into-another-queue-using-stack.js";


function test(){

  let queue1 = new Queue();

  queue1.enqueue(5);
  queue1.enqueue(1);
  queue1.enqueue(2);
  queue1.enqueue(3);
  queue1.enqueue(4);

  let test1 = solve(queue1);

  assert.deepStrictEqual(test1, true, MSG);

  let queue2 = new Queue();

  queue2.enqueue(5);
  queue2.enqueue(1);
  queue2.enqueue(2);
  queue2.enqueue(6);
  queue2.enqueue(3);
  queue2.enqueue(4);

  let test2 = solve(queue2);

  assert.deepStrictEqual(test2, false, MSG);

  let queue3 = new Queue();

  queue3.enqueue(6);
  queue3.enqueue(1);
  queue3.enqueue(2);
  queue3.enqueue(5);
  queue3.enqueue(3);
  queue3.enqueue(4);

  let test3 = solve(queue3);

  assert.deepStrictEqual(test3, true, MSG);

}

export default test;
