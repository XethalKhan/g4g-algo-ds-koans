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

  if(this.root === null){
    return false;
  }

  if(this.root.left === null && this.root.right === null && this.root.value === value){
    this.root = null;
    return true;
  }

  let tmp = null;
  let del = null;

  let q = new Queue();
  q.enqueue(this.root);

  while(!q.isEmpty()){

    tmp = q.dequeue();

    if(tmp.value === value){
      del = tmp;
    }

    if(tmp.left !== null){
      q.enqueue(tmp.left);
    }

    if(tmp.right !== null){
      q.enqueue(tmp.right);
    }

  }

  if(del !== null){
    let replaceValue = tmp.value;
    deleteDeepest(this.root, tmp);
    del.value = replaceValue;
    return true;
  }

  return false;

}

function deleteDeepest(root, del){

  let q = new Queue();
  q.enqueue(root);

  while(!q.isEmpty()){

    let tmp = q.dequeue();

    if(tmp == del){
      tmp = null;
    }

    if(tmp.left !== null){

      if(tmp.left === del){
        tmp.left = null;
        return;
      }else{
        q.enqueue(tmp.left);
      }

    }

    if(tmp.right !== null){

      if(tmp.right === del){
        tmp.right = null;
        return;
      }else{
        q.enqueue(tmp.right);
      }

    }

  }

}

export default remove;
