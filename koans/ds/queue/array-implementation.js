import implementation from './001-array-implementation.js';

class Queue{
  constructor(capacity = 100){
    this.capacity = capacity;
    this.size = 0;
    this.front = 0;
    this.rear = this.capacity - 1;
    this.array = new Array(this.capacity);
  }

  isEmpty(){
    return this.size === 0;
  }

  isFull(){
    return this.size === this.capacity;
  }
}

Queue.prototype.enqueue = implementation.enqueue;
Queue.prototype.dequeue = implementation.dequeue;
Queue.prototype.getFront = implementation.getFront;
Queue.prototype.getRear = implementation.getRear;

Queue.prototype.toString = function(){

  if(this.size === 0){
    return "EMPTY";
  }

  let msg = "";

  let i = this.front;

  while(i !== this.rear){
    msg += (this.array[i] + " ");

    i = (i + 1) % this.capacity;
  }

  msg += this.array[this.rear];

  return msg;

}

export default Queue;
