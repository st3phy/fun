/**
 * @param {string} sentence
 * @param {string} searchWord
 * @returns {number}
 */
const isPrefixOfWord = (sentence, searchWord) => {
    let index = -1;
    const words = sentence.split(" ");

    for (let i = 0; i < words.length; i++) {
        if (words[i].startsWith(searchWord)) return i + 1;
    }

    return index;
};

module.exports = { isPrefixOfWord };

console.log(isPrefixOfWord("love errichto jonathan dumb", "dumb"));
