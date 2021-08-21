class Node{

  constructor(value){
    this.value = value;
    this.next = null;
  }

}

/*
Stack is a linear data structure which follows a particular order in which the
operations are performed. The order may be LIFO(Last In First Out) or
FILO(First In Last Out).

Mainly the following three basic operations are performed in the stack:

Push: Adds an item in the stack. If the stack is full, then it is said
to be an Overflow condition.
Pop: Removes an item from the stack. The items are popped in the reversed order
in which they are pushed. If the stack is empty, then it is said to be
an Underflow condition.
Peek or Top: Returns top element of stack.
isEmpty: Returns true if stack is empty, else false.

Time Complexities of operations on stack: push(), pop(), isEmpty() and peek()
all take O(1) time. We do not run any loop in any of these operations.

See: https://www.geeksforgeeks.org/stack-data-structure-introduction-program/

Implementing Stack using Linked List

Pros: The linked list implementation of stack can grow and shrink according to the needs at runtime.
Cons: Requires extra memory due to involvement of pointers.
*/

function push(value){

  return false;

}

function pop(){

  return null;

}

function peek(){

  return null;

}

function isEmpty(){

  return false;
  
}

const arrayImplementation = {
  push,
  pop,
  peek,
  isEmpty
}

export default arrayImplementation;
