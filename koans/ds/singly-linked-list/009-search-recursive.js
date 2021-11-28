/*
Write a function that searches a given key ‘x’ in a given singly linked list.

The function should return true if x is present in linked list and false otherwise. 

Recursive solution

1) If head is NULL, return false.
2) If head's key is same as x, return true;
3) Else return search(head->next, x) 

See: https://www.geeksforgeeks.org/search-an-element-in-a-linked-list-iterative-and-recursive/
Recursive solution

Time complexity: O(n)
Auxiliary space: O(1)
*/

function search(item, node){

    if(node == null){
        return false;
    }

    if(node.value == item){
        return true;
    }else{
        return search(item, node.next);
    }

}

export default search;