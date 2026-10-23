/**
 * @param {number[]} cost
 * @returns {number}
 */
const minimumCost = cost => {
    let min = 0;

    // Sort cost, descending
    cost.sort((a, b) => b - a);

    // Buy two candies, get every third one for free
    for (let i = 0; i < cost.length; i += 3) {
        min += cost[i] + (cost[i + 1] || 0);
    }

    return min;
};

module.exports = { minimumCost };

console.log(minimumCost([1, 2, 3]));
