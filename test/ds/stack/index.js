import arrayImplementationTest from './001-array-implementation.js';
import linkedListImplementationTest from './002-linked-list-implementation.js';
import specialStackStructureTest from './003-special-stack-structure.js';
import twoStacksInArrayTest from './004-two-stacks-in-array.js';

import standardProblemsTest from './standard-problems/index.js';

export const arrayImplementation = arrayImplementationTest;
export const linkedListImplementation = linkedListImplementationTest;
export const specialStackStructure = specialStackStructureTest;
export const twoStacksInArray = twoStacksInArrayTest;

export const standardProblems = standardProblemsTest;

export function full(){
  arrayImplementationTest();
  linkedListImplementationTest();
  specialStackStructureTest();
  twoStacksInArrayTest();

  standardProblemsTest.full();
}

const stack = {
  arrayImplementation,
  linkedListImplementation,
  specialStackStructure,
  twoStacksInArray,

  standardProblems,

  full
}

export default stack;
