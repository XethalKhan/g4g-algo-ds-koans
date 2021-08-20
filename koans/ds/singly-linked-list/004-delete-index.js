import Node from './../../../lib/classes/node.js';

/**
Given a singly linked list and a position, delete a linked list node at the given position.

Example:

Input: position = 1, Linked List = 8->2->3->1->7
Output: Linked List =  8->3->1->7

Input: position = 0, Linked List = 8->2->3->1->7
Output: Linked List = 2->3->1->7

If the node to be deleted is the root, simply delete it.
To delete a middle node, we must have a pointer to the node previous to the node
to be deleted. So if positions are not zero, we run a loop position-1 times
and get a pointer to the previous node.

Time complexity: O(n)
Auxilary space: O(1)
*/
function deleteIndex(index){

  if(this.head  === null){
    return null;
  }

  if(index === 0){
    let start = this.head;
    this.head = this.head.next;
    start.next = null;
    return start;
  }

  let temp = this.head;

  for(let i = 0; i < index - 1 && temp !== null; i++){
    temp = temp.next;
  }

  if (temp === null || temp.next === null){
    return null;
  }

  let deleted = temp.next;

  temp.next = deleted.next;
  deleted.next = null;

  return deleted;

}

export default deleteIndex;
