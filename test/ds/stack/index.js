import arrayImplementationTest from './001-array-implementation.js';
import linkedListImplementationTest from './002-linked-list-implementation.js';

export const arrayImplementation = arrayImplementationTest;
export const linkedListImplementation = linkedListImplementationTest;

export function full(){
  arrayImplementationTest();
  linkedListImplementationTest();
}

const stack = {
  arrayImplementation,
  linkedListImplementation,
  full
}

export default stack;
