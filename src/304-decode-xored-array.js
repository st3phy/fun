/**
 * @param {number[]} encoded
 * @param {number} first
 * @returns {number[]}
 */
const decode = (encoded, first) => {
    const arr = [first];

    for (let i = 0; i < encoded.length; i++) {
        arr[i + 1] = arr[i] ^ encoded[i];
    }

    return arr;
};

module.exports = { decode };

console.log(decode([6, 2, 7, 3], 4));
