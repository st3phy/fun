/**
 * @param {number} n
 * @returns {number[]}
 */
const evenOddBit = n => {
    // 1000 in binary: 1111101000
    const countSetBits = num => {
        let count = 0;
        while (num > 0) {
            num &= num - 1;
            count++;
        }
        return count;
    };

    return [countSetBits(n & 0b0101010101), countSetBits(n & 0b1010101010)];
};

module.exports = { evenOddBit };

console.log(evenOddBit(50));
