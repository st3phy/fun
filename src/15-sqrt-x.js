/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = x => {
    // Return sqrt(x) rounded down to nearest integer - 32 ms
    // let i = 0;
    // while (true) {
    //     if (i * i <= x && (i + 1) * (i + 1) > x) {
    //         return i;
    //     }
    //     i++;
    // }

    // Faster naive approach - 18ms
    // let i = 0;
    // while (i * i <= x) {
    //     i++;
    // }
    // return i - 1;

    // Binary Search solution - 0ms
    if (x == 0) {
        return x;
    }

    let low = 1,
        high = Math.floor(x / 2),
        res = 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);

        if (mid * mid > x) {
            high = mid - 1;
        } else {
            res = mid;
            low = mid + 1;
        }
    }

    return res;
};

module.exports = { mySqrt };

console.log(mySqrt(4));
