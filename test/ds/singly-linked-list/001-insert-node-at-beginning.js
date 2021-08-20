import assert from 'assert/strict';

import SinglyLinkedList from './../../../lib/classes/singly-linked-list.js';



const MSG = "Singly linked list, insert node at beggining FAIL!\n"
+ "See file: ds/singly-linked-list/001-insert-node-at-beginning.js";

function test(){

  let list = new SinglyLinkedList();

  list.push(10);

  assert.deepStrictEqual(list.toString(), "10", MSG);

  list.push(20);

  assert.deepStrictEqual(list.toString(), "20 => 10", MSG);

  list.push(30);

  assert.deepStrictEqual(list.toString(), "30 => 20 => 10", MSG);

}

export default test;
