import assert from 'assert/strict';

import SinglyLinkedList from './../../../koans/ds/singly-linked-list/index.js';



const MSG = "Singly linked list, search an item inside singly linked list FAIL!\n"
+ "See file: ds/singly-linked-list/009-search-recursive.js";

function test(){

  let list = new SinglyLinkedList();

  assert.deepStrictEqual(
    list.searchRecursive(10),
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
    list.searchRecursive(20),
    true,
    MSG
  );

  assert.deepStrictEqual(
    list.searchRecursive(70),
    false,
    MSG
  );

  list.deleteKeyIterative(20);

  assert.deepStrictEqual(
    list.searchRecursive(20),
    false,
    MSG
  );

  assert.deepStrictEqual(
    list.searchRecursive(40),
    true,
    MSG
  );

  list.deleteKeyIterative(40);

  assert.deepStrictEqual(
    list.searchRecursive(40),
    false,
    MSG
  );

  assert.deepStrictEqual(
    list.searchRecursive(30),
    true,
    MSG
  );

}

export default test;
