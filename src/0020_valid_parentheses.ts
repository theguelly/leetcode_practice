import ExecutionTimer from './utils/execution_timer';
/**
 * ----------------------------------------------------------------------------------------------------------------------
 * 0020. Valid Parentheses
 * https://leetcode.com/problems/valid-parentheses/
 * ----------------------------------------------------------------------------------------------------------------------
 */
function isValid(s: string): boolean {
    let open = '', closed = true
    if (['}', ']', ')'].includes(s[0])) return false
    for (let i = 0; i < s.length; i++) {
        if (['{', '[', '('].includes(s[i])){
            open += s[i]
        }
        else {
            if ({ '(': ')', '{': '}', '[': ']' }[open.slice(-1)] === s[i])
                open = open.substring(0, open.length - 1)
            else {
                closed = false
                break
            }
        }
    }
    return open.length === 0 && closed
};

/**
 * ----------------------------------------------------------------------------------------------------------------------
 * Running Section. Not part of the problem
 * ----------------------------------------------------------------------------------------------------------------------
 */
const timer = new ExecutionTimer();
timer.measureAndCompare(() => {
    const aTestCases = [
        '()', // true
        '()[]{}', // true
        '(]', // false
        '([)]', // false
        '{[]}', // true
        '({{{{}}}))', // false
        ']', // false
        '(){}}{', // false
    ]

    aTestCases.forEach((value, index) => console.log(index, isValid(value)))
});
