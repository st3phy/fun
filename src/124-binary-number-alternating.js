/**
 * @param {number} n
 * @return {boolean}
 */
const hasAlternatingBits = n => {
    // let first = 0;
    // let second = 1;
    // let i = 1;

    // while (first < n && second < n) {
    //     i % 2 === 1 ? (first = 2 ** i + first) : (second = 2 ** i + second);
    //     i++;
    // }

    // return n === first || n === second;

    // // Get last bit and shift n to the right
    // let prev = n & 1;
    // n >>= 1;

    // while (n) {
    //     const curr = n & 1;
    //     // If current last bit is the same as prev bit, bits are not alternating
    //     if (curr === prev) return false;

    //     prev = curr;
    //     n >>= 1;
    // }

    // return true;

    // Bit manipulation "trick"
    const ones = n ^ (n >> 1); // for atlernating bits, this should result in just ones (eg: 1111)
    return (ones & (ones + 1)) === 0; // eg: 1111 & 10000
};

module.exports = { hasAlternatingBits };

console.log(hasAlternatingBits(5));
