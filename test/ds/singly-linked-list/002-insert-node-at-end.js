import assert from 'assert/strict';

import SinglyLinkedList from './../../../koans/ds/singly-linked-list/index.js';



const MSG = "Singly linked list, insert node at end FAIL!\n"
+ "See file: ds/singly-linked-list/002-insert-node-at-end.js";

function test(){

  let list = new SinglyLinkedList();

  list.append(10);

  assert.deepStrictEqual(list.toString(), "10", MSG);

  list.append(20);

  assert.deepStrictEqual(list.toString(), "10 => 20", MSG);

  list.append(30);

  assert.deepStrictEqual(list.toString(), "10 => 20 => 30", MSG);

}

export default test;
