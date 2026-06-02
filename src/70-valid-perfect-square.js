/**
 * @param {number} num
 * @return {boolean}
 */
const isPerfectSquare = num => {
    // Binary search from 1->num/2 since (num/2 + x) ^ 2 will always be bigger than num (except for num=1)
    var left = 1;
    var right = Math.floor(num / 2);

    // Binary search
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (mid * mid < num) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return left * left === num;
};

module.exports = { isPerfectSquare };

console.log(isPerfectSquare(16));
