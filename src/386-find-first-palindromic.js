/**
 * @param {string[]} words
 * @returns {string}
 */
const firstPalindrome = words => {
    for (const word of words) {
        let left = 0;
        let right = word.length - 1;
        let isPal = true;

        while (left < right) {
            if (word[left] !== word[right]) {
                isPal = false;
                break;
            }
            left++;
            right--;
        }

        if (isPal) return word;
    }

    return "";
};

module.exports = { firstPalindrome };

console.log(firstPalindrome(["abc", "car", "ada", "racecar", "cool"]));
