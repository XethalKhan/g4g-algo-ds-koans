import push from './001-insert-node-at-beginning.js';
import append from './002-insert-node-at-end.js';
import deleteKeyIterative from './003-delete-key-iterative.js';
import deleteIndex from './004-delete-index.js';
import deleteList from './005-delete-list.js';
import lengthIterative from './006-length-iterative.js';
import lengthRecursive from './007-length-recursive.js';
import searchIterative from './008-search-iterative.js';

class SinglyLinkedList{

  constructor(){
    this.head = null;
  }

  pop(){

    if(this.head === null){
      return null;
    }

    let start = this.head;
    this.head = this.head.next;

    return start;

  }

  remove(){

    if(this.head === null){
      return null;
    }

    let newEnd = this.head;
    let end = newEnd.next;

    while(end.next !== null){
      newEnd = newEnd.next;
      end = end.next;
    }

    newEnd.next = null;

    return end;

  }

}

SinglyLinkedList.prototype.push = push;
SinglyLinkedList.prototype.append = append;
SinglyLinkedList.prototype.deleteKeyIterative = deleteKeyIterative;
SinglyLinkedList.prototype.deleteIndex = deleteIndex;
SinglyLinkedList.prototype.deleteList = deleteList;
SinglyLinkedList.prototype.lengthIterative = lengthIterative;
SinglyLinkedList.prototype.lengthRecursive = function(){ return lengthRecursive(this.head); };
SinglyLinkedList.prototype.searchIterative = searchIterative;

SinglyLinkedList.prototype.toString = function(){

  if(this.head === null){
    return "EMPTY";
  }

  let end = this.head;
  let msg = "";

  while(end.next !== null){
    msg += end.value + " => ";
    end = end.next;
  }

  msg += end.value;

  return msg;

}

export default SinglyLinkedList;
