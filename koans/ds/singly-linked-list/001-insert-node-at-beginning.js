import Node from './../../../lib/classes/node.js';

/**
The new node is always added before the head of the given Linked List.
And newly added node becomes the new head of the Linked List.
For example, if the given Linked List is 10->15->20->25 and we add an item 5
at the front, then the Linked List becomes 5->10->15->20->25. Let us call the
function that adds at the front of the list is push(). The push() must receive
a pointer to the head pointer, because push must change the head pointer to
point to the new node

See: https://www.geeksforgeeks.org/linked-list-set-2-inserting-a-node/
Add a node at the front.

Time complexity:O(1)
Auxilary space: O(0)
*/
function push(value){

  let node = new Node(value);

  if(this.head === null){
    this.head = node;
    return;
  }

  node.next = this.head;
  this.head = node;

}

export default push;
