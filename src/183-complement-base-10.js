/**
 * @param {number} n
 * @return {number}
 */
const bitwiseComplement = n => {
    // mask solution, preferred
    if (n === 0) return 1;

    let mask = 0;
    let temp = n;

    // Create a mask of all 1 bits with the same number of bits as n
    while (temp > 0) {
        mask = (mask << 1) | 1;
        temp >>= 1;
    }

    return n ^ mask;

    // my solution:
    if (n === 0) return 1;

    let c = 0;
    let position = 0;

    while (n > 0) {
        // Get last bit and flip it
        const last = (n & 1) ^ 1;
        n >>= 1;

        // Move the flipped bit to its corresponding position in the resulting number
        c += last << position;

        // Increment position for next bit
        position++;
    }

    return c;
};

module.exports = { bitwiseComplement };

console.log(bitwiseComplement(10));
