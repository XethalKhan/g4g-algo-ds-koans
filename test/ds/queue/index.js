import arrayImplementationTest from './001-array-implementation.js';
import linkedListImplementationTest from './002-linked-list-implementation.js';

import sortQueueIntoAnotherQueueUsingStackTest from './020-sort-queue-into-another-queue-using-stack.js';

export const arrayImplementation = arrayImplementationTest;
export const linkedListImplementation = linkedListImplementationTest;

export const sortQueueIntoAnotherQueueUsingStack = sortQueueIntoAnotherQueueUsingStackTest;

export function full(){
  arrayImplementationTest();
  linkedListImplementationTest();

  sortQueueIntoAnotherQueueUsingStackTest();
}

const queue = {
  arrayImplementation,
  linkedListImplementation,
  sortQueueIntoAnotherQueueUsingStack,
  full
}

export default queue;
