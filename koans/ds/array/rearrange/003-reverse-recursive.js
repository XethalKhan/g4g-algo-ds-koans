/*
Given an array, the task is to reverse the array.

Examples:

Input  : arr[] = {1, 2, 3}
Output : arr[] = {3, 2, 1}

Input :  arr[] = {4, 5, 1, 2}
Output : arr[] = {2, 1, 5, 4}

Algorithm:

1) Initialize start and end indexes as start = 0, end = n-1 
2) Swap arr[start] with arr[end] 
3) Recursively call reverse for rest of the array.

See: https://www.geeksforgeeks.org/write-a-program-to-reverse-an-array-or-string/
Recursive way

*/

function reverse(arr, start, end){

    if(start >= end){
        return arr;
    }

    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    start++;
    end--;

    return reverse(arr, start, end);

}

export default reverse;