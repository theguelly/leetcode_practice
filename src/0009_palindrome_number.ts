import ExecutionTimer from './utils/execution_timer';
/**
 * ----------------------------------------------------------------------------------------------------------------------
 * 0009. Palindrome Number
 * https://leetcode.com/problems/palindrome-number/
 * ----------------------------------------------------------------------------------------------------------------------
 */
function isPalindrome(x: number): boolean {
    if (Math.sign(x) === -1) {
        return false;
    }
    if (x < 10) return true
    if (x < 100) {
        if (x % 11 === 0) return true
        return false
    }
    let digits = Math.max(3, getDigits(x))
    let multiplier = Math.pow(10, Math.floor(digits / 2))
    let result = x / multiplier
    let newResult = (Math.floor(result) * multiplier) + reverse(Math.floor(digits % 2 === 0 ? result : result / 10))
    if (newResult === x) return true
    return false
};

function reverse(x: number): number {
    let toReverse = x
    let result = 0
    let digit
    while(toReverse){
        digit = toReverse % 10
        result = (result * 10) + digit
        toReverse = toReverse / 10 | 0
    }
    return result
}

function getDigits(x: number): number {
    return Math.log(x) * Math.LOG10E + 1 | 0
}

/**
 * ----------------------------------------------------------------------------------------------------------------------
 * Running Section. Not part of the problem
 * ----------------------------------------------------------------------------------------------------------------------
 */
const timer = new ExecutionTimer();
timer.measureAndCompare(() => {
    const aTestCases = [
        121, // true
        -121, // false
        10, // false
    ]

    aTestCases.forEach((value, index) => console.log(index, isPalindrome(value)))
});
