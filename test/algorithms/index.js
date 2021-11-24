import sort from './sort/index.js';
import greedy from './greedy/index.js';
import dynamic from './dynamic/index.js';

export function full(){
  sort.full();
  greedy.full();
  dynamic.full();
}

const algorithm = {
  sort,
   greedy,
   dynamic,
   full
}

export default algorithm;
