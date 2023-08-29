import ExecutionTimer from './utils/execution_timer';
/**
 * ----------------------------------------------------------------------------------------------------------------------
 * 0005. Longest Palindromic Substring
 * https://leetcode.com/problems/longest-palindromic-substring/
 * ----------------------------------------------------------------------------------------------------------------------
 */
function longestPalindrome(s: string): string {
    let longest = ''; // The longest palindromic substring found
    let current = ''; // The current palindromic substring being checked

    for (let i = 0; i < s.length; i++) {
        current = expandAroundCenter(s, i, i); // Odd length palindrome
        if (current.length > longest.length) {
            longest = current;
        }

        current = expandAroundCenter(s, i, i + 1); // Even length palindrome
        if (current.length > longest.length) {
            longest = current;
        }
    }

    return longest;
}

function expandAroundCenter(s: string, left: number, right: number): string {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    // Slice the palindromic substring from left+1 to right-1
    return s.slice(left + 1, right);
}

/**
 * ----------------------------------------------------------------------------------------------------------------------
 * Running Section. Not part of the problem
 * ----------------------------------------------------------------------------------------------------------------------
 */
const timer = new ExecutionTimer();
timer.measureAndCompare(() => {
    const aTestCases = [
        'babad', // bab, or aba 
        'cbbd', // bb
    ]

    aTestCases.forEach((value, index) => console.log(index, longestPalindrome(value)))
});
