/*
Like Stack, Queue is a linear structure which follows a particular order in
which the operations are performed. The order is First In First Out (FIFO).
A good example of queue is any queue of consumers for a resource where the
consumer that came first is served first. The difference between stacks and
queues is in removing. In a stack we remove the item the most recently added;
in a queue, we remove the item the least recently added.

For implementing queue, we need to keep track of two indices, front and rear.
We enqueue an item at the rear and dequeue an item from the front. If we simply
increment front and rear indices, then there may be problems, the front may
reach the end of the array. The solution to this problem is to increase front
and rear in circular manner.

See: https://www.geeksforgeeks.org/queue-set-1introduction-and-array-implementation/
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

const arrayImplementation = {
  enqueue,
  dequeue,
  getFront,
  getRear
};

export default arrayImplementation;
