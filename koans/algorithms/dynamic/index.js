import tilingProblemSol from './007-tiling-problem.js';
import goldMineProblemSol from './008-gold-mine-problem.js';
import friendsPairingProblemIterativeSol from './010-friends-pairing-problem-iterative.js';
import friendsPairingProblemRecursiveSol from './011-friends-pairing-problem-recursive.js';

export const goldMineProblem = goldMineProblemSol;
export const tilingProblem = tilingProblemSol;
export const friendsPairingProblemIterative = friendsPairingProblemIterativeSol;
export const friendsPairingProblemRecursive = friendsPairingProblemRecursiveSol;

const dynamic = {
  tilingProblem,
  goldMineProblem,
  friendsPairingProblemIterative,
  friendsPairingProblemRecursive
};

export default dynamic;
