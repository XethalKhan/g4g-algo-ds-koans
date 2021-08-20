import assert from 'assert/strict';

import SinglyLinkedList from './../../../lib/classes/singly-linked-list.js';



const MSG = "Singly linked list, delete a node by index FAIL!\n"
+ "See file: ds/singly-linked-list/004-delete-index.js";

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

  list.deleteIndex(2);

  assert.deepStrictEqual(
    list.toString(),
    "10 => 20 => 40 => 50 => 60",
    MSG
  );

  list.deleteIndex(10);

  assert.deepStrictEqual(
    list.toString(),
    "10 => 20 => 40 => 50 => 60",
    MSG + "\nCase: delete an index that does not exist in singly linked list"
  );

  list.deleteIndex(3);

  assert.deepStrictEqual(
    list.toString(),
    "10 => 20 => 40 => 60",
    MSG
  );

  list.deleteIndex(0);

  assert.deepStrictEqual(
    list.toString(),
    "20 => 40 => 60",
    MSG
  );

}

export default test;
