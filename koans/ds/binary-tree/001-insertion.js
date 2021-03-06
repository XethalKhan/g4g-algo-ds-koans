import Queue from './../queue/index.js';

class Node{

  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }

}

/*
The idea is to do iterative level order traversal of the given tree using queue.
If we find a node whose left child is empty, we make new key as left child of
the node. Else if we find a node whose right child is empty, we make the new
key as right child. We keep traversing the tree until we find a node whose
either left or right is empty.
*/

function insert(value){
}

export default insert;
