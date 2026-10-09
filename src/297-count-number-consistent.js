/**
 * @param {string} allowed
 * @param {string[]} words
 * @returns {number}
 */
const countConsistentStrings = (allowed, words) => {
    const isAllowed = new Set(allowed);
    let count = 0;

    for (const word of words) {
        let isConsistent = true;
        for (const c of word) {
            if (!isAllowed.has(c)) {
                isConsistent = false;
                break;
            }
        }
        if (isConsistent) {
            count++;
        }
    }

    return count;
};

module.exports = { countConsistentStrings };

console.log(countConsistentStrings("cad", ["cc", "acd", "b", "ba", "bac", "bad", "ac", "d"]));
