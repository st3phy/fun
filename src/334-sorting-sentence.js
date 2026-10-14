/**
 * @param {string} s
 * @returns {string}
 */
const sortSentence = s => {
    const words = s.split(" ");
    const res = [];

    for (const word of words) {
        res[word[word.length - 1] - 1] = word.slice(0, -1);
    }

    return res.join(" ");
};

module.exports = { sortSentence };

console.log(sortSentence("Myself2 Me1 I4 and3"));
