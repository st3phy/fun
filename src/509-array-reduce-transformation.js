/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
const reduce = (nums, fn, init) => {
    let res = init;
    for (const num of nums) {
        res = fn(res, num);
    }
    return res;
};

module.exports = { reduce };

console.log(
    reduce(
        [1, 2, 3, 4],
        function sum(accum, curr) {
            return accum + curr;
        },
        0
    )
);
