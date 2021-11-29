/*
Inorder traversal

Algorithm:
   1. Traverse the left subtree, i.e., call Inorder(left-subtree)
   2. Visit the root.
   3. Traverse the right subtree, i.e., call Inorder(right-subtree)

See: https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/
Inorder Traversal

Time complexity: O(n)
Space complexity: O(1) 
*/

function traversal(node, arr){

    if(node == null){
        return;
    }

    traversal(node.left, arr);

    arr.push(node.value);

    traversal(node.right, arr);

}

export default traversal;