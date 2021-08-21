import assert from 'assert/strict';

import SinglyLinkedList from './../../../koans/ds/singly-linked-list/index.js';



const MSG = "Singly linked list, length of a list iterative FAIL!\n"
+ "See file: ds/singly-linked-list/006-length-iterative.js";

function test(){

  let list = new SinglyLinkedList();

  assert.deepStrictEqual(
    list.lengthIterative(),
    0,
    MSG
  );

  list.append(10);
  list.append(20);
  list.append(30);
  list.append(40);
  list.append(50);
  list.append(60);

  assert.deepStrictEqual(
    list.toString(),
    "10 => 20 => 30 => 40 => 50 => 60",
    "Singly linked list insertion method FAIL!\n" +
    "See file: ds/singly-linked-list/002-insert-node-at-end.js"
  );

  assert.deepStrictEqual(
    list.lengthIterative(),
    6,
    MSG
  );

  list.deleteKeyIterative(20);

  assert.deepStrictEqual(
    list.toString(),
    "10 => 30 => 40 => 50 => 60",
    MSG
  );

  assert.deepStrictEqual(
    list.lengthIterative(),
    5,
    MSG
  );

  list.deleteKeyIterative(40);

  assert.deepStrictEqual(
    list.toString(),
    "10 => 30 => 50 => 60",
    MSG
  );

  assert.deepStrictEqual(
    list.lengthIterative(),
    4,
    MSG
  );

}

export default test;
