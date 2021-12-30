/*
See: https://www.codechef.com/problems/CARDSHUF
*/

function solve(n, steps){

    let deck = new Array(n);

    for(let i = 1; i <= n; i++){
        deck[i - 1] = i;
    }

    steps.forEach(step => {
        mix(deck, step.a, step.b, step.c);
    });

    return deck;

}

function mix(deck, a, b, c){

    let A = [];
    let B = [];
    let C = [];

    for(let i = 0; i < a; i++){
        A.push(deck[i]);
    }

    for(let i = a; i < deck.length && i < a + b; i++){
        B.push(deck[i]);
    }

    for(let i = a + b - 1; i >= b; i--){
        deck[i] = A.pop();
    }

    for(let i = b; i < b + c; i++){
        C.push(deck[i]);
    }

    for(let i = b + c - 1; i >= c; i--){
        deck[i] = B.shift();
    }

    for(let i = c - 1; i >= 0; i--){
        deck[i] = C.pop();
    }

}

export default solve;