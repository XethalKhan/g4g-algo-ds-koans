import Stack from './../stack/index.js';
import Queue from './linked-list-implementation.js';

/*

Give an algorithm for reversing a queue Q. Only following standard operations are allowed on queue. 

enqueue(x) : Add an item x to rear of queue.
dequeue() : Remove an item from front of queue.
empty() : Checks if a queue is empty or not.

For reversing the queue one approach could be to store the elements of the queue in a temporary data
structure in a manner such that if we re-insert the elements in the queue they would get inserted in
reverse order. So now our task is to choose such data-structure which can serve the purpose. According
to the approach, the data-structure should have the property of ‘LIFO’ as the last element to be inserted
in the data structure should actually be the first element of the reversed queue. The stack could help in
approaching this problem. This will be a two-step process: 
 
1. Pop the elements from the queue and insert into the stack.
(Topmost element of the stack is the last element of the queue)

2. Pop the elements of the stack to insert back into the queue.
(The last element is the first one to be inserted into the queue)


See: https://www.geeksforgeeks.org/reversing-a-queue/

Time Complexity: O(n). 
As we need to insert all the elements in the stack and later to the queue.

Auxiliary Space: O(N). 
Use of stack to store values. 

*/

function solve(queue){

    let stack = new Stack();

    while(!queue.isEmpty()){
        stack.push(queue.dequeue());
    }

    let result = new Queue();

    while(!stack.isEmpty()){
        result.enqueue(stack.pop());
    }

    return result;

}

export default solve;