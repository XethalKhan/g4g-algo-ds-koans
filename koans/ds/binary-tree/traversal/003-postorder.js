/*
Postorder traversal

Algorithm:
   1. Traverse the left subtree, i.e., call Postorder(left-subtree)
   2. Traverse the right subtree, i.e., call Postorder(right-subtree)
   3. Visit the root.

See: https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/
Postorder Traversal

Time complexity: O(n)
Space complexity: O(1) 
*/

function traversal(node, arr){

    if(node == null){
        return;
    }

    traversal(node.left, arr);

    traversal(node.right, arr);

    arr.push(node.value);

}

export default traversal;