import easy from './easy/index.js';
import medium from './medium/index.js';

export function full(){
    easy.full();
    medium.full();
}

const chef = {
    easy,
    medium,
    full
};

export default chef;