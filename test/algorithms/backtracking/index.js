import knightTourProblemTest from './001-knights-tour-problem.js';
import ratInMazeSimpleProblemTest from './002-rat-in-a-maze-simple.js';

export function full(){
  knightTourProblemTest();
  ratInMazeSimpleProblemTest();
}

export const knightTourProblem = knightTourProblemTest;
export const ratInMazeSimpleProblem = ratInMazeSimpleProblemTest;

const backtracking = {
  knightTourProblem,
  ratInMazeSimpleProblem,
  full
}

export default backtracking;
