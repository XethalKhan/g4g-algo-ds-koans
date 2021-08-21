/*
Write a function to count the number of nodes in a given singly linked list.

For example, the function should return 5 for linked list 1->3->1->2->1.

Recursive Solution

1) If head is NULL, return 0.
2) Else return 1 + getCount(head->next)

See: https://www.geeksforgeeks.org/find-length-of-a-linked-list-iterative-and-recursive/
Recursive solution

Time xomplexity: O(n)
Auxiliary space: O(n)
*/

function count(node){

  if(node === null){
    return 0;
  }

  return count(node.next) + 1;

}

export default count;
