/*
See: https://www.codechef.com/problems/CLEANUP
*/

function solve(n, done){

    done.sort((first, second) => {
        if(first < second){
            return -1;
        }else if(first > second){
            return 1;
        }
        return 0;
    });

    let index = 0;
    let chefsTurn = true;

    let chefJobs = [];
    let assistantJobs = [];

    for(let i = 1; i <= n; i++){

        if(i === done[index]){
            index++;
            continue;
        }

        if(chefsTurn){
            chefJobs.push(i);
            chefsTurn = false;
        }else{
            assistantJobs.push(i);
            chefsTurn = true;
        }

    }

    return {chef: chefJobs, assistant: assistantJobs};

}

export default solve;