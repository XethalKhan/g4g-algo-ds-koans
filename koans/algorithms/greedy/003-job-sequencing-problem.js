/*
Given an array of jobs where every job has a deadline and associated profit if
the job is finished before the deadline. It is also given that every job takes
a single unit of time, so the minimum possible deadline for any job is 1.
How to maximize total profit if only one job can be scheduled at a time.

Examples:
Input: Four Jobs with following deadlines and profits
JobID  Deadline  Profit
  a      4        20
  b      1        10
  c      1        40
  d      1        30
Output: Following is maximum profit sequence of jobs
        c, a

Input:  Five Jobs with following deadlines and profits
JobID   Deadline  Profit
  a       2        100
  b       1        19
  c       2        27
  d       1        25
  e       3        15
Output: Following is maximum profit sequence of jobs
        c, a, e

Following is the algorithm.
1) Sort all jobs in decreasing order of profit.
2) Iterate on jobs in decreasing order of profit.For each job, do the following:
  For each job find an empty time slot from deadline to 0. If found empty
  slot put the job in the slot and mark this slot filled.

arr[id, deadline, profit]
*/

function solve(arr){

  let result = [];

  arr.sort((first, second) => {
    if(first[2] > second[2]){
      return -1;
    }else if(first[2] < second[2]){
      return 1;
    }else{
      return 0;
    }
  });

  arr.forEach((job, index) => {

    if(result.length < job[1]){
      result.push(index);
      return;
    }

    for(let i = 0; i < job[1] && i < result.length; i++){
      if(arr[result[i]][2] < job[2]){
        result[i] = index;
        break;
      }
    }

  });

  result.forEach((job, index) => {
    result[index] = arr[job][0];
  });

  return result;

}

export default solve;
