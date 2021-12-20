/*
See: https://www.codechef.com/problems/HORSES
*/

function solve(horses){

    horses.sort((first, second) => {
        if(first < second){
            return -1;
        }else if(second < first){
            return 1;
        }else{
            return 0;
        }
    });

    let min = Number.MAX_VALUE;

    for(let i = 0; i < horses.length - 1; i++){
        let check = horses[i + 1] - horses[i];
        if(check < min){
            min = check;
        }
    }

    return min;

}

export default solve;