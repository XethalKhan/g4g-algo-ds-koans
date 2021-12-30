import infixToPostfixTest from './001-infix-to-postfix.js';
import prefixToInfixTest from './002-prefix-to-infix.js';

export const infixToPostfix = infixToPostfixTest;
export const prefixToInfix = prefixToInfixTest;

export function full(){
    infixToPostfixTest();
    prefixToInfixTest();
}

const standardProblems = {
    infixToPostfix,
    prefixToInfix,
    full
}
  

export default standardProblems;