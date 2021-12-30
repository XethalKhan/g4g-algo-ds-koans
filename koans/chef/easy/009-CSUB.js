/*
See: https://www.codechef.com/problems/CSUB
*/

function solve(txt){

    let ones = 0;
    let count = 0;

    Array.from(txt).forEach(char => {
        
        if(char == '1'){
            ones++;
        }

    });

    for(let i = 1; i <= ones; i++){
        count += i;
    }

    return count;

}

export default solve;