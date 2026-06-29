/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
const nextGreatestLetter = (letters, target) => {
    const len = letters.length - 1;
    let left = 0;
    let right = len;

    // Treat edge cases: all letters are greater or smaller than target
    if (letters[0] > target || letters[len] <= target) return letters[0];

    // Binary search
    while (left < right) {
        const middle = Math.floor((left + right) / 2);
        if (letters[middle] <= target) {
            left = middle + 1;
        } else {
            right = middle;
        }
    }

    return letters[left];
};

module.exports = { nextGreatestLetter };

console.log(nextGreatestLetter(["c", "f", "j"], "g"));
