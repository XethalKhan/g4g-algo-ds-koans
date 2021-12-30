import coinsTest from './001-COINS.js';

import treerootTest from './003-TREEROOT.js';
import flipcoinTest from './004-FLIPCOIN.js';

export const coins = coinsTest;

export const treeroot = treerootTest;
export const flipcoin = flipcoinTest;

export function full(){
    coinsTest();

    treerootTest();
    flipcoinTest();
}

const medium = {
    coins,
    treeroot,
    flipcoin,
    full
}

export default medium;