/**
 * @param {number} n
 * @return {number[]}
 */
const countBits = n => {
    const bits = new Array(n + 1).fill(0);

    for (let i = 1; i <= n; i++) {
        // If i is even, the value should be the value at i/2
        if (i % 2 === 0) {
            bits[i] = bits[i / 2];
        }
        // If i is odd, the value is the rounded value of i/2 plus one
        else {
            bits[i] = bits[Math.floor(i / 2)] + 1;
        }
    }

    return bits;
    //
    //
    // Shorter for
    // for (let i = 1; i <= n; i++) {
    //     bits[i] = bits[Math.floor(i / 2)] + (i % 2);
    // }
    // return bits;
    //
    //
    // Solution using bit manipulation
    // const bits = new Array(n + 1).fill(0);
    // for (let i = 1; i <= n; i++) {
    //     bits[i] = bits[i >> 1] + (i & 1);
    // }
    // return bits;
};

module.exports = { countBits };

console.log(countBits(16));
