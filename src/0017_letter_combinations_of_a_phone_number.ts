import ExecutionTimer from './utils/execution_timer';
/**
 * ----------------------------------------------------------------------------------------------------------------------
 * 0017. Letter Combinations of a Phone Number
 * https://leetcode.com/problems/letter-combinations-of-a-phone-number/
 * ----------------------------------------------------------------------------------------------------------------------
 */
const charMap = [
    [],
    [],
    ['a','b','c'],      
    ['d','e','f'],
    ['g','h','i'],
    ['j','k','l'],
    ['m','n','o'],
    ['p','q','r','s'],
    ['t','u','v'],
    ['w','x','y','z'],
]

function letterCombinations(digits: string): string[] {
    return mapCombinations(digits.substring(1), charMap[digits[0]])
};

function mapCombinations(digits: string, result = []): string[] {
    if (digits.length === 0) return result
    const tempResult = result
    result = []
    for (let i = 0; i < tempResult.length; i++) {
        for (let str of charMap[digits[0]]) {
            result.push(tempResult[i] + str)
        }
    }
    return mapCombinations(digits.substring(1), result)
}

/**
 * ----------------------------------------------------------------------------------------------------------------------
 * Running Section. Not part of the problem
 * ----------------------------------------------------------------------------------------------------------------------
 */
const timer = new ExecutionTimer();
timer.measureAndCompare(() => {
    const aTestCases = [
        '23', // ["ad","ae","af","bd","be","bf","cd","ce","cf"]
        '', // []
        '2', // ["a","b","c"]
    ]

    aTestCases.forEach((value, index) => console.log(index, letterCombinations(value)))
});
