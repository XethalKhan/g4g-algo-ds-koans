/*
Given an array, the task is to reverse the array.

Examples:

Input  : arr[] = {1, 2, 3}
Output : arr[] = {3, 2, 1}

Input :  arr[] = {4, 5, 1, 2}
Output : arr[] = {2, 1, 5, 4}

Algorithm:

1) Initialize start and end indexes as start = 0, end = n-1 
2) In a loop, swap arr[start] with arr[end] and change start and end as follows : 
start = start +1, end = end – 1

See: https://www.geeksforgeeks.org/write-a-program-to-reverse-an-array-or-string/
Iterative way

*/

function reverse(arr){

    let start = 0;
    let end = arr.length - 1;

    while(start < end){
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }

    return arr;

}

export default reverse;