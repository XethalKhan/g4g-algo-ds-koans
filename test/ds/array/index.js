import rotation from './rotation/index.js';
import rearrange from './rearrange/index.js';

export function full(){
  rotation.full();
  rearrange.full();
}

const array = {
  rotation,
  rearrange,
  full
}

export default array;
