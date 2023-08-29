import ExecutionTimer from './utils/execution_timer';
/**
 * ----------------------------------------------------------------------------------------------------------------------
 * 0012. Integer to Roman
 * https://leetcode.com/problems/integer-to-roman/
 * ----------------------------------------------------------------------------------------------------------------------
 */
const symbolMapping = {
    1: 'I',
    5: 'V',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M',
}

function intToRoman(num: number): string {
    let extract = num, value = 0
    let numbers: number[] = []
    let result = ''
    let pow = 0
    let index = 0

    while(extract) {
        value = extract % 10
        pow = getPower(index)
        switch(value) {
            case 1:
            case 2:
            case 3:
                result = result.padStart(result.length + value, symbolMapping[pow])
                break;
            case 4:
                result = symbolMapping[pow] + symbolMapping[(value * pow) + (1 * pow)] + result
                break
            case 5:
                result = symbolMapping[(pow * 5)] + result
                break;
            case 6:
            case 7:
            case 8:
                result =  symbolMapping[(pow * 5)] + result.padStart((result.length + value) - 5, symbolMapping[pow])
                break;
            case 9:
                result = symbolMapping[pow] + symbolMapping[(value * pow) + (1 * pow)] + result
                break
        }
        extract = extract / 10 | 0
        index++
    }
    
    return result
};

function getPower(num: number) {
    return [1, 10, 100, 1000][num]
}

/**
 * ----------------------------------------------------------------------------------------------------------------------
 * Running Section. Not part of the problem
 * ----------------------------------------------------------------------------------------------------------------------
 */
const timer = new ExecutionTimer();
timer.measureAndCompare(() => {
    const aTestCases = [
        3, // III
        58, // LVIII
        1994, // MCMXCIV
    ]

    aTestCases.forEach((value, index) => console.log(index, intToRoman(value)))
});
