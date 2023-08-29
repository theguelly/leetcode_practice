import ExecutionTimer from './utils/execution_timer';
/**
 * ----------------------------------------------------------------------------------------------------------------------
 * 0016. 3Sum Closest
 * https://leetcode.com/problems/3sum-closest/
 * ----------------------------------------------------------------------------------------------------------------------
 */
function threeSumClosest(nums: number[], target: number): number {
    let result = null, tempResult = 0
    nums = nums.sort((num1, num2) => num1 - num2)
    for (let i = 0, j = 0, k = 0; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) continue
        j = i + 1
        k = nums.length - 1
        while (j < k) {
            tempResult = nums[i] + nums[j] + nums[k]
            if (result === null) result = tempResult
            if (Math.abs(tempResult - target) < Math.abs(result - target)) result = tempResult
            if (tempResult - target >= 0) k--
            if (tempResult - target <= 0) j++
        }
    }
    return result
};

/**
 * ----------------------------------------------------------------------------------------------------------------------
 * Running Section. Not part of the problem
 * ----------------------------------------------------------------------------------------------------------------------
 */
const timer = new ExecutionTimer();
timer.measureAndCompare(() => {
    const aTestCases = [
        { nums: [4,0,5,-5,3,3,0,-4,-5], target: -2 }, // -2
        { nums: [0,1,2], target: 0 }, // 3
        { nums: [1,1,1,0], target: -100 }, // 2
        { nums: [-1,2,1,-4], target: 1 }, // 2
        { nums: [0,0,0], target: 1 }, // 0
    ]

    aTestCases.forEach((value) => console.log(`[${value.nums.join(',')}] | ${value.target} |`, threeSumClosest(value.nums, value.target))) 
});
