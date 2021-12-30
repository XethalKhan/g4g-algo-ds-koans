/*
See: https://www.codechef.com/problems/FLIPCOIN
*/

function solve(count, queries){

    let coins = new Array(count).fill(false);
    let solution = [];

    queries.forEach(query => {
        if(query.type === true){
            flipCoins(coins, query.start, query.end);
        }else{
            solution.push(countHeads(coins, query.start, query.end));
        }
    });

    return solution;

}

function flipCoins(coins, start, end){

    for(let i = start; i <= end; i++){
        coins[i] = !coins[i];
    }

}

function countHeads(coins, start, end){

    let count = 0;

    for(let i = start; i <= end; i++){
        if(coins[i] == true){
            count++;
        }
    }

    return count;

}


export default solve;