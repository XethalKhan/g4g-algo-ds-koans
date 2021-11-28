import arrayImplementationTest from './001-array-implementation.js';
import linkedListImplementationTest from './002-linked-list-implementation.js';

import sortQueueIntoAnotherQueueUsingStackTest from './020-sort-queue-into-another-queue-using-stack.js';

import reverseQueueTest from './040-reverse-queue.js';

export const arrayImplementation = arrayImplementationTest;
export const linkedListImplementation = linkedListImplementationTest;

export const sortQueueIntoAnotherQueueUsingStack = sortQueueIntoAnotherQueueUsingStackTest;

export const reverseQueue = reverseQueueTest;

export function full(){
  arrayImplementationTest();
  linkedListImplementationTest();

  sortQueueIntoAnotherQueueUsingStackTest();

  reverseQueueTest();
}

const queue = {
  arrayImplementation,
  linkedListImplementation,
  sortQueueIntoAnotherQueueUsingStack,
  reverseQueue,
  full
}

export default queue;
