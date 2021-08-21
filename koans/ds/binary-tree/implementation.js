import Queue from './../queue/index.js';

import insert from './001-insertion.js';
import remove from './002-remove.js';

class BinaryTree{
  constructor(){
    this.root = null;
  }
}

BinaryTree.prototype.insert = insert;
BinaryTree.prototype.delete = remove;

BinaryTree.prototype.toString = function(){

  if(this.root === null){
    return "EMPTY";
  }

  let out = new Queue();

  inorderString(this.root, out);

  return out.toString();

}

function inorderString(node, queue) {
    if (node === null){
        return;
    }

    /* first recur on left child */
    inorderString(node.left, queue);

    /* then print the data of node */
    queue.enqueue(node.value);

    /* now recur on right child */
    inorderString(node.right, queue);
}

export default BinaryTree;
