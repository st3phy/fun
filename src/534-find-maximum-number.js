/**
 * @param {string[]} words
 * @returns {number}
 */
const maximumNumberOfStringPairs = words => {
    let pairs = 0;
    const set = new Set();

    for (const word of words) {
        if (set.has(word[1] + word[0])) {
            pairs++;
        }
        set.add(word);
    }

    return pairs;
};

module.exports = { maximumNumberOfStringPairs };

console.log(maximumNumberOfStringPairs(["cd", "ac", "dc", "ca", "zz"]));
