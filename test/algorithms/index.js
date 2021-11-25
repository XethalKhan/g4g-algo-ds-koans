import sort from './sort/index.js';
import greedy from './greedy/index.js';
import dynamic from './dynamic/index.js';
import backtracking from './backtracking/index.js';

export function full(){
  sort.full();
  greedy.full();
  dynamic.full();
  backtracking.full();
}

const algorithm = {
  sort,
  greedy,
  dynamic,
  backtracking,
  full
}

export default algorithm;
