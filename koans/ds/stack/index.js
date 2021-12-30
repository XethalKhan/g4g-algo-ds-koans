import arrayImplementation from './001-array-implementation.js';
import linkedListImplementation from './002-linked-list-implementation.js';

import standardProblems from './standard-problems/index.js';

import ArrayImpl from './array-implementation.js';
import LinkedListImpl from './linked-list-implementation.js';

export const functions = {
  arrayImplementation,
  linkedListImplementation,
  standardProblems
}

export const StackArrayImpl = ArrayImpl;
export const StackLinkedListImpl = LinkedListImpl;
export const Stack = LinkedListImpl;

export default Stack;
