import selectionSortSol from './001-selection-sort.js';
import bubbleSortIterativeSol from './002-bubble-sort-iterative.js';
import bubbleSortOptimizedSol from './003-bubble-sort-optimized.js';
import bubbleSortRecursiveSol from './004-bubble-sort-recursive.js';
import insertionSortIterativeSol from './005-insertion-sort-iterative.js';
import insertionSortRecursiveSol from './006-insertion-sort-recursive.js';
import mergeSortSol from './007-merge-sort.js';

export const selectionSort = selectionSortSol;
export const bubbleSortIterative = bubbleSortIterativeSol;
export const bubbleSortOptimized = bubbleSortOptimizedSol;
export const bubbleSortRecursive = bubbleSortRecursiveSol;
export const insertionSortIterative = insertionSortIterativeSol;
export const insertionSortRecursive = insertionSortRecursiveSol;
export const mergeSort = mergeSortSol;

const sorts = {
  selectionSort,
  bubbleSortIterative,
  bubbleSortOptimized,
  bubbleSortRecursive,
  insertionSortIterative,
  insertionSortRecursive,
  mergeSort
};

export default sorts;
