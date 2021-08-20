import implementation from './001-array-implementation.js';

class Stack{
  constructor(size = 100){
    this.size = size;
    this.top = -1;
    this.arr = new Array(this.size);
  }
}

Stack.prototype.push = implementation.push;
Stack.prototype.pop = implementation.pop;
Stack.prototype.peek = implementation.peek;
Stack.prototype.isEmpty = implementation.isEmpty;

Stack.prototype.toString = function(){

  if(this.top === -1){
    return "EMPTY";
  }

  let msg = "";

  for(let i = this.top; i > 0; i--){
    msg += (this.arr[i] + " ");
  }

  msg += this.arr[0];

  return msg;

}

export default Stack;
