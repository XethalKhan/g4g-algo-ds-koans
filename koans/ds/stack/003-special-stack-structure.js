import Stack from './linked-list-implementation.js';

/*
Design a Data Structure SpecialStack that supports all the stack operations like
push(), pop(), isEmpty(), isFull() and an additional operation getMin() which should
return minimum element from the SpecialStack. All these operations of SpecialStack must be O(1).
To implement SpecialStack, you should only use standard Stack data structure and no
other data structure like arrays, list, . etc.

Example:

Consider the following SpecialStack
16  --> TOP
15
29
19
18

When getMin() is called it should return 15, which is the minimum element in the current stack. 

If we do pop two times on stack, 
the stack becomes
29  --> TOP
19
18

When getMin() is called, it should return 18 which is the minimum in the current stack.

See: https://www.geeksforgeeks.org/design-and-implement-special-stack-data-structure/
Further optimized O(1) time complexity and O(1) space complexity solution

The solution can be made to work in O(1) time complexity and O(1) space complexity. The idea is
to store min element found till current insertion) along with all the elements as a reminder of
a DUMMY_VALUE, and the actual element as a multiple of the DUMMY_VALUE. For example, while pushing
an element ‘e’ into the stack, store it as (e * DUMMY_VALUE + minFoundSoFar), this way we
know what was the minimum value present in the stack at the time ‘e’ was being inserted.

To pop the actual value just return e / DUMMY_VALUE and set the new minimum as (e % DUMMY_VALUE).

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

You can not insert elements into the stack that are greater than dumm variable.
Results will get messy.

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

Time complexity: O(1) for all operations
Space complexity: O(1) for all operations
*/

class SpecialStack{

    constructor(){
        this.stack = new Stack();
        this.min = Number.MAX_VALUE;
        this.dummy = 100;
    }

    push(value){

        if(value < this.min){
            this.min = value;
        }

        let top = (value * this.dummy) + this.min;

        this.stack.push(top);
    }

    pop(){
        let top = this.stack.pop();

        if(top == null){
            return null;
        }

        let result = Math.floor((top - this.min) / this.dummy)

        this.min = this.stack.peek() % this.dummy;

        return result;
    }

    peek(){

        let top = this.stack.peek();

        if(top == null){
            return null;
        }

        return Math.floor((top - this.min) / this.dummy);

    }

    isEmpty(){

        return this.stack.isEmpty();

    }

    getMin(){

        if(this.stack.isEmpty()){
            return Number.MAX_VALUE;
        }

        return this.min;

    }

}

export default SpecialStack;