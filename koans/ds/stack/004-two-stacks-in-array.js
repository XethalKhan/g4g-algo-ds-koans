/*
Create a data structure twoStacks that represents two stacks. Implementation of twoStacks should
use only one array, i.e., both stacks should use the same array for storing elements. Following
functions must be supported by twoStacks:

push1(int x) –> pushes x to first stack 
push2(int x) –> pushes x to second stack
pop1() –> pops an element from first stack and return the popped element 
pop2() –> pops an element from second stack and return the popped element

Implementation of twoStack should be space efficient.

The idea is to start two stacks from two extreme corners of arr[].
stack1 starts from the leftmost element, the first element in stack1 is pushed at index 0.
The stack2 starts from the rightmost corner, the first element in stack2 is pushed at index (n-1).
Both stacks grow (or shrink) in opposite direction. To check for overflow, all we need to check
is for space between top elements of both stacks.

See: https://www.geeksforgeeks.org/implement-two-stacks-in-an-array/
Method 2 (A space efficient implementation)

Time Complexity: 
    Push operation: O(1)
    Pop operation: O(1)
Auxiliary Space: O(N)
*/

class TwoStack{

    constructor(size = 100){
        this.arr = new Array(size);
        this.left = -1;
        this.right = size;
    }

    push1(value){

        if(this.left + 1 >= this.right){
            return false;
        }

        this.arr[++this.left] = value;

        return true;

    }

    push2(value){

        if(this.right - 1 <= this.left){
            return false;
        }

        this.arr[--this.right] = value;

        return true;

    }

    pop1(){

        if(this.left < 0){
            return null;
        }

        let value = this.arr[this.left];
        this.left = --this.left;
        return value;
    }

    pop2(){

        if(this.right >= this.arr.length){
            return null;
        }

        let value = this.arr[this.right];
        this.right = ++this.right;
        return value;

    }

    toString(){
        return this.arr.toString();
    }

}

export default TwoStack;