/*
See: https://www.codechef.com/problems/COINS
*/

var dp = {};

function solve(coin){

    if(coin == 0){
        return 0;
    }else if(coin == 1){
        return 1;
    }

    if(dp[coin.toString()] != undefined){
        return dp[coin.toString()];
    }

    dp[coin.toString()] = Math.max(coin, (solve(Math.floor(coin / 2)) + solve(Math.floor(coin / 3)) + solve(Math.floor(coin / 4))));

    return dp[coin.toString()];

}

export default solve;