import ExecutionTimer from './utils/execution_timer';
/**
 * ----------------------------------------------------------------------------------------------------------------------
 * 0001. Two Sum
 * https://leetcode.com/problems/two-sum/
 * ----------------------------------------------------------------------------------------------------------------------
 */
function twoSum(nums: number[], target: number): number[] {
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
};

/**
 * ----------------------------------------------------------------------------------------------------------------------
 * Running Section. Not part of the problem
 * ----------------------------------------------------------------------------------------------------------------------
 */
const timer = new ExecutionTimer();
timer.measureAndCompare(() => {
    const aTestCases = [
        { nums: [-1,-2,-3,-4,-5], target: -8 }, // [2,4]
        { nums: [2,7,11,15], target: 9 }, // [0,1]
        { nums: [3,2,4], target: 6 }, // [1,2]
        { nums: [3,3], target: 6 }, // [0,1]
        { nums: [3,2,3], target: 6 }, // [0,2]
    ]

    aTestCases.forEach((value) => console.log(value, twoSum(value.nums, value.target)))
});
