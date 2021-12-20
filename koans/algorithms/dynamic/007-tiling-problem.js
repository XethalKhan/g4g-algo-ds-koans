/*
Given a “2 x n” board and tiles of size “2 x 1”, count the number of ways to 
tile the given board using the 2 x 1 tiles. A tile can either be placed horizontally
i.e., as a 1 x 2 tile or vertically i.e., as 2 x 1 tile.

Example:

    Input: n = 4
    Output: 5

For a 2 x 4 board, there are 3 ways

All 4 vertical (1 way)
All 4 horizontal (1 way)
2 vertical and 2 horizontal (3 ways)

    Input: n = 3
    Output: 3

We need 3 tiles to tile the board of size  2 x 3.
We can tile the board using following ways:

Place all 3 tiles vertically.
Place 1 tile vertically and remaining 2 tiles horizontally (2 ways)

Algorithm:

Let “count(n)” be the count of ways to place tiles on a “2 x n” grid, we have following two ways to place first tile. 
1) If we place first tile vertically, the problem reduces to “count(n-1)” 
2) If we place first tile horizontally, we have to place second tile also horizontally. So the problem reduces to “count(n-2)”

Therefore, count(n) can be written as
count(n) = count(n-1) + count(n-2)

See: https://www.geeksforgeeks.org/tiling-problem/
*/

function count(n){

    if(n <= 2){
        return n;
    }

    return count(n - 1) + count(n - 2);

}

export default count;