import activitySelectionProblemTest from './001-activity-selection-problem.js';
import egyptianFractionProblemTest from './002-egyptian-fraction.js';
import jobSequencingProblemTest from './003-job-sequencing-problem.js';

export const activitySelectionProblem = activitySelectionProblemTest;
export const egyptianFractionProblem = egyptianFractionProblemTest;
export const jobSequencingProblem = jobSequencingProblemTest;

export function full(){
  activitySelectionProblemTest();
  egyptianFractionProblemTest();
  jobSequencingProblemTest();
};

const greedy = {
  activitySelectionProblem,
  egyptianFractionProblem,
  jobSequencingProblem,
  full
}

export default greedy;
