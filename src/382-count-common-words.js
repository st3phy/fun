/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @returns {number}
 */
const countWords = (words1, words2) => {
    const freq = new Map();

    // Add 1 to freq of word for every word in words1
    for (const word of words1) {
        freq.set(word, (freq.get(word) || 0) + 1);
    }

    // Remove words with freq > 1
    for (const [word, count] of freq.entries()) {
        if (count > 1) freq.delete(word);
    }

    // Substarct 1 to freq of word for every word in words2
    for (const word of words2) {
        freq.set(word, (freq.get(word) || 0) - 1);
    }

    // Count words that have a freq of exactly 0
    let wordCount = 0;
    for (const count of freq.values()) {
        if (count === 0) wordCount++;
    }

    return wordCount;
};

module.exports = { countWords };

console.log(countWords(["leetcode", "is", "amazing", "as", "is"], ["amazing", "leetcode", "is"]));
