import assert from 'assert/strict';

import BinaryTree from './../../../koans/ds/binary-tree/index.js';

const MSG = "Binary tree delete FAIL!\n"
+ "See file: ds/binary-tree/002-delete.js";

function test(){

  let bt = new BinaryTree();

  assert.deepStrictEqual(bt.toString(), "EMPTY", MSG);

  let test1 = bt.delete(1);

  assert.deepStrictEqual(test1, false, MSG);
  assert.deepStrictEqual(bt.toString(), "EMPTY", MSG);

  bt.insert(1);

  assert.deepStrictEqual(bt.toString(), "1", MSG);

  let test2 = bt.delete(1);

  assert.deepStrictEqual(test2, true, MSG);
  assert.deepStrictEqual(bt.toString(), "EMPTY", MSG);

  bt.insert(1);
  bt.insert(2);
  bt.insert(3);

  assert.deepStrictEqual(bt.toString(), "2 1 3", MSG);

  let test3 = bt.delete(2);

  assert.deepStrictEqual(test3, true, MSG);
  assert.deepStrictEqual(bt.toString(), "3 1", MSG);

  bt.insert(2);
  bt.insert(4);

  assert.deepStrictEqual(bt.toString(), "4 3 1 2", MSG);

  let test4 = bt.delete(5);

  assert.deepStrictEqual(test4, false, MSG);
  assert.deepStrictEqual(bt.toString(), "4 3 1 2", MSG);

  let test5 = bt.delete(3);

  assert.deepStrictEqual(test5, true, MSG);
  assert.deepStrictEqual(bt.toString(), "4 1 2", MSG);

  bt.insert(5);
  bt.insert(6);

  assert.deepStrictEqual(bt.toString(), "5 4 6 1 2", MSG);

  let test6 = bt.delete(2);

  assert.deepStrictEqual(test6, true, MSG);
  assert.deepStrictEqual(bt.toString(), "5 4 1 6", MSG);

  let test7 = bt.delete(7);

  assert.deepStrictEqual(test7, false, MSG);
  assert.deepStrictEqual(bt.toString(), "5 4 1 6", MSG);

  let test8 = bt.delete(6);

  assert.deepStrictEqual(test8, true, MSG);
  assert.deepStrictEqual(bt.toString(), "4 1 5", MSG);

  let test9 = bt.delete(1);

  assert.deepStrictEqual(test9, true, MSG);
  assert.deepStrictEqual(bt.toString(), "4 5", MSG);

  let test10 = bt.delete(5);

  assert.deepStrictEqual(test10, true, MSG);
  assert.deepStrictEqual(bt.toString(), "4", MSG);

  let test11 = bt.delete(4);

  assert.deepStrictEqual(test11, true, MSG);
  assert.deepStrictEqual(bt.toString(), "EMPTY", MSG);

}

export default test;
