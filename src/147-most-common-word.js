/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
const mostCommonWord = (paragraph, banned) => {
    // Convert banned words to a Set() for faster lookup
    const bannedSet = new Set(banned);

    // Transform every character to lowercase, remove the punctuation, separate words into an array and remove all banned words
    const words = paragraph
        .toLowerCase()
        .match(/[a-z]+/g)
        .filter(word => !bannedSet.has(word));

    const count = new Map();
    let max = 0;
    let candidate = "";

    // Count all words
    for (const word of words) {
        // Get frequency of current word
        const frequency = (count.get(word) ?? 0) + 1;
        // Increment frequency of current word
        count.set(word, frequency);
        // Set candidate to current word if frequency is bigger than previous max
        if (frequency > max) {
            max = frequency;
            candidate = word;
        }
    }

    return candidate;
};

module.exports = { mostCommonWord };

console.log(mostCommonWord("a b.b", []));
