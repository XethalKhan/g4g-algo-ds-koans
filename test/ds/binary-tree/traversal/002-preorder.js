import assert from 'assert/strict';

import BinaryTree from './../../../../koans/ds/binary-tree/index.js';

const MSG = "Binary tree preorder traversal FAIL!\n"
+ "See file: ds/binary-tree/traversal/002-preorder.js";

function test(){

  let bt = new BinaryTree();

  assert.deepStrictEqual(bt.preorderArr(), [], MSG);

  bt.insert(1);

  assert.deepStrictEqual(bt.preorderArr(), [1], MSG);

  bt.insert(2);

  assert.deepStrictEqual(bt.preorderArr(), [1, 2], MSG);

  bt.insert(3);

  assert.deepStrictEqual(bt.preorderArr(), [1, 2, 3], MSG);

  bt.insert(4);

  assert.deepStrictEqual(bt.preorderArr(), [1, 2, 4, 3], MSG);

  bt.insert(5);

  assert.deepStrictEqual(bt.preorderArr(), [1, 2, 4, 5, 3], MSG);

  bt.insert(6);

  assert.deepStrictEqual(bt.preorderArr(), [1, 2, 4, 5, 3, 6], MSG);

  bt.insert(7);

  assert.deepStrictEqual(bt.preorderArr(), [1, 2, 4, 5, 3, 6, 7], MSG);

}

export default test;
