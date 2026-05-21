/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = n => {
    // Save all sums of squares we have already seen
    let seen = new Set([n]);

    while (true) {
        // The sum of the squares of the current number's digits
        let sum = 0;

        // While the current number has not reached 0
        while (n > 0) {
            // Add last digit's square to the sum
            sum += (n % 10) * (n % 10);

            // Remove last digit from number
            n = Math.floor(n / 10);
        }

        // If the sum is 1, the number is Happy
        if (sum === 1) {
            return true;
        }

        // If the current sum was previously found, we are in an endless cycle, so we'll never reach 1
        else if (seen.has(sum)) {
            return false;
        }

        // The new number becomes the current sum of squares
        n = sum;

        // Add the new number to the seen array
        seen.add(n);
    }
};

module.exports = { isHappy };

console.log(isHappy(2));
