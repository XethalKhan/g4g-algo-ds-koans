import implementation from './002-linked-list-implementation.js';

class Queue{
  constructor(){
    this.front = null;
    this.rear = null;
  }

  isEmpty(){
    return this.rear === null;
  }
}

Queue.prototype.enqueue = implementation.enqueue;
Queue.prototype.dequeue = implementation.dequeue;
Queue.prototype.getFront = implementation.getFront;
Queue.prototype.getRear = implementation.getRear;

Queue.prototype.toString = function(){

  if(this.front === null){
    return "EMPTY";
  }

  let msg = "";

  let current = this.front;

  while(current.next !== null){
    msg += current.value + " ";
    current = current.next;
  }

  msg += current.value;

  return msg;

}

export default Queue;
