/**
 * @param {number[]} arr
 * @param {number} m
 * @param {number} k
 * @returns {boolean}
 */
const containsPattern = (arr, m, k) => {
    let pairs = 0;
    for (let i = 0; i < arr.length - m; i++) {
        if (arr[i] === arr[i + m]) {
            pairs++;
            if (pairs === (k - 1) * m) {
                return true;
            }
        } else {
            pairs = 0;
        }
    }

    return false;
};

module.exports = { containsPattern };

console.log(containsPattern([1, 2, 4, 4, 4, 4], 1, 3));
