/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @returns {number}
 */
const countBalls = (lowLimit, highLimit) => {
    let max = 0;
    const balls = [];

    for (let i = lowLimit; i <= highLimit; i++) {
        // Compute sum of digits for current number
        let sum = 0;
        let num = i;
        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }

        // Add the ball to it's box
        balls[sum] = (balls[sum] ?? 0) + 1;

        // If the current box has more balls than previous max, update max
        max = Math.max(max, balls[sum]);
    }

    return max;
};

module.exports = { countBalls };

console.log(countBalls(19, 28));
