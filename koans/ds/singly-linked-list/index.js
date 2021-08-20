import push from './001-insert-node-at-beginning.js';
import append from './002-insert-node-at-end.js';
import deleteKeyIterative from './003-delete-key-iterative.js';
import deleteIndex from './004-delete-index.js';
import deleteList from './005-delete-list.js';
import lengthIterative from './006-length-iterative.js';
import lengthRecursive from './007-length-recursive.js';

import Implementation from './implementation.js';

export const SinglyLinkedList = Implementation;

export const functions = {
  push,
  append,
  deleteKeyIterative,
  deleteIndex,
  deleteList,
  lengthIterative,
  lengthRecursive
}

export default SinglyLinkedList;
