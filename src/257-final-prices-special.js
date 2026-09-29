/**
 * @param {number[]} prices
 * @returns {number[]}
 */
const finalPrices = prices => {
    // Array to store discounted prices
    const res = [...prices];

    // Stack to store indices of prices
    const stack = [];

    for (let i = 0; i < prices.length; i++) {
        // Process items that can be discounted by current price
        while (stack.length && prices[stack[stack.length - 1]] >= prices[i]) {
            // Apply discount to previous item using current price
            res[stack.pop()] -= prices[i];
        }

        stack.push(i);
    }

    return res;
};

module.exports = { finalPrices };

console.log(finalPrices([8, 4, 6, 2, 3]));
