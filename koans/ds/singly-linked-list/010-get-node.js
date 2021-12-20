/*

Write a function that takes a an integer index and returns the data value stored in 
the node at that index position of linked list.

Example:

Input:  1->10->30->14,  index = 2
Output: 30  
The node at index 2 is 30

Algorithm:

1. Initialize count = 0
2. Loop through the link list
     a. if count is equal to the passed index then return current node
     b. Increment count
     c. change current to point to next of the current.

See: https://www.geeksforgeeks.org/write-a-function-to-get-nth-node-in-a-linked-list/

*/
function getNode(index){

    let current = this.head;
    let count = 0;

    while(current != null){

        if(count === index){
            return current.value;
        }

        current = current.next;
        count+=1;

    }

    return null;

}

export default getNode;