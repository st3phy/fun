/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
const uncommonFromSentences = (s1, s2) => {
    const uncommon = [];
    const frequency = new Map();

    /** Counts frequency of words in a sentence
     *
     * @param {string} s
     * @return {void}
     */
    const countWords = s => {
        const words = s.split(" ");
        for (const word of words) {
            frequency.set(word, (frequency.get(word) || 0) + 1);
        }
    };

    countWords(s1);
    countWords(s2);

    // A word is uncommon if its frequency is 1
    for (const [word, i] of frequency) {
        if (i === 1) uncommon.push(word);
    }

    return uncommon;
};

module.exports = { uncommonFromSentences };

console.log(uncommonFromSentences("banana banana", "apple"));
