import knightTourProblemSol from './001-knights-tour-problem.js';
import ratInMazeSimpleProblemSol from './002-rat-in-a-maze-simple.js';
import nQueensProblemSol from './003-n-queens.js';

export const knightTourProblem = knightTourProblemSol;
export const ratInMazeSimpleProblem = ratInMazeSimpleProblemSol;
export const nQueensProblem = nQueensProblemSol;

const backtracking = {
    knightTourProblem,
    ratInMazeSimpleProblem,
    nQueensProblem
};

export default backtracking;
