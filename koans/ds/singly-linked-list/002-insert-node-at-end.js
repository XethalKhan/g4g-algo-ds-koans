class Node{

  constructor(value){
    this.value = value;
    this.next = null;
  }

}


/**
The new node is always added after the last node of the given Linked List.
For example if the given Linked List is 5->10->15->20->25 and we add an item 30
at the end, then the Linked List becomes 5->10->15->20->25->30.
Since a Linked List is typically represented by the head of it, we have to
traverse the list till the end and then change the next to last node to
a new node.

See: https://www.geeksforgeeks.org/linked-list-set-2-inserting-a-node/
Add a node at the end: (6 steps process).

Time complexity:O(n) where n is the number of nodes in linked list. This method
can also be optimized to work in O(1) by keeping an extra pointer to the tail
of linked list.

Auxilary space: O(1)
*/
function append(value){

  let node = new Node(value);

  if(this.head === null){
    this.head = node;
    return;
  }

  let end = this.head;

  while(end.next !== null){
    end = end.next;
  }

  end.next = node;

}

export default append;
