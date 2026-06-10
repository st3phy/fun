/**
 * @param {number} num
 * @return {number}
 */
const findComplement = num => {
    // Create a mask - the first power of 2 that is bigger than num
    let mask = 1;

    while (mask <= num) {
        mask *= 2;
    }

    // subtracting 1 turns the mask into all 1s with the same bit-length as num
    // now, XOR will flipp every bit from num
    return (mask - 1) ^ num;
};

module.exports = { findComplement };

console.log(findComplement(5));
