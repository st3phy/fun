/**
 * @param {string} word
 * @returns {number}
 */
const numDifferentIntegers = word => {
    // A set to save only different numbers
    const diff = new Set();
    let number = "";

    for (let i = 0; i <= word.length; i++) {
        // If we find a digit
        if (word[i] !== undefined && word[i] >= "0" && word[i] <= 9) {
            // Add it to the number
            number += word[i];
        } else {
            // If the number is not empty, add it to the set
            if (number !== "") {
                // Trim leading zeroes
                number = number.replace(/^0*(?=\d)/, "");
                diff.add(number);
            }
            // Initialize next number to empty string
            number = "";
        }
    }

    return diff.size;
};

module.exports = { numDifferentIntegers };

console.log(numDifferentIntegers("a1b01c001"));
