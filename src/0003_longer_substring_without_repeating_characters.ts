import ExecutionTimer from './utils/execution_timer';
/**
 * ----------------------------------------------------------------------------------------------------------------------
 * 0003. Longest Substring Without Repeating Characters
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * ----------------------------------------------------------------------------------------------------------------------
 */
function lengthOfLongestSubstring(s: string): number {
    let resultSubstring: string = ''
    let resultLength: number = 0
    for(let idx = 0; idx < s.length; idx++) {
        if (resultSubstring.includes(s[idx]) === true){
            resultSubstring = resultSubstring.slice(resultSubstring.indexOf(s[idx]) + 1, resultSubstring.length) + s[idx]
        } else {
            resultSubstring += s[idx]
        }
        resultLength = Math.max(resultSubstring.length, resultLength)
    }
    return resultLength
};

/**
 * ----------------------------------------------------------------------------------------------------------------------
 * Running Section. Not part of the problem
 * ----------------------------------------------------------------------------------------------------------------------
 */
const timer = new ExecutionTimer();
timer.measureAndCompare(() => {
    const aTestCases = [
        'abcabcbb', // 3
        'bbbbb', // 1
        'pwwkew', // 3
    ]

    aTestCases.forEach((value, index) => console.log(index, lengthOfLongestSubstring(value)))
});
