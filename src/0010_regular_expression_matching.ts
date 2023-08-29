import ExecutionTimer from './utils/execution_timer';
/**
 * ----------------------------------------------------------------------------------------------------------------------
 * 0010. Regular Expression Matching
 * https://leetcode.com/problems/regular-expression-matching/
 * ----------------------------------------------------------------------------------------------------------------------
 */
function isMatch(s: string, p: string): boolean {
    const r = new RegExp(formatPattern(p))
    return s.replace(r, '') === ''
};

function formatPattern(p: string): string {
    let str = '', result = ''
    while (p) {
        str = p[0]
        p = p.substring(1)
        if (str === '*' && result.slice(-1) === str) continue
        result += str
    }
    return result
}

/**
 * ----------------------------------------------------------------------------------------------------------------------
 * Running Section. Not part of the problem
 * ----------------------------------------------------------------------------------------------------------------------
 */
const timer = new ExecutionTimer();
timer.measureAndCompare(() => {
    const aTestCases = [
        { s: 'aaa', p: 'ab*a*c*a' }, // true
        { s: 'aa', p: 'a' }, // false
        { s: 'aa', p: 'a*' }, // true
        { s: 'aa', p: '.*' }, // true
        { s: 'abc', p: 'a***abc' }, // true
        { s: 'aaa', p: 'a*a' }, // true
        { s: 'aa', p: 'aa' }, // true
        { s: 'ab', p: '.*c' }, // false
        { s: 'mississippi', p: 'mis*is*p*.' }, // false
    ]

    aTestCases.forEach((value) => console.log(value, isMatch(value.s, value.p)))
});
