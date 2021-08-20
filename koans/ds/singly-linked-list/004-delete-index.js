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

  return null;

}

export default deleteIndex;
