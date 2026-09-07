/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
const findOccurrences = (text, first, second) => {
    const arr = text.split(" ");
    const res = [];

    for (let i = 0; i < arr.length - 2; i++) {
        if (arr[i] === first && arr[i + 1] === second) {
            res.push(arr[i + 2]);
        }
    }

    return res;
};

module.exports = { findOccurrences };

console.log(findOccurrences("alice is a good girl she is a good student", "a", "good"));
