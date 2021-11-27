import arrayImplementationTest from './001-array-implementation.js';
import linkedListImplementationTest from './002-linked-list-implementation.js';
import specialStackStructureTest from './003-special-stack-structure.js';
import twoStacksInArrayTest from './004-two-stacks-in-array.js';

export const arrayImplementation = arrayImplementationTest;
export const linkedListImplementation = linkedListImplementationTest;
export const specialStackStructure = specialStackStructureTest;
export const twoStacksInArray = twoStacksInArrayTest;

export function full(){
  arrayImplementationTest();
  linkedListImplementationTest();
  specialStackStructureTest();
  twoStacksInArrayTest();
}

const stack = {
  arrayImplementation,
  linkedListImplementation,
  specialStackStructure,
  twoStacksInArray,
  full
}

export default stack;
