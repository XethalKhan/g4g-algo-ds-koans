import assert from 'assert/strict';

import SinglyLinkedList from './../../../lib/classes/singly-linked-list.js';



const MSG = "Singly linked list, delete a node by key iterative FAIL!\n"
+ "See file: ds/singly-linked-list/003-delete-key-iterative.js";

function test(){

  let list = new SinglyLinkedList();

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

  list.deleteKeyIterative(20);

  assert.deepStrictEqual(
    list.toString(),
    "10 => 30 => 40 => 50 => 60",
    MSG
  );

  list.deleteKeyIterative(20);

  assert.deepStrictEqual(
    list.toString(),
    "10 => 30 => 40 => 50 => 60",
    MSG + "\nCase: delete a key that does not exist in singly linked list"
  );

  list.deleteKeyIterative(40);

  assert.deepStrictEqual(
    list.toString(),
    "10 => 30 => 50 => 60",
    MSG
  );

}

export default test;
