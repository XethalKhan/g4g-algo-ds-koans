import Stack from './../linked-list-implementation.js';

/*

Infix : An expression is called the Infix expression if the operator appears
in between the operands in the expression. Simply of the form (operand1 operator operand2). 
Example : (A+B) * (C-D)

Prefix : An expression is called the prefix expression if the operator
appears in the expression before the operands. Simply of the
form (operator operand1 operand2). 
Example : *+AB-CD (Infix : (A+B) * (C-D) )

Examples: 

Input :  Prefix :  *+AB-CD
Output : Infix : ((A+B)*(C-D))

Input :  Prefix :  *-A/BC-/AKL
Output : Infix : ((A-(B/C))*((A/K)-L))

Algorithm:

Read the Prefix expression in reverse order (from right to left)
If the symbol is an operand, then push it onto the Stack
If the symbol is an operator, then pop two operands from the Stack 
Create a string by concatenating the two operands and the operator between them. 
string = (operand1 + operator + operand2) 
And push the resultant string back to Stack
Repeat the above steps until end of Prefix expression.

See: https://www.geeksforgeeks.org/prefix-infix-conversion/
*/

function solve(prefix){

    let reverse = Array.from(prefix).reverse();
    let stack = new Stack();

    reverse.forEach((char) => {

        if((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")){
            stack.push(char);
        }else{
            let a = stack.pop();
            let b = stack.pop();
            stack.push("(" + a + char + b + ")");
        }

        console

    });

    return stack.pop();

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