/*

See: https://www.codechef.com/problems/FCTRL

Hint: use BigInt
*/

function solve(n){

    let zeroes = 0;
    let result = BigInt(1);

    for(let i = BigInt(1); i <= n; i++){
        
        result = result * i;

        while(result % 10n == 0n){
            zeroes += 1;
            result = result / 10n;
        }

    }

    return zeroes;

}

export default solve;