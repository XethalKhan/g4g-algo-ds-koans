/**
Given a ‘key’, delete the first occurrence of this key in the linked list.

Iterative Method:
To delete a node from the linked list, we need to do the following steps.
1) Find the previous node of the node to be deleted.
2) Change the next of the previous node.
3) Free memory for the node to be deleted.

Time complexity:O(n) where n is the number of nodes in linked list.
Auxilary space: O(0)
*/
function deleteKey(key){

  if(this.head === null){
    return null;
  }

  if(this.head.value === key){
    let oldHead = this.head;
    this.head = this.head.next;
    oldHead.next = null;
    return oldHead;
  }

  let prev = this.head;
  let current = this.head.next;

  while(current.next !== null){

    if(current.value === key){
      prev.next = current.next;
      current.next = null;
      return current;
    }

    prev = prev.next;
    current = current.next;

  }

  return null;

}

export default deleteKey;
