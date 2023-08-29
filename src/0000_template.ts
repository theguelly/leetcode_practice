import ExecutionTimer from './utils/execution_timer';
/**
 * ----------------------------------------------------------------------------------------------------------------------
 * 0000. Template
 * https://leetcode.com/problems/
 * ----------------------------------------------------------------------------------------------------------------------
 */
function func_name(num: number): void {

};

/**
 * ----------------------------------------------------------------------------------------------------------------------
 * Running Section. Not part of the problem
 * ----------------------------------------------------------------------------------------------------------------------
 */
const timer = new ExecutionTimer();
timer.measureAndCompare(() => {
    const aTestCases = []

    aTestCases.forEach((value, index) => console.log(index, func_name(value)))
});
