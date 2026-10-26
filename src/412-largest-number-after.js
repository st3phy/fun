/**
 * @param {number} num
 * @returns {number}
 */
const largestInteger = num => {
    let freq = new Array(10).fill(0);
    let temp = num;

    // Count freq of digits
    while (temp > 0) {
        const digit = temp % 10;
        freq[digit]++;
        temp = Math.floor(temp / 10);
    }

    let oddsIndex = 1;
    let evensIndex = 0;
    let largest = 0;
    let pos = 1;

    // Go through number digit by digit, starting with last digit
    while (num > 0) {
        const digit = num % 10;

        // If current digit in num is odd
        if (digit % 2) {
            // Search for the first smallest digit that has a frequency of at least 1
            while (!freq[oddsIndex]) {
                oddsIndex += 2;
            }
            // Add that digit to the current position in the resut number
            largest += oddsIndex * pos;
            // Decrement frequency of used digit
            freq[oddsIndex]--;
        } else {
            while (!freq[evensIndex]) {
                evensIndex += 2;
            }
            largest += evensIndex * pos;
            freq[evensIndex]--;
        }
        pos *= 10;
        num = Math.floor(num / 10);
    }

    return largest;
};

module.exports = { largestInteger };

console.log(largestInteger(65875));
