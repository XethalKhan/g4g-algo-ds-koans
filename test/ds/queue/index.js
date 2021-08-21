import arrayImplementationTest from './001-array-implementation.js';
import linkedListImplementationTest from './002-linked-list-implementation.js';

import sortQueueIntoAnotherQueueUsingStackTest from './020-sort-queue-into-another-queue-using-stack.js';

function test(){
  arrayImplementationTest();
  linkedListImplementationTest();

  sortQueueIntoAnotherQueueUsingStackTest();
}

export default test;
