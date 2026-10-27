/**
 * Check if two words are anagrams
 * @param {string} word1
 * @param {string} word2
 * @returns {boolean}
 */
const isAnagram = (word1, word2) => {
    if (word1.length !== word2.length) return false;

    const freq = new Map();

    for (let i = 0; i < word1.length; i++) {
        freq.set(word1[i], (freq.get(word1[i]) || 0) + 1);
        freq.set(word2[i], (freq.get(word2[i]) || 0) - 1);
    }

    return [...freq.values()].every(val => val === 0);
};

/**
 * @param {string[]} words
 * @returns {string[]}
 */
const removeAnagrams = words => {
    const res = [words[0]];

    for (let i = 1; i < words.length; i++) {
        if (!isAnagram(words[i], words[i - 1])) {
            res.push(words[i]);
        }
    }

    return res;
};

module.exports = { removeAnagrams };

console.log(removeAnagrams(["abba", "baba", "bbaa", "cd", "cd"]));
