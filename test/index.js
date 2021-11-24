import algorithm from './algorithms/index.js';
import dataStructure from './ds/index.js';

export function full(){
  algorithm.full();
  dataStructure.full();
}

const test = {
  algorithm,
  dataStructure,
  full
}

export default test;
