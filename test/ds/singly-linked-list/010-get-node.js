import assert from 'assert/strict';

import SinglyLinkedList from './../../../koans/ds/singly-linked-list/index.js';



const MSG = "Singly linked list, get node by index FAIL!\n"
+ "See file: ds/singly-linked-list/010-get-node.js";

function test(){

  let list = new SinglyLinkedList();

  assert.deepStrictEqual(
    list.getNode(3),
    null,
    MSG
  );

  list.append(10);
  list.append(20);
  list.append(30);
  list.append(40);
  list.append(50);
  list.append(60);

  assert.deepStrictEqual(
    list.getNode(0),
    10,
    MSG
  );

  assert.deepStrictEqual(
    list.getNode(2),
    30,
    MSG
  );

  list.deleteKeyIterative(20);

  assert.deepStrictEqual(
    list.getNode(2),
    40,
    MSG
  );

  assert.deepStrictEqual(
    list.getNode(5),
    null,
    MSG
  );

  list.deleteKeyIterative(40);

  assert.deepStrictEqual(
    list.getNode(3),
    60,
    MSG
  );

  assert.deepStrictEqual(
    list.getNode(1),
    30,
    MSG
  );

}

export default test;
