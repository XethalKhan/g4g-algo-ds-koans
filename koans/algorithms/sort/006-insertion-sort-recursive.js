/*
Recursive Insertion Sort has no performance/implementation advantages, but can
be a good question to check one’s understanding of Insertion Sort and recursion.
If we take a closer look at Insertion Sort algorithm, we keep processed
elements sorted and insert new elements one by one in the inserted array.
Recursion Idea.

Base Case: If array size is 1 or smaller, return.
Recursively sort first n-1 elements.
Insert last element at its correct position in sorted array.

See: https://www.geeksforgeeks.org/recursive-insertion-sort/
*/

function sort(arr, n){

  if(n <= 1){
    return;
  }

  sort(arr, n - 1);

  for(let i = n - 1; i > 0 && arr[i] < arr[i - 1]; i--){
    let temp = arr[i];
    arr[i] = arr[i - 1];
    arr[i - 1] = temp;
  }

}

export default sort;
