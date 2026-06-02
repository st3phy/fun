/*
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 */
const picked = 8;
var guess = function (num) {
    if (num < picked) {
        return 1;
    }
    if (num > picked) {
        return -1;
    }
    return 0;
};

/*
 * @param {number} n
 * @return {number}
 */
const guessNumber = n => {
    // Set left and right pointers at extremes
    let left = 1;
    let right = n;

    // Binary search
    while (left <= right) {
        // Get middle
        const mid = Math.floor((left + right) / 2);
        const guessed = guess(mid);
        // Guess middle, if zero, we found the number
        if (guessed === 0) {
            return mid;
        }
        // If guess is one, the middle is too low, so left becomes mid+1
        if (guessed === 1) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
};

module.exports = { guessNumber };

console.log(guessNumber(26));
