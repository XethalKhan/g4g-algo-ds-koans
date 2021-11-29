import inorderTraversalTest from './001-inorder.js';
import preorderTraversalTest from './002-preorder.js';
import postorderTraversalTest from './003-postorder.js';

export const inorderTraversal = inorderTraversalTest;
export const preorderTraversal = preorderTraversalTest;
export const postorderTraversal = postorderTraversalTest;

export function full(){
    inorderTraversal();
    preorderTraversal();
    postorderTraversal();
  }

const traversal = {
    inorderTraversal,
    preorderTraversal,
    postorderTraversal,
    full
}

export default traversal;