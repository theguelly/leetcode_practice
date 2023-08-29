import ExecutionTimer from './utils/execution_timer';
/**
 * ----------------------------------------------------------------------------------------------------------------------
 * 0006. Zigzag Conversion
 * https://leetcode.com/problems/zigzag-conversion/
 * ----------------------------------------------------------------------------------------------------------------------
 */
function convert(s: string, numRows: number): string {
    if (numRows === 1) return s
    let strArray = s.split(''), result = new Array(numRows).fill('')
    let currentRow = 1
    let increment
    while (strArray.length > 0) {
        if (currentRow === 1) increment = true
        if (currentRow === numRows) increment = false
        result[currentRow - 1] += strArray.shift()
        if (increment) currentRow++
        if (!increment) currentRow--
    }
    return result.join('')
};

/**
 * ----------------------------------------------------------------------------------------------------------------------
 * Running Section. Not part of the problem
 * ----------------------------------------------------------------------------------------------------------------------
 */
const timer = new ExecutionTimer();
timer.measureAndCompare(() => {
    const aTestCases = [
        { s: 'PAYPALISHIRING', numRows: 3 }, // PAHNAPLSIIGYIR
        { s: 'PAYPALISHIRING', numRows: 4 }, // PINALSIGYAHRPI
        { s: 'A', numRows: 1 }, // A
    ]

    aTestCases.forEach((value) => console.log(value, convert(value.s, value.numRows)))
});
