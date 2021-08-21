import assert from 'assert/strict';

import BinaryTree from './../../../koans/ds/binary-tree/index.js';

const MSG = "Binary tree insertion FAIL!\n"
+ "See file: ds/binary-tree/001-insertion.js";

function test(){

  let bt = new BinaryTree();

  assert.deepStrictEqual(bt.toString(), "EMPTY", MSG);

  bt.insert(1);

  assert.deepStrictEqual(bt.toString(), "1", MSG);

  bt.insert(2);

  assert.deepStrictEqual(bt.toString(), "2 1", MSG);

  bt.insert(3);

  assert.deepStrictEqual(bt.toString(), "2 1 3", MSG);

  bt.insert(4);

  assert.deepStrictEqual(bt.toString(), "4 2 1 3", MSG);

  bt.insert(5);

  assert.deepStrictEqual(bt.toString(), "4 2 5 1 3", MSG);

  bt.insert(6);

  assert.deepStrictEqual(bt.toString(), "4 2 5 1 6 3", MSG);

  bt.insert(7);

  assert.deepStrictEqual(bt.toString(), "4 2 5 1 6 3 7", MSG);

}

export default test;
