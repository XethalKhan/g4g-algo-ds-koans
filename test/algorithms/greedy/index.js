import activitySelectionProblemTest from './001-activity-selection-problem.js';

import jobSequencingProblemTest from './003-job-sequencing-problem.js';

export const activitySelectionProblem = activitySelectionProblemTest;

export const jobSequencingProblem = jobSequencingProblemTest;

export function full(){
  activitySelectionProblemTest();
  jobSequencingProblemTest();
};

const greedy = {
  activitySelectionProblem,
  jobSequencingProblem,
  full
}

export default greedy;
