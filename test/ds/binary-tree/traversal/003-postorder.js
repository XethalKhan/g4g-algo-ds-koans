import assert from 'assert/strict';

import BinaryTree from './../../../../koans/ds/binary-tree/index.js';

const MSG = "Binary tree postorder traversal FAIL!\n"
+ "See file: ds/binary-tree/traversal/003-postorder.js";

function test(){

  let bt = new BinaryTree();

  assert.deepStrictEqual(bt.postorderArr(), [], MSG);

  bt.insert(1);

  assert.deepStrictEqual(bt.postorderArr(), [1], MSG);

  bt.insert(2);

  assert.deepStrictEqual(bt.postorderArr(), [2, 1], MSG);

  bt.insert(3);

  assert.deepStrictEqual(bt.postorderArr(), [2, 3, 1], MSG);

  bt.insert(4);

  assert.deepStrictEqual(bt.postorderArr(), [4, 2, 3, 1], MSG);

  bt.insert(5);

  assert.deepStrictEqual(bt.postorderArr(), [4, 5, 2, 3, 1], MSG);

  bt.insert(6);

  assert.deepStrictEqual(bt.postorderArr(), [4, 5, 2, 6, 3, 1], MSG);

  bt.insert(7);

  assert.deepStrictEqual(bt.postorderArr(), [4, 5, 2, 6, 7, 3, 1], MSG);

}

export default test;
