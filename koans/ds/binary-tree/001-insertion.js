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

  let add = new Node(value);

  if(this.root === null){
    this.root = add;
    return;
  }

  let q = new Queue();
  q.enqueue(this.root);

  while(!q.isEmpty()){

    let temp = q.dequeue();

    if(temp.left === null){
      temp.left = add;
      return;
    }else{
      q.enqueue(temp.left);
    }

    if(temp.right === null){
      temp.right = add;
      return;
    }else{
      q.enqueue(temp.right);
    }

  }

}

export default insert;
