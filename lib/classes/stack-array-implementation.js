import koans from './../../koans/index.js';

const stackArrayImplementationFunctions = koans.dataStructures.stack.arrayImplementation;

class Stack{
  constructor(size = 100){
    this.size = size;
    this.top = -1;
    this.arr = new Array(this.size);
  }
}

Stack.prototype.push = stackArrayImplementationFunctions.push;
Stack.prototype.pop = stackArrayImplementationFunctions.pop;
Stack.prototype.peek = stackArrayImplementationFunctions.peek;
Stack.prototype.isEmpty = stackArrayImplementationFunctions.isEmpty;

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
