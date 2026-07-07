/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
const shortestCompletingWord = (licensePlate, words) => {
    // Function to count how many times each character appears in an array
    const countChars = arr => {
        const map = new Map();
        for (const char of arr) {
            map.set(char, (map.has(char) ? map.get(char) : 0) + 1);
        }
        return map;
    };

    // Create an array with all of the letters in licensePlate, lowercased
    const letters = [...licensePlate.toLowerCase()].filter(char => char >= "a" && char <= "z");
    const required = countChars(letters);

    let candidate = "";

    // Search for the first word that contains all characters in licensePlate
    for (const word of words) {
        if (word.length < letters.length) continue;

        // Count letters in current word
        const countWord = countChars(word);

        let valid = true;

        // If current letter does not appear in current word the correct number of times, word is invalid
        for (const [letter, needed] of required) {
            if ((countWord.get(letter) ?? 0) < needed) {
                valid = false;
                break;
            }
        }
        // We found all letters in current word, and it is shorter than the previously found word
        if (valid && (word.length < candidate.length || !candidate)) {
            candidate = word;
        }
    }

    return candidate;
};

module.exports = { shortestCompletingWord };

console.log(shortestCompletingWord("1s3 PSt", ["step", "steps", "stripe", "stepple"]));
