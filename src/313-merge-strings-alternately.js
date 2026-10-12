/**
 * @param {string} word1
 * @param {string} word2
 * @returns {string}
 */
const mergeAlternately = (word1, word2) => {
    const len1 = word1.length;
    const len2 = word2.length;
    const res = [];

    // Interlock strings while they both still have characters
    let i = 0;
    while (i < len1 && i < len2) {
        res.push(word1[i], word2[i]);
        i++;
    }

    // If the first string still has characters, add them to res array
    if (len1 - i > 0) {
        res.push(word1.slice(i));
    }

    // If the second string still has characters, add them to res array
    if (len2 - i > 0) {
        res.push(word2.slice(i));
    }

    return res.join("");
};

module.exports = { mergeAlternately };

console.log(mergeAlternately("cf", "eee"));
