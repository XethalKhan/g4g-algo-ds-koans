import assert from 'assert/strict';

import SinglyLinkedList from './../../../koans/ds/singly-linked-list/index.js';



const MSG = "Singly linked list, delete entire list FAIL!\n"
+ "See file: ds/singly-linked-list/005-delete-list.js";

function test(){

  let list = new SinglyLinkedList();

  list.append(10);
  list.append(20);
  list.append(30);

  assert.deepStrictEqual(
    list.toString(),
    "10 => 20 => 30",
    "Singly linked list insertion method FAIL!\n" +
    "See file: ds/singly-linked-list/002-insert-node-at-end.js"
  );

  list.deleteList();

  assert.deepStrictEqual(
    list.toString(),
    "EMPTY",
    MSG
  );

  list.append(40);
  list.append(50);
  list.append(60);

  assert.deepStrictEqual(
    list.toString(),
    "40 => 50 => 60",
    "Singly linked list insertion method FAIL!\n" +
    "See file: ds/singly-linked-list/002-insert-node-at-end.js"
  );

  list.deleteList();

  assert.deepStrictEqual(
    list.toString(),
    "EMPTY",
    MSG
  );

}

export default test;
