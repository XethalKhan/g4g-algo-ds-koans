/*
See: https://www.codechef.com/problems/CONFLIP
*/

function solve(initial, rounds, scoring){

    return (initial == scoring ? Math.floor(rounds / 2) : Math.ceil(rounds / 2));

}

export default solve;