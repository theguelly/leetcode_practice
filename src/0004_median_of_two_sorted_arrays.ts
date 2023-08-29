import ExecutionTimer from './utils/execution_timer';
/**
 * ----------------------------------------------------------------------------------------------------------------------
 * 0004. Median of Two Sorted Arrays
 * https://leetcode.com/problems/median-of-two-sorted-arrays/
 * ----------------------------------------------------------------------------------------------------------------------
 */
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let merged = [...nums1, ...nums2].sort((n1,n2) => n1 - n2)
    let middle = Math.ceil((merged.length - 1) / 2)
    if (middle > 0 && merged.length % 2 === 0) return (merged[middle - 1] + merged[middle]) / 2
    return merged[middle]
};

/**
 * ----------------------------------------------------------------------------------------------------------------------
 * Running Section. Not part of the problem
 * ----------------------------------------------------------------------------------------------------------------------
 */
const timer = new ExecutionTimer();
timer.measureAndCompare(() => {
    const aTestCases = [
        { nums1: [1,3], nums2: [2] }, // 2.00000
        { nums1: [1,2], nums2: [3,4] }, // 2.50000
    ]

    aTestCases.forEach((value) => console.log(value, findMedianSortedArrays(value.nums1, value.nums2)))
});
