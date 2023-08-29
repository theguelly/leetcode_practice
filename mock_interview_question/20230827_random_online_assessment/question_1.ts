import ExecutionTimer from '../../src/utils/execution_timer';
/**
 * ----------------------------------------------------------------------------------------------------------------------
 * Mock Question 1
 * 
 * Given an n x n binary matrix image, flip the image horizontally, then invert it, and return the resulting image.
 * To flip an image horizontally means that each row of the image is reversed.
 *   * To flip an image horizontally means that each row of the image is reversed.
 * To flip an image horizontally means that each row of the image is reversed.
 *   * For example, inverting [0,1,1] results in [1,0,0].
 * 
 * Constraints:
 *   * n == image.length
 *   * n == image[i].length
 *   * 1 <= n <= 20
 *   * images[i][j] is either 0 or 1.
 * ----------------------------------------------------------------------------------------------------------------------
 */
function flipAndInvertImage(image: number[][]): number[][] {
    return image.map(array => array.reverse().map(value => Math.abs(value - 1)))
};

/**
 * ----------------------------------------------------------------------------------------------------------------------
 * Running Section. Not part of the problem
 * ----------------------------------------------------------------------------------------------------------------------
 */
const timer = new ExecutionTimer();
timer.measureAndCompare(() => {
    const aTestCases = [
        [[1,1,0],[1,0,1],[0,0,0]], // [[1,0,0],[0,1,0],[1,1,1]]
        [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]], // [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
    ]

    aTestCases.forEach((value, index) => console.log(index, '||', flipAndInvertImage(value).join(' | ')))
});
