/**
 * @param {string} word1
 * @param {string} word2
 */
const checkAlmostEquivalent = (word1, word2) => {
    const freq = new Array(26).fill(0);

    for (let i = 0; i < word1.length; i++) {
        const add = word1[i].charCodeAt(0) - 97;
        const substract = word2[i].charCodeAt(0) - 97;
        freq[add]++;
        freq[substract]--;
    }

    for (let i = 0; i < 26; i++) {
        if (freq[i] > 3 || freq[i] < -3) return false;
    }

    return true;
};

module.exports = { checkAlmostEquivalent };

console.log(checkAlmostEquivalent("aaaa", "bccb"));
