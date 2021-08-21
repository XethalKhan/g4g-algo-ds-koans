import arrayImplementation from './001-array-implementation.js';
import linkedListImplementation from './002-linked-list-implementation.js';

import sortQueueIntoAnotherQueueUsingStack from './020-sort-queue-into-another-queue-using-stack.js';

import ArrayImplementation from './array-implementation.js';
import LinkedListImpl from './linked-list-implementation.js';

export const functions = {
  arrayImplementation,
  linkedListImplementation,
  sortQueueIntoAnotherQueueUsingStack
};

export const QueueArrayImpl = ArrayImplementation;
export const QueueLinkedListImpl = LinkedListImpl;
export const Queue = LinkedListImpl;

export default QueueLinkedListImpl;
