/**
 * @param {string} s
 * @return {boolean}
 */
const validPalindrome = s => {
    // Take 2 pointers, one at beginning and one at end of string
    let left = 0;
    let right = s.length - 1;

    // Function to check if a string is a palindrome, between certain points
    const checkPalindrome = (left, right, s) => {
        while (left < right) {
            if (s[left] !== s[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    };

    while (left < right) {
        // If the values don't match
        if (s[left] !== s[right]) {
            // Remove left char, then right char. If one of the remaining strings is a palindorme, target achieved
            return checkPalindrome(left + 1, right, s) || checkPalindrome(left, right - 1, s);
        }
        // Advance pointers
        left++;
        right--;
    }

    return true;
};

module.exports = { validPalindrome };

console.log(validPalindrome("eceec"));
