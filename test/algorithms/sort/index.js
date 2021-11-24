import selectionSortTest from './001-selection-sort.js';
import bubbleSortIterativeTest from './002-bubble-sort-iterative.js';
import bubbleSortOptimizedTest from './003-bubble-sort-optimized.js';
import bubbleSortRecursiveTest from './004-bubble-sort-recursive.js';
import insertionSortIterativeTest from './005-insertion-sort-iterative.js';
import insertionSortRecursiveTest from './006-insertion-sort-recursive.js';
import mergeSortTest from './007-merge-sort.js';

export const selectionSort = selectionSortTest;
export const bubbleSortIterative = bubbleSortIterativeTest;
export const bubbleSortOptimized = bubbleSortOptimizedTest;
export const bubbleSortRecursive = bubbleSortRecursiveTest;
export const insertionSortIterative = insertionSortIterativeTest;
export const insertionSortRecursive = insertionSortRecursiveTest;
export const mergeSort = mergeSortTest;

export function full(){
  selectionSortTest();
  bubbleSortIterativeTest();
  bubbleSortOptimizedTest();
  bubbleSortRecursiveTest();
  insertionSortIterativeTest();
  insertionSortRecursiveTest();
  mergeSortTest();
}

const sort = {
  selectionSort,
  bubbleSortIterative,
  bubbleSortOptimized,
  bubbleSortRecursive,
  insertionSortIterative,
  insertionSortRecursive,
  mergeSort,
  full
}

export default sort;
