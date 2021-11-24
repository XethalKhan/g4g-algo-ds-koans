import insertTest from './001-insertion.js';
import removeTest from './002-remove.js';

export const insert = insertTest;
export const remove = removeTest;

export function full(){
  insertTest();
  removeTest();
}

const binaryTree = {
  insert,
  remove,
  full
}

export default binaryTree;
