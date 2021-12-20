import assert from 'assert/strict';

import SinglyLinkedList from './../../../koans/ds/singly-linked-list/index.js';



const MSG = "Singly linked list, get node from end FAIL!\n"
+ "See file: ds/singly-linked-list/011-get-node-from-end.js";

function test(){

  let list = new SinglyLinkedList();

  assert.deepStrictEqual(
    list.getNodeEnd(3),
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
    list.getNodeEnd(1),
    60,
    MSG
  );


  assert.deepStrictEqual(
    list.getNodeEnd(2),
    50,
    MSG
  );

  list.deleteKeyIterative(20);

  assert.deepStrictEqual(
    list.getNodeEnd(3),
    40,
    MSG
  );

  assert.deepStrictEqual(
    list.getNodeEnd(6),
    null,
    MSG
  );

  list.deleteKeyIterative(40);

  assert.deepStrictEqual(
    list.getNodeEnd(3),
    30,
    MSG
  );

  assert.deepStrictEqual(
    list.getNodeEnd(1),
    60,
    MSG
  );

}

export default test;
