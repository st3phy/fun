/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @returns {number[]}
 */
const answerQueries = (nums, queries) => {
    nums.sort((a, b) => a - b);
    const res = [];
    const n = nums.length;

    const prefixSum = [nums[0]];
    for (let i = 1; i < n; i++) {
        prefixSum[i] = nums[i] + prefixSum[i - 1];
    }

    for (const sum of queries) {
        let l = 0;
        let r = n;
        while (l < r) {
            const mid = Math.floor((l + r) / 2);
            if (prefixSum[mid] <= sum) {
                l = mid + 1;
            } else {
                r = mid;
            }
        }
        res.push(l);
    }

    return res;
};

module.exports = { answerQueries };

console.log(answerQueries([4, 5, 2, 1], [3, 10, 21]));
