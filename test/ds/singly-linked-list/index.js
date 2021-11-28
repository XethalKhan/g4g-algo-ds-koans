import insertNodeAtBeginningTest from './001-insert-node-at-beginning.js';
import insertNodeAtEndTest from './002-insert-node-at-end.js';
import deleteNodeByKeyIterativeTest from './003-delete-key-iterative.js';
import deleteNodeByIndexTest from './004-delete-index.js';
import deleteListTest from './005-delete-list.js';
import lengthIterativeTest from './006-length-iterative.js';
import lengthRecursiveTest from './007-length-recursive.js';
import searchIterativeTest from './008-search-iterative.js';
import searchRecursiveTest from './009-search-recursive.js';

export const insertNodeAtBeginning = insertNodeAtBeginningTest;
export const insertNodeAtEnd = insertNodeAtEndTest;
export const deleteNodeByKeyIterative = deleteNodeByKeyIterativeTest;
export const deleteNodeByIndex = deleteNodeByIndexTest;
export const deleteList = deleteListTest;
export const lengthIterative = lengthIterativeTest;
export const lengthRecursive = lengthRecursiveTest;
export const searchIterative = searchIterativeTest;
export const searchRecursive = searchRecursiveTest;

export function full(){
  insertNodeAtBeginningTest();
  insertNodeAtEndTest();
  deleteNodeByKeyIterativeTest();
  deleteNodeByIndexTest();
  deleteListTest();
  lengthIterativeTest();
  lengthRecursiveTest();
  searchIterativeTest();
  searchRecursiveTest();
}

const singlyLinkedList = {
  insertNodeAtBeginning,
  insertNodeAtEnd,
  deleteNodeByKeyIterative,
  deleteNodeByIndex,
  deleteList,
  lengthIterative,
  lengthRecursive,
  searchIterative,
  searchRecursive,
  full
}

export default singlyLinkedList;
