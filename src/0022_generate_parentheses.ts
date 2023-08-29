import ExecutionTimer from './utils/execution_timer';
/**
 * ----------------------------------------------------------------------------------------------------------------------
 * 0022. Generate Parentheses
 * https://leetcode.com/problems/generate-parentheses/
 * ----------------------------------------------------------------------------------------------------------------------
 */
function generateParenthesis(n: number): string[] {
    let result = []
    for (let i = 0, j = 0; i < Math.pow(n, 2) / 2; i++) {
        j = i
        while (j < n) {
            result.push(''.padStart(j + 1, '(').padEnd(j + 1 + j + 1, ')'))
            j++
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
        1, // ["()"]
        2, // ["(())", "()()"]
        3, // ["((()))","(()())","(())()","()(())","()()()"]
    ]

    aTestCases.forEach((value, index) => console.log(index, generateParenthesis(value)))
});
