import test from './test/index.js';

  try{

    test();

  }catch(e){

    console.log(e.message);

    console.log("Expected value: " + JSON.stringify(e.expected));
    console.log("Actual value: " + JSON.stringify(e.actual));

  }

// import SinglyLinkedList from './lib/classes/singly-linked-list.js';
//
// let list = new SinglyLinkedList();
//
// console.log(list.toString());
//
// list.push(10);
//
// console.log(list.toString());
//
// list.push(20);
//
// console.log(list.toString());
//
// list.pop();
//
// console.log(list.toString());
//
// list.push(30);
//
// console.log(list.toString());
//
// list.append(40);
//
// console.log(list.toString());
//
// list.append(50);
//
// console.log(list.toString());
//
// list.deleteKeyIterative(10);
//
// console.log(list.toString());

export default {};
