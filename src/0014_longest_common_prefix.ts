import ExecutionTimer from './utils/execution_timer';
/**
 * ----------------------------------------------------------------------------------------------------------------------
 * 0014. Longest Common Prefix
 * https://leetcode.com/problems/longest-common-prefix/
 * ----------------------------------------------------------------------------------------------------------------------
 */
function longestCommonPrefix(strs: string[]): string {
    let longest = ''
    for (let i = 0, j = 1; i < strs[0].length; i++) {
        j = 1
        longest += strs[0][i]
    
        while (j < strs.length) {
            if (longest === strs[j].substring(0, i + 1)) j++
            else {
                break
            }
        }

        if (j < strs.length) {
            longest = longest.substring(0, longest.length - 1)
            break
        }
    }
    return longest
};

/**
 * ----------------------------------------------------------------------------------------------------------------------
 * Running Section. Not part of the problem
 * ----------------------------------------------------------------------------------------------------------------------
 */
const timer = new ExecutionTimer();
timer.measureAndCompare(() => {
    const aTestCases = [
        ['car', 'cat', 'caz'], // ca
        ['flower', 'flow', 'flight'], // fl
        ['dog', 'racecar', 'car'], //
        ['flower', 'flow', 'flight'], // fl
        ['flower', 'flow', 'floweg'], // flow
        
    ]

    aTestCases.forEach((value, index) => console.log(index, longestCommonPrefix(value)))
});
