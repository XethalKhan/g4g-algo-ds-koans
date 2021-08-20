import arrayTest from './array/index.js';
import singlyLinkedListTest from './singly-linked-list/index.js';
import queueTest from './queue/index.js';
import stackTest from './stack/index.js';
import binaryTree from './binary-tree/index.js';

function test(){
  arrayTest();
  singlyLinkedListTest();
  queueTest();
  stackTest();
  binaryTree();
}

export default test;
