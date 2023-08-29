import ExecutionTimer from './utils/execution_timer';
/**
 * ----------------------------------------------------------------------------------------------------------------------
 * 0013. Roman to Integer
 * https://leetcode.com/problems/roman-to-integer/
 * ----------------------------------------------------------------------------------------------------------------------
 */
const symbolMapping = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
}

const specialMapping = {
    'V': 'I',
    'X': 'I',
    'L': 'X',
    'C': 'X',
    'D': 'C',
    'M': 'C',
}

function romanToInt(s: string): number {
    let result = 0
    let tempStr = ''
    while (s) {
        tempStr = s.slice(-1)
        if (tempStr in specialMapping && s.slice(-2, -1) === specialMapping[tempStr]) {
            s = s.substring(0, s.length - 2)
            result += (symbolMapping[tempStr] - symbolMapping[specialMapping[tempStr]])
            continue
        } else {
            s = s.substring(0, s.length - 1)
            result += symbolMapping[tempStr]
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
        'III', // 3
        'LVIII', // 58
        'MCMXCIV', // 1994
    ]
5
    aTestCases.forEach((value, index) => console.log(index, romanToInt(value)))
});