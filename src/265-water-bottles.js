/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @returns {number}
 */
const numWaterBottles = (numBottles, numExchange) => {
    let drink = 0;

    while (numBottles >= numExchange) {
        const exchanged = Math.floor(numBottles / numExchange);
        const notExchanged = numBottles % numExchange;

        // Drink the current number of bottles minus the bottles that cannot be exchanged
        drink += numBottles - notExchanged;

        // The new number of bottles is the number that we receive in exchange for our empty bottles plus the ones that were not exchanged
        numBottles = exchanged + notExchanged;
    }

    return drink + numBottles;
};

module.exports = { numWaterBottles };

console.log(numWaterBottles(15, 4));
