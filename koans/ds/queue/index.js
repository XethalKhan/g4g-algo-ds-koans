import arrayImplementation from './001-array-implementation.js';
import linkedListImplementation from './002-linked-list-implementation.js';

import sortQueueIntoAnotherQueueUsingStack from './020-sort-queue-into-another-queue-using-stack.js';

import reverseQueue from './040-reverse-queue.js';

import ArrayImpl from './array-implementation.js';
import LinkedListImpl from './linked-list-implementation.js';

export const functions = {
  arrayImplementation,
  linkedListImplementation,
  sortQueueIntoAnotherQueueUsingStack,
  reverseQueue
};

export const QueueArrayImpl = ArrayImpl;
export const QueueLinkedListImpl = LinkedListImpl;
export const Queue = LinkedListImpl;

export default Queue;
