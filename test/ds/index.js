import array from './array/index.js';
import singlyLinkedList from './singly-linked-list/index.js';
import queue from './queue/index.js';
import stack from './stack/index.js';
import binaryTree from './binary-tree/index.js';

export function full(){
  array.full();
  singlyLinkedList.full();
  queue.full();
  stack.full();
  binaryTree.full();
}

const ds = {
  array,
  singlyLinkedList,
  queue,
  stack,
  binaryTree,
  full
}

export default ds;
