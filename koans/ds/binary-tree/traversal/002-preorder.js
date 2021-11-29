/*
Preorder traversal

Algorithm:
   1. Visit the root.
   2. Traverse the left subtree, i.e., call Preorder(left-subtree)
   3. Traverse the right subtree, i.e., call Preorder(right-subtree)

See: https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/
Preorder Traversal

Time complexity: O(n)
Space complexity: O(1) 
*/

function traversal(node, arr){

    if(node == null){
        return;
    }

    arr.push(node.value);

    traversal(node.left, arr);

    traversal(node.right, arr);

}

export default traversal;