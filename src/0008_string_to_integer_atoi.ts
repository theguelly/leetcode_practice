import ExecutionTimer from './utils/execution_timer';
/**
 * ----------------------------------------------------------------------------------------------------------------------
 * 0008. String to Integer (atoi)
 * https://leetcode.com/problems/string-to-integer-atoi/
 * ----------------------------------------------------------------------------------------------------------------------
 */
const maxSignedInt = Math.pow(2, 31) - 1
const digitArray = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

function myAtoi(s: string): number {
    let digitStr = '', sign = ''
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            if (digitStr.length > 0 || sign.length > 0) break
        } else if (isDigit(s[i])) {
            digitStr += s[i]
            continue
        } else if ((s[i] === '-' || s[i] === '+') && sign.length === 0 && digitStr.length === 0) {
            sign = s[i]
            continue
        } else {
            break
        }
    }
    let result = parseInt(sign + digitStr)
    return Math.min(Math.max(result, (maxSignedInt + 1) * -1), maxSignedInt) || 0
};

function isDigit(n) {
    return Boolean(digitArray[n]);
}

/**
 * ----------------------------------------------------------------------------------------------------------------------
 * Running Section. Not part of the problem
 * ----------------------------------------------------------------------------------------------------------------------
 */
const timer = new ExecutionTimer();
timer.measureAndCompare(() => {
    const aTestCases = [
        '-91283472332', // -2147483648
        '-42', // 42
        '   -42', // -42
        '4193 with words', // 4193
        '+-12', // 0
        '   +0 123', // 0
        '  +  413', // 0
    ]

    aTestCases.forEach((value, index) => console.log(index, myAtoi(value)))
});
