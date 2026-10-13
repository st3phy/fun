/**
 * @param {string} s
 * @param {number} k
 * @returns {string}
 */
const truncateSentence = (s, k) => {
    return s.split(" ").slice(0, k).join(" ");
};

module.exports = { truncateSentence };

console.log(truncateSentence("a is a the r", 4));
