/*
The selection sort algorithm sorts an array by repeatedly finding the minimum
element (considering ascending order) from unsorted part and putting it at
the beginning. The algorithm maintains two subarrays in a given array.
1) The subarray which is already sorted.
2) Remaining subarray which is unsorted.
In every iteration of selection sort, the minimum element
(considering ascending order) from the unsorted subarray is picked and moved
to the sorted subarray.

See: https://www.geeksforgeeks.org/selection-sort/

Time xomplexity: O(n^2)
Auxiliary space: O(1)
*/

function sort(arr){

  for(let i = 0; i < arr.length - 1; i++){

    let min_index = i;

    for(let j = i; j < arr.length; j++){

      if(arr[j] < arr[min_index]){
        min_index = j;
      }

    }

    let temp = arr[i];
    arr[i] = arr[min_index];
    arr[min_index] = temp;

  }

  return arr;

}

export default sort;
