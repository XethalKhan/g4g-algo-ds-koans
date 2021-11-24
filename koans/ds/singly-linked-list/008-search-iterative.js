/*
Write a function that searches a given key ‘x’ in a given singly linked list.

The function should return true if x is present in linked list and false otherwise. 

Iterative solution

1) Initialize a node pointer, current = head.
2) Do following while current is not NULL
    a) current->key is equal to the key being searched return true.
    b) current = current->next
3) Return false 

See: https://www.geeksforgeeks.org/search-an-element-in-a-linked-list-iterative-and-recursive/
Iterative solution

Time complexity: O(n)
Auxiliary space: O(1)
*/

function search(item){

    let current = this.head;

    while(current != null){

        if(current.value == item){
            return true;
        }

        current = current.next;

    }

    return false;

}

export default search;