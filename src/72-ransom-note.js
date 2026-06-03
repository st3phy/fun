/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = (ransomNote, magazine) => {
    const letters = new Map();

    // Store the letters we need for the ransom note
    for (const letter of ransomNote) {
        letters.set(letter, (letters.get(letter) ?? 0) + 1);
    }

    // Every time we find a desired letter in the magazine, decrese the value from letters
    for (const letter of magazine) {
        if (letters.has(letter) && letters.get(letter) > 0) {
            letters.set(letter, letters.get(letter) - 1);
        }
    }

    // If all letters in Map() are zero, it means they were found in magazine
    return [...letters.values()].every(value => value <= 0);
};

module.exports = { canConstruct };

console.log(canConstruct("bg", "efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj"));
