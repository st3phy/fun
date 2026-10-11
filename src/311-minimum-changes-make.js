/**
 * @param {string} s
 * @returns {number}
 */
const minOperations = s => {
    let count = 0;

    // Count bits that are not arranged as "01010101..."
    for (let i = 0; i < s.length; i++) {
        const parity = i % 2 === 0 ? "0" : "1";
        if (s[i] !== parity) {
            count++;
        }
    }

    // Bits that are not arranged as "10101010..." are measured by s.length - count, because the two patterns differ at every position
    return Math.min(count, s.length - count);
};

module.exports = { minOperations };

console.log(minOperations("01001"));
