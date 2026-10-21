/**
 * @param {string[]} sentences
 * @returns {number}
 */
const mostWordsFound = sentences => {
    let count = 0;

    for (const sentence of sentences) {
        const curr = sentence.split(" ").length;
        count = Math.max(count, curr);
    }

    return count;
};

module.exports = { mostWordsFound };

console.log(mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"]));
