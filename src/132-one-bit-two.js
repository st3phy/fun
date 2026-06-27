/**
 * @param {number[]} bits
 * @return {boolean}
 */
const isOneBitCharacter = bits => {
    let i = 0;

    // Don't check last bit
    while (i < bits.length - 1) {
        // We found a "two-bit" character
        if (bits[i] === 1) {
            // jump over next bit
            i += 1;
        }
        i++;
    }

    // If the pointer reached the lenght of the array, it means the last character was a "two-bit" character
    return i !== bits.length;
};

module.exports = { isOneBitCharacter };

console.log(isOneBitCharacter([1, 0, 0, 1, 0, 0]));
