/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = s => {
    const words = s.split(" ");
    const res = [];

    for (const word of words) {
        const rev = word.split("").reverse();
        res.push(rev.join(""));
    }

    return res.join(" ");
};

module.exports = { reverseWords };

console.log(reverseWords("Let's take LeetCode contest"));
