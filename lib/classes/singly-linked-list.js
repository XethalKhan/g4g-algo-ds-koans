import Node from './node.js';

import koans from './../../koans/index.js';

const singlyLinkedListFunctions = koans.dataStructures.singlyLinkedList;

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

SinglyLinkedList.prototype.push = singlyLinkedListFunctions.push;
SinglyLinkedList.prototype.append = singlyLinkedListFunctions.append;
SinglyLinkedList.prototype.deleteKeyIterative = singlyLinkedListFunctions.deleteKeyIterative;
SinglyLinkedList.prototype.deleteIndex = singlyLinkedListFunctions.deleteIndex;
SinglyLinkedList.prototype.deleteList = singlyLinkedListFunctions.deleteList;
SinglyLinkedList.prototype.lengthIterative = singlyLinkedListFunctions.lengthIterative;
SinglyLinkedList.prototype.lengthRecursive = function(){ return singlyLinkedListFunctions.lengthRecursive(this.head); };

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
