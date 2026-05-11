/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = prices => {
    let profit = 0;

    // Assume the min value if the first entry
    let currentMin = prices[0];

    for (let i = 1; i < prices.length; i++) {
        // If we find a new min value, update currentMin
        if (prices[i] < currentMin) {
            currentMin = prices[i];
        }

        // The new largest profit is the max value between old profit and current value - min value
        profit = Math.max(profit, prices[i] - currentMin);
    }

    return profit;
};

module.exports = { maxProfit };
