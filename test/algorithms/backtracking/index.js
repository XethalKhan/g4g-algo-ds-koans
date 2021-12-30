import knightTourProblemTest from './001-knights-tour-problem.js';
import ratInMazeSimpleProblemTest from './002-rat-in-a-maze-simple.js';
import nQueensProblemTest from './003-n-queens.js';

export function full(){
  knightTourProblemTest();
  ratInMazeSimpleProblemTest();
  nQueensProblemTest();
}

export const knightTourProblem = knightTourProblemTest;
export const ratInMazeSimpleProblem = ratInMazeSimpleProblemTest;
export const nQueensProblem = nQueensProblemTest;

const backtracking = {
  knightTourProblem,
  ratInMazeSimpleProblem,
  nQueensProblem,
  full
}

export default backtracking;
