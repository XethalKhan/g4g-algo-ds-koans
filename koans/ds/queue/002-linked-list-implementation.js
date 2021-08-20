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

  return;

}

function dequeue(){

  return null;

}

function getFront(){

  return null;
  
}

function getRear(){

  return null;
  
}

const linkedListImplementation = {
  enqueue,
  dequeue,
  getFront,
  getRear
};

export default linkedListImplementation;
