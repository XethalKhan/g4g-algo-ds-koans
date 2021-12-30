/*
See: https://www.codechef.com/problems/TREEROOT
*/

function solve(nodes){

    let sum = 0;

    nodes.forEach(node => {
        sum += (node.id - node.sum);
    });

    return sum;

}

export default solve;