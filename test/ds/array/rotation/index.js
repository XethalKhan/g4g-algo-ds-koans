import leftRotateFirstMethodTest from './001-rotate-using-temp-array.js';
import leftRotateSecondMethodTest from './002-rotate-one-by-one.js';

export const leftRotateFirstMethod = leftRotateFirstMethodTest;
export const leftRotateSecondMethod = leftRotateSecondMethodTest;

export function full(){
  leftRotateFirstMethodTest();
  leftRotateSecondMethodTest();
}

const rotation = {
  leftRotateFirstMethod,
  leftRotateSecondMethod,
  full
}

export default rotation;
