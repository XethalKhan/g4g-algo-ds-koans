import implementation from './002-linked-list-implementation.js';

class Stack{
  constructor(){
    this.head = null;
  }
}

Stack.prototype.push = implementation.push;
Stack.prototype.pop = implementation.pop;
Stack.prototype.peek = implementation.peek;
Stack.prototype.isEmpty = implementation.isEmpty;

Stack.prototype.toString = function(){

  if(this.head === null){
    return "EMPTY";
  }

  let msg = "";
  let current = this.head;

  while(current.next !== null){
    msg += (current.value + " ");
    current = current.next;
  }

  msg += current.value;

  return msg;

}

export default Stack;
