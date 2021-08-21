/*
Merge Sort is a Divide and Conquer algorithm. It divides the input array into
two halves, calls itself for the two halves, and then merges the two sorted
halves. The merge() function is used for merging two halves.
The merge(arr, l, m, r) is a key process that assumes that
arr[l..m] and arr[m+1..r] are sorted and merges the two sorted sub-arrays
into one. See the following C implementation for details.

MergeSort(arr[], l,  r)
If r > l
     1. Find the middle point to divide the array into two halves:
             middle m = l+ (r-l)/2
     2. Call mergeSort for first half:
             Call mergeSort(arr, l, m)
     3. Call mergeSort for second half:
             Call mergeSort(arr, m+1, r)
     4. Merge the two halves sorted in step 2 and 3:
             Call merge(arr, l, m, r)

See: https://www.geeksforgeeks.org/merge-sort/
*/

function sort(arr, l, r){

  if(l < r){

    let m = l + Math.floor((r - l) / 2);

    sort(arr, l, m);

    sort(arr, m + 1, r);

    merge(arr, l, m, r);

  }

}

function merge(arr, l, m, r){

  let n1 = m - l + 1;
  let n2 = r - m;

  let left = new Array(n1);
  let right = new Array(n2);

  for(let i = 0; i < n1; i++){
    left[i] = arr[l + i];
  }
  for(let i = 0; i < n1; i++){
    right[i] = arr[m + i + 1];
  }

  let i = 0;
  let j = 0;
  let k = l;

  while(i < n1 && j < n2){
    if(left[i] < right[j]){
      arr[k] = left[i];
      i++;
    }else{
      arr[k] = right[j];
      j++;
    }
    k++;
  }

  while(i < n1){
    arr[k] = left[i];
    k++;
    i++;
  }

  while(j < n2){
    arr[k] = right[j];
    k++;
    j++;
  }

}

export default sort;
