import knightTourProblemTest from './001-knights-tour-problem.js';

export function full(){
  knightTourProblemTest();
}

export const knightTourProblem = knightTourProblemTest;

const backtracking = {
  knightTourProblem,
  full
}

export default backtracking;
