/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = n => {
    // Current cumbination (n) is
    //   the number of combinations for "n-1" to which we add 1 +
    //   the number of combinations for "n-2" to which we add 2 - so the fibonacci sequence

    let first = 1;
    let second = 1;
    let sum = 1;

    for (i = 2; i <= n; i++) {
        sum = first + second;
        first = second;
        second = sum;
    }

    return sum;

    // Recursive solution
    // if (n <= 1) {
    //     return 1;
    // }
    // return climbStairs(n - 1) + climbStairs(n - 2);
};

module.exports = { climbStairs };
