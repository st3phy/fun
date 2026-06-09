/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const hammingDistance = (x, y) => {
    // The Hamming distance between two integers is the number of bit positions where their binary representations differ
    // it counts the bits that must be flipped to transform one integeter into the other

    // Using XOR on the two numbers will keep just the bits that differ since 1^1 and 0^0 equal 0
    let xor = x ^ y;

    // Now, just count the number of set bits for this number
    let count = 0;
    while (xor) {
        count += xor & 1;
        xor >>= 1;
    }

    return count;
};

module.exports = { hammingDistance };

console.log(hammingDistance(1, 3));
