class Node{

  constructor(value){
    this.value = value;
    this.next = null;
  }

}

/*
In a Queue data structure, we maintain two pointers, front and rear. The front
points the first item of queue and rear points to last item.
enQueue() This operation adds a new node after rear and moves
rear to the next node.
deQueue() This operation removes the front node and moves front to
the next node.

See: https://www.geeksforgeeks.org/queue-linked-list-implementation/
*/

function enqueue(value){

  let tmp = new Node(value);

  if(this.rear === null){
    this.rear = tmp;
    this.front = tmp;
    return;
  }

  this.rear.next = tmp;
  this.rear = tmp;

}

function dequeue(){

  if (this.front === null){
    return null;
  }

  let tmp = this.front;
  this.front = this.front.next;

  if(this.front === null){
    this.rear = null;
  }

  return tmp.value;
}

function getFront(){

  if (this.front === null){
    return null;
  }

  return this.front.value;
}

function getRear(){

  if (this.rear === null){
    return null;
  }

  return this.rear.value;
}

const linkedListImplementation = {
  enqueue,
  dequeue,
  getFront,
  getRear
};

export default linkedListImplementation;
