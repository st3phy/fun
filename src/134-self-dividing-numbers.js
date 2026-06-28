/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
const selfDividingNumbers = (left, right) => {
    const res = [];

    for (let num = left; num <= right; num++) {
        // Save current number to a temporary variable
        let temp = num;
        while (temp) {
            // Get last digit of current number
            const digit = temp % 10;
            // If the number is not divisible with the digit, break
            if (num % digit !== 0) {
                break;
            }
            // Remove last digit from the temporary variable
            temp = Math.floor(temp / 10);
        }

        // If the temporary varible reached zero, then all digit divide the number
        if (!temp) {
            res.push(num);
        }
    }

    return res;
};

module.exports = { selfDividingNumbers };

console.log(selfDividingNumbers(51, 51));
