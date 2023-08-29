import ExecutionTimer from './utils/execution_timer';
/**
 * ----------------------------------------------------------------------------------------------------------------------
 * 0011. Container With Most Water
 * https://leetcode.com/problems/container-with-most-water/
 * ----------------------------------------------------------------------------------------------------------------------
 */
function maxArea(height: number[]) {
    let max = 0, tempMax = 0
    for (let i = 0, j = height.length - 1; i < j; ) {
        if (height[i] <= height[j]) {
            tempMax = (j - i) * height[i]
            i++
        } else {
            tempMax = (j - i) * height[j]
            j--
        } 
        if (tempMax > max) max = tempMax
    }
    return max;
};

/**
 * ----------------------------------------------------------------------------------------------------------------------
 * Running Section. Not part of the problem
 * ----------------------------------------------------------------------------------------------------------------------
 */
const timer = new ExecutionTimer();
timer.measureAndCompare(() => {
    const aTestCases = [
        [1,8,6,2,5,4,8,3,7], // 49
        [1,1] // 1
    ]

    aTestCases.forEach((value, index) => console.log(index, maxArea(value)))
});
