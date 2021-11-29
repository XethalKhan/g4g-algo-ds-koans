import algorithms from './algorithms/index.js';
import ds from './ds/index.js';
import chef from './chef/index.js';

export function full(){
  algorithms.full();
  ds.full();
  chef.full();
}

const test = {
  algorithms,
  ds,
  chef,
  full
}

export default test;
