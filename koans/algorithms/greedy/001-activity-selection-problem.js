/*
Greedy is an algorithmic paradigm that builds up a solution piece by piece,
always choosing the next piece that offers the most obvious and immediate
benefit. Greedy algorithms are used for optimization problems. An optimization
problem can be solved using Greedy if the problem has the following property:
At every step, we can make a choice that looks best at the moment, and we get
the optimal solution of the complete problem.
If a Greedy Algorithm can solve a problem, then it generally becomes the best
method to solve that problem as the Greedy algorithms are in general more
efficient than other techniques like Dynamic Programming. But Greedy algorithms
cannot always be applied. For example, the Fractional Knapsack problem can be
solved using Greedy, but 0-1 Knapsack cannot be solved using Greedy.

Let us consider the Activity Selection problem as our first example of Greedy
algorithms. Following is the problem statement:

You are given n activities with their start and finish times. Select the maximum
number of activities that can be performed by a single person, assuming that
a person can only work on a single activity at a time.

Example 1 : Consider the following 3 activities sorted by finish time.
     start[]  =  {10, 12, 20};
     finish[] =  {20, 25, 30};
A person can perform at most two activities. The maximum set of activities
that can be executed is {0, 2} [ These are indexes in start[] and finish[] ]

Example 2 : Consider the following 6 activities sorted by finish time.
     start[]  =  {1, 3, 0, 5, 8, 5};
     finish[] =  {2, 4, 6, 7, 9, 9};
A person can perform at most four activities. The maximum set of activities
that can be executed is {0, 1, 3, 4} [ These are indexes in start[] and
finish[] ]

The greedy choice is to always pick the next activity whose finish time is least
among the remaining activities and the start time is more than or equal to the
finish time of the previously selected activity. We can sort the activities
according to their finishing time so that we always consider the next activity
as minimum finishing time activity.

1) Sort the activities according to their finishing time
2) Select the first activity from the sorted array and print it.
3) Do the following for the remaining activities in the sorted array.
    a) If the start time of this activity is greater than or
    equal to the finish time of the previously selected activity
    then select this activity and print it.

Assume that the activities are already sorted according to their finish time.
*/

function solve(start, finish){

  let solution = [];

  return solution;

}

export default solve;
