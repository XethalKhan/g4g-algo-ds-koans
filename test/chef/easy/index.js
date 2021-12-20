import factrTest from './002-FACTR.js';
import horsesTest from './004-HORSES.js';
import johnyTest from './005-JOHNY.js';

export const factr = factrTest;
export const horses = horsesTest;
export const johny = johnyTest;

export function full(){
    factrTest();
    horsesTest();
    johnyTest();
}

const easy = {
    factr,
    horses,
    johny,
    full
}

export default easy;