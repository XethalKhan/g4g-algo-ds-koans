import insertNodeAtBeginningTest from './001-insert-node-at-beginning.js';
import insertNodeAtEndTest from './002-insert-node-at-end.js';
import deleteNodeByKeyIterativeTest from './003-delete-key-iterative.js';
import deleteNodeByIndexTest from './004-delete-index.js';
import deleteListTest from './005-delete-list.js';
import lengthIterativeTest from './006-length-iterative.js';
import lengthRecursiveTest from './007-length-recursive.js';

function test(){
  insertNodeAtBeginningTest();
  insertNodeAtEndTest();
  deleteNodeByKeyIterativeTest();
  deleteNodeByIndexTest();
  deleteListTest();
  lengthIterativeTest();
  lengthRecursiveTest();
}

export default test;
