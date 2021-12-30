import tilingProblemTest from './007-tiling-problem.js';
import goldMineProblemTest from './008-gold-mine-problem.js';
import friendsPairingProblemIterativeTest from './010-friends-pairing-problem-iterative.js';
import friendsPairingProblemRecursiveTest from './011-friends-pairing-problem-recursive.js';

export function full(){
  tilingProblemTest();
  goldMineProblemTest();
  friendsPairingProblemIterativeTest();
  friendsPairingProblemRecursiveTest();
}

export const tilingProblem = tilingProblemTest;
export const goldMineProblem = goldMineProblemTest;
export const friendsPairingProblemIterative = friendsPairingProblemIterativeTest;
export const friendsPairingProblemRecursive = friendsPairingProblemRecursiveTest;

const dynamic = {
  tilingProblem,
  goldMineProblem,
  friendsPairingProblemIterative,
  friendsPairingProblemRecursive,
  full
}

export default dynamic;
