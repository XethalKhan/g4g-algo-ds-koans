import easy from './easy/index.js';
import medium from './medium/index.js';
import hard from './hard/index.js';

export function full(){
    easy.full();
    medium.full();
    hard.full();
}

const chef = {
    easy,
    medium,
    hard,
    full
};

export default chef;