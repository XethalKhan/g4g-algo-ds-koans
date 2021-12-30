import factrTest from './002-FACTR.js';
import horsesTest from './004-HORSES.js';
import johnyTest from './005-JOHNY.js';
import cleanupTest from './006-CLEANUP.js';
import conflipTest from './007-CONFLIP.js';

import csubTest from './009-CSUB.js';

export const factr = factrTest;
export const horses = horsesTest;
export const johny = johnyTest;
export const cleanup = cleanupTest;
export const conflip = conflipTest;

export const csub = csubTest;

export function full(){
    factrTest();
    horsesTest();
    johnyTest();
    cleanupTest();
    conflipTest();

    csubTest();
}

const easy = {
    factr,
    horses,
    johny,
    cleanup,
    conflip,

    csub,
    full
}

export default easy;