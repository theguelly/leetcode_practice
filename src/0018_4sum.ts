import ExecutionTimer from './utils/execution_timer';
/**
 * ----------------------------------------------------------------------------------------------------------------------
 * 0018. 4Sum
 * https://leetcode.com/problems/4sum/
 * ----------------------------------------------------------------------------------------------------------------------
 */
function fourSum(nums: number[], target: number): number[][] {
    let result = [],total = 0
    nums = nums.sort((num1, num2) => num1 - num2)
    for (let a = 0, b = 0, c = 0; a < nums.length; a++) {
        if (nums[a] === nums[a - 1]) continue
        for (let d = nums.length - 1; d > a; d--) {
            if (nums[d] === nums[d + 1]) continue
            b = a + 1
            c = d - 1
            while (b < c) {
                if (b - 1 !== a && nums[b] === nums[b - 1]) {
                    b++
                    continue
                }
    
                if (c + 1 !== d && nums[c] === nums[c + 1]) {
                    c--
                    continue
                }
    
                total = nums[a] + nums[b] + nums[c] + nums[d]
    
                if (total === target) {
                    result.push([nums[a], nums[b], nums[c], nums[d]])
                    b++
                    c--
                }
                else if (total - target > 0) c--
                else if (total - target < 0) b++
            }
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
        { nums: [-3,-1,0,2,4,5], target: 2 }, // [[-3,-1,2,4]]
        { nums: [-2,-1,-1,1,1,2,2], target: 0 }, // [[-2,-1,1,2],[-1,-1,1,1]]
        { nums: [1,0,-1,0,-2,2], target: 0 }, // [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
        { nums: [2,2,2,2,2], target: 8 }, // [[2,2,2,2]]
    ]

    aTestCases.forEach((value) => console.log(value.nums, value.target, '|', fourSum(value.nums, value.target)))
});
