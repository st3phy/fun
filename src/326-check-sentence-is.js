/**
 * @param {string} sentence
 * @returns {boolean}
 */
const checkIfPangram = sentence => {
    const freq = new Set(sentence);

    return freq.size === 26;
};

module.exports = { checkIfPangram };

console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog"));
