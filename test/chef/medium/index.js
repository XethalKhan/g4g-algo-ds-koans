import coinsTest from './001-COINS.js';

export const coins = coinsTest;

export function full(){
    coinsTest();
}

const medium = {
    coins,
    full
}

export default medium;