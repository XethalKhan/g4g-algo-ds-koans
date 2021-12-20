/*
See: https://www.codechef.com/problems/JOHNY

k is index of 'Uncle Johny' song, not zero indexed
*/

function solve(songs, k){

    let check = songs[k - 1];
    let count = 0;

    for(let i = 0; i < songs.length; i++){
        if(songs[i] < check){
            count++;
        }
    }

    return count + 1;

}

export default solve;