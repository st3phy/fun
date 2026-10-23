/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
const divideString = (s, k, fill) => {
    const arr = [];

    for (let i = 0; i < s.length; i += k) {
        arr.push(s.slice(i, i + k));
    }

    let last = arr.pop();
    last += fill.repeat(k - last.length);
    arr.push(last);

    return arr;
};

module.exports = { divideString };

console.log(divideString("abcdefghij", 3, "x"));
