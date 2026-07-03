/**
 * @param {number[]} cost
 * @return {number}
 */
const minCostClimbingStairs = cost => {
    // We can start on either the first or the second step for free
    let first = 0;
    let second = 0;

    // Start from the second stair and go to the top (out of bonds)
    for (let i = 2; i <= cost.length; i++) {
        const current = Math.min(first + cost[i - 2], second + cost[i - 1]);
        first = second;
        second = current;
    }

    return second;
};

module.exports = { minCostClimbingStairs };

console.log(minCostClimbingStairs([10, 15, 20]));
