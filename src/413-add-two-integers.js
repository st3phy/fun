/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
const sum = (num1, num2) => {
    // Continue until there are no carry bits left
    while (num2 !== 0) {
        // Find positions where both numbers have a 1 bit. These positions generate carry bits.
        // Shift left by one to move each carry to the next position
        const carry = (num1 & num2) << 1;

        // Add the bits without carrying
        num1 = num1 ^ num2;

        // Store the carry bits for the next iteration
        num2 = carry;
    }

    return num1;
};

module.exports = { sum };

console.log(sum(-10, 4));
