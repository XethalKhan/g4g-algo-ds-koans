import Stack from './../linked-list-implementation.js';

/*

Infix expression: The expression of the form a op b. When an operator is in-between every pair of operands.
Postfix expression: The expression of the form a b op. When an operator is followed for every pair of operands.

Algorithm:
1. Scan the infix expression from left to right. 
2. If the scanned character is an operand, output it. 
3. Else, 
      1 If the precedence of the scanned operator is greater than the precedence of the 
      operator in the stack(or the stack is empty or the stack contains a ‘(‘ ), push it. 
      2 Else, Pop all the operators from the stack which are greater than or equal to in
      precedence than that of the scanned operator. After doing that Push the scanned
      operator to the stack. (If you encounter parenthesis while popping then stop there
      and push the scanned operator in the stack.) 
4. If the scanned character is an ‘(‘, push it to the stack. 
5. If the scanned character is an ‘)’, pop the stack and output it until a ‘(‘ is encountered, and discard both the parenthesis. 
6. Repeat steps 2-6 until infix expression is scanned. 
7. Print the output 
8. Pop and output from the stack until it is not empty.

See: https://www.geeksforgeeks.org/stack-set-2-infix-to-postfix/

*/

function solve(infix){

    let stack = new Stack();
    let postfix = '';

    Array.from(infix).forEach((char) => {

        if((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z')){

            postfix += char;

        }else if(char == '('){

            stack.push(char);

        }else if(char == ')'){

            while(stack.peek() != '('){

                postfix += stack.pop();

            }

            stack.pop();

        }else{

            while(!stack.isEmpty() && priority(char) <= priority(stack.peek())){

                postfix += stack.pop();

            }

            stack.push(char);

        }

    });

    while(!stack.isEmpty()){
        postfix += stack.pop();
    }

    return postfix;

}

function priority(op){

    if(op === '^'){
        return 3;
    }else if(op === '*' || op === '/'){
        return 2;
    }else if(op === '+' || op === '-'){
        return 1;
    }

    return -1;
}

export default solve;