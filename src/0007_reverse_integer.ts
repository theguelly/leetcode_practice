import ExecutionTimer from './utils/execution_timer';
/**
 * ----------------------------------------------------------------------------------------------------------------------
 * 0007. Reverse Integer
 * https://leetcode.com/problems/reverse-integer/
 * ----------------------------------------------------------------------------------------------------------------------
 */
const maxSignedInt = 2147483647
function reverse(x: number): number {
    let isNegative = false
    let numStr = x.toString()
    if (numStr[0] === '-') {
        isNegative = true
        numStr = numStr.slice(1, numStr.length)
    }
    let result = parseInt(numStr.split('').reverse().join(''))
    if (isNegative && ((result * -1) > ((maxSignedInt * -1) + 1))) return result * -1
    if (!isNegative && (result < maxSignedInt)) return result
    return 0
};

/**
 * ----------------------------------------------------------------------------------------------------------------------
 * Running Section. Not part of the problem
 * ----------------------------------------------------------------------------------------------------------------------
 */
const timer = new ExecutionTimer();
timer.measureAndCompare(() => {
    const aTestCases = [
        123, // 321
        -123, // -321
        120, // 21
    ]

    aTestCases.forEach((value, index) => console.log(index, reverse(value)))
});
