import algorithms from './algorithms/index.js';
import ds from './ds/index.js';

export function full(){
  algorithms.full();
  ds.full();
}

const test = {
  algorithms,
  ds,
  full
}

export default test;
