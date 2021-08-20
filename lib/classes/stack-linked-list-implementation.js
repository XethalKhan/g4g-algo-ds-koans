import Node from './node.js';

import stackLinkedListImplementationFunctions from './../../koans/ds/stack/002-linked-list-implementation.js';

class Stack{
  constructor(){
    this.head = null;
  }
}

Stack.prototype.push = stackLinkedListImplementationFunctions.push;
Stack.prototype.pop = stackLinkedListImplementationFunctions.pop;
Stack.prototype.peek = stackLinkedListImplementationFunctions.peek;
Stack.prototype.isEmpty = stackLinkedListImplementationFunctions.isEmpty;

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
