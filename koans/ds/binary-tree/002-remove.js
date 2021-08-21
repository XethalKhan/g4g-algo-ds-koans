import Queue from './../queue/index.js';

/*
Given a binary tree, delete a node from it by making sure that tree shrinks
from the bottom (i.e. the deleted node is replaced by the bottom-most and
rightmost node). This is different from BST deletion. Here we do not have
any order among elements, so we replace with the last element.

Examples :

Delete 10 in below tree
       10
     /    \
    20     30
Output :
       30
     /
    20


Delete 20 in below tree
       10
     /    \
    20     30
            \
            40
Output :
       10
     /   \
    40    30

Algorithm
1. Starting at the root, find the deepest and rightmost node in binary tree
and node which we want to delete.
2. Replace the deepest rightmost node’s data with the node to be deleted.
3. Then delete the deepest rightmost node.
*/

function remove(value){

  return false;

}

export default remove;
