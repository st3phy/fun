/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = digits => {
    const KEYPAD = { 2: "abc", 3: "def", 4: "ghi", 5: "jkl", 6: "mno", 7: "pqrs", 8: "tuv", 9: "wxyz" };

    // Prepare hashmap of how many times each letter is used before advancing in the dictionary
    const repeatMap = [];

    // Calculate final result size
    let rLength = 1;
    for (let i = digits.length - 1; i >= 0; i--) {
        repeatMap[i] = rLength;
        rLength *= KEYPAD[digits[i]].length;
    }

    // Prepare final result
    const result = [];
    for (let i = 0; i < rLength; i++) {
        result[i] = "";

        for (let j = 0; j < digits.length; j++) {
            const letters = KEYPAD[digits[j]];

            // Advance by i, but delayed by the combination of letters in front
            const index = Math.floor(i / repeatMap[j]) % letters.length;

            result[i] += letters[index];
        }
    }

    return result;
};

module.exports = { letterCombinations };
