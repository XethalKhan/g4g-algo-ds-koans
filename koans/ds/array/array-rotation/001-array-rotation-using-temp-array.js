/**
Write a function rotate(arr[], d) that rotates arr[] of size n by d elements.

1) Store the first d elements in a temp array
2) Shift rest of the arr[]
3) Store back the d elements

See: https://www.geeksforgeeks.org/array-rotation/
METHOD 1 (Using temp array)

Time complexity: O(n)
Auxiliary Space: O(d)
*/

function rotate(arr, d = 0){

  if(arr === undefined){
    return arr;
  }

  let temp = [];

  for(let i = 0; i < d; i++){
    temp.push(arr[i]);
  }

  for(let i = d; i < arr.length; i++){
    arr[i - d] = arr[i];
  }

  for(let i = 0; i < d; i++){
    arr[arr.length - d + i] = temp[i];
  }

  return arr;

}

export default rotate;
