/**
 * @param {number[]} prices
 * @param {number} money
 * @returns {number}
 */
const buyChoco = (prices, money) => {
    let min = 101;
    let secondMin = 101;

    for (const price of prices) {
        if (price < min) {
            secondMin = min;
            min = price;
        } else if (price < secondMin) {
            secondMin = price;
        }
    }

    const res = money - min - secondMin;

    return res < 0 ? money : res;
};

module.exports = { buyChoco };

console.log(buyChoco([1, 2, 2], 3));
