/**
 * @param {number[]} arr
 * @returns {boolean}
 */
const threeConsecutiveOdds = arr => {
    let count = 0;

    for (const num of arr) {
        if (num & 1) {
            count++;
        } else {
            count = 0;
        }
        if (count === 3) return true;
    }

    return false;
};

module.exports = { threeConsecutiveOdds };

console.log(threeConsecutiveOdds([1, 2, 34, 3, 4, 5, 7, 23, 12]));
