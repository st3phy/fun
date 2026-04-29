/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = digits => {
    // Hacky solution for arrays like [9,9...9] - 0 ms runtime
    // const n = digits.length - 1;

    // for (let i = n; i >= 0; i--) {
    //     if (digits[i] === 9) {
    //         digits[i] = 0;
    //     } else {
    //         digits[i]++;
    //         break;
    //     }
    // }

    // // If all digits were equal to 9, the new array will be [0,0...0]
    // if (digits[0] === 0) {
    //     // Add a "1" to the front of the array
    //     digits[0] = 1;
    //     digits[n + 1] = 0;
    // }

    // return digits;

    // Cleaner solution - using the spread operator - 0 ms runtime
    for (let i = digits.length - 1; i >= 0; i--) {
        // If the current digit is less than 9, increment and return the result
        if (digits[i] !== 9) {
            digits[i]++;
            return digits;
        }
        // If the digit is 9, it becomes 0 and we carry to the next digit
        digits[i] = 0;
    }

    // If all digits were 9, we end up with [0,0...0] so we prepend 1
    return [1, ...digits];
};

module.exports = { plusOne };
