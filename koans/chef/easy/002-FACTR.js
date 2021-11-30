/*

See: https://www.codechef.com/problems/FCTRL

Explanation: https://www.geeksforgeeks.org/count-trailing-zeroes-factorial-number/
*/

function solve(n){

    let zeroes = 0;

    for(let i = 5; Math.floor(n / i) >= 1; i*=5){
        
        zeroes += Math.floor(n / i);

    }

    return zeroes;

}

export default solve;