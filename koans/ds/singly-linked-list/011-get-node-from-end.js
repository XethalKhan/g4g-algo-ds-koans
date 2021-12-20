/*
Given a Linked List and a number n, write a function that returns the value at the n'th node from the end of the Linked.

Algorithm:
Maintain two pointers - reference pointer and main pointer.
Initialize both reference and main pointers to head.
First, move the reference pointer to n nodes from head.
Now move both pointers one by one until the reference pointer reaches the end. 
Now the main pointer will point to n'th node from the end. Return the main pointer.

See: https://www.geeksforgeeks.org/nth-node-from-the-end-of-a-linked-list/
Method 2 (Use two pointers) 
*/

function getNodeEnd(n){

    let main = this.head;
    let reference = this.head;

    if(n < 0){
        return null;
    }

    for(let i = 0; i < n; i++){
        if(reference === null){
            return null;
        }
        reference = reference.next;
    }

    while(reference != null){
        main = main.next;
        reference = reference.next;
    }

    return main.value;

}

export default getNodeEnd;