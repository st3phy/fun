const KEYPAD = { 2: "abc", 3: "def", 4: "ghi", 5: "jkl", 6: "mno", 7: "pqrs", 8: "tuv", 9: "wxyz" };

/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = digits => {
    // Calculate final result size
    let rLength = 1;
    for (let i = 0; i < digits.length; i++) {
        rLength *= KEYPAD[digits[i]].length;
    }

    // Prepare hashmap of how many times each letter is used before advancing in the dictionary
    const repeatMap = {};
    let repeatTimes = rLength;
    for (let i = 0; i < digits.length; i++) {
        repeatTimes /= KEYPAD[digits[i]].length;
        repeatMap[i] = repeatTimes;
    }

    // Prepare final result
    let result = [];
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
