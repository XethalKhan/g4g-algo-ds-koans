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

Implementing Stack using Arrays

Pros: Easy to implement. Memory is saved as pointers are not involved.
Cons: It is not dynamic. It doesn’t grow and shrink depending on needs at runtime.
*/

function push(value){

  if(this.top === (this.size - 1)){
    return false;
  }

  this.arr[++this.top] = value;

  return true;

}

function pop(){

  if(this.top === -1){
    return null;
  }

  return this.arr[this.top--];

}

function peek(){

  if(this.top === -1){
    return null;
  }

  return this.arr[this.top];
}

function isEmpty(){

  if(this.top === -1){
    return true;
  }

  return false;
}

const arrayImplementation = {
  push,
  pop,
  peek,
  isEmpty
}

export default arrayImplementation;
