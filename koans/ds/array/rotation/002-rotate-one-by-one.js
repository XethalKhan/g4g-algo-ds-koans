/**
Write a function rotate(arr[], d) that rotates arr[] of size n by d elements.

start
  For i = 0 to i < d
    Left rotate all elements of arr[] by one
end

See: https://www.geeksforgeeks.org/array-rotation/
METHOD 2 (Rotate one by one) 

Time complexity : O(n * d) 
Auxiliary Space : O(1)
*/

function rotate(arr, d = 0){

    if(d > arr.length){
        d = d % arr.length;
    }

    for(let i = 0; i < d; i++){

        let temp = arr[0];

        for(let j = 0; j < arr.length - 1; j++){
            arr[j] = arr[j + 1];
        }

        arr[arr.length - 1] = temp;

    }
  
    return arr;
  
  }
  
  export default rotate;
  