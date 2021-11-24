import assert from 'assert/strict';

import SinglyLinkedList from './../../../koans/ds/singly-linked-list/index.js';



const MSG = "Singly linked list, search an item inside singly linked list FAIL!\n"
+ "See file: ds/singly-linked-list/008-search-iterative.js";

function test(){

  let list = new SinglyLinkedList();

  assert.deepStrictEqual(
    list.searchIterative(10),
    false,
    MSG
  );

  list.append(10);
  list.append(20);
  list.append(30);
  list.append(40);
  list.append(50);
  list.append(60);

  assert.deepStrictEqual(
    list.searchIterative(20),
    true,
    MSG
  );

  assert.deepStrictEqual(
    list.searchIterative(70),
    false,
    MSG
  );

  list.deleteKeyIterative(20);

  assert.deepStrictEqual(
    list.searchIterative(20),
    false,
    MSG
  );

  assert.deepStrictEqual(
    list.searchIterative(40),
    true,
    MSG
  );

  list.deleteKeyIterative(40);

  assert.deepStrictEqual(
    list.searchIterative(40),
    false,
    MSG
  );

  assert.deepStrictEqual(
    list.searchIterative(30),
    true,
    MSG
  );

}

export default test;
