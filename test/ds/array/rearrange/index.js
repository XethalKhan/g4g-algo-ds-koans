import rearrangeArrIEqualITest from './001-rearrange-such-that-i-=-arr[i].js';
import reverseIterativeTest from './002-reverse-iterative.js';
import reverseRecursiveTest from './003-reverse-recursive.js';

export const rearrangeArrIEqualI = rearrangeArrIEqualITest;
export const reverseIterative = reverseIterativeTest;
export const reverseRecursive = reverseRecursiveTest;

export function full(){
  rearrangeArrIEqualITest();
  reverseIterativeTest();
  reverseRecursiveTest();
}

const rearrange = {
  rearrangeArrIEqualI,
  reverseIterative,
  reverseRecursive,
  full
}

export default rearrange;
