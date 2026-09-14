/**
 * @param {number[]} arr
 * @returns {number[][]}
 */
const minimumAbsDifference = arr => {
    arr.sort((a, b) => a - b);
    let diff = Infinity;
    let res = [];

    for (let i = 1; i < arr.length; i++) {
        const d = arr[i] - arr[i - 1];
        // If diff between current pair is smaller than last found difference
        if (d < diff) {
            // Store new difference and resset results array
            diff = d;
            res = [];
        } else if (d > diff) {
            continue;
        }
        // Push current pair to results array
        res.push([arr[i - 1], arr[i]]);
    }

    return res;
};

module.exports = { minimumAbsDifference };

console.log(minimumAbsDifference([3, 8, -10, 23, 19, -4, -14, 27]));
