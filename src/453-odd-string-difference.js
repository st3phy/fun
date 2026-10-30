/**
 * @param {string[]} words
 * @returns {string}
 */
const oddString = words => {
    const first = words[0];
    let diff = 0;
    let diffWord;

    for (let i = 1; i < words.length; i++) {
        for (let j = 1; j < first.length; j++) {
            if (
                first[j].charCodeAt(0) - first[j - 1].charCodeAt(0) !==
                words[i][j].charCodeAt(0) - words[i][j - 1].charCodeAt(0)
            ) {
                diff++;
                diffWord = words[i];
                break;
            }
        }

        // If the first word differes from more than one other word, it is the odd string
        if (diff > 1) return first;
    }

    return diffWord;
};

module.exports = { oddString };

console.log(oddString(["adc", "wzy", "abc"]));
