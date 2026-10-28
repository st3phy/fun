/**
 * @param {number[]} amount
 * @return {number}
 */
const fillCups = amount => {
    // We need at least max(amount) seconds because we can only fill one cup of each type per second
    const max = Math.max(...amount);

    // We need at least Math.ceil(sum of amounts / 2) because we can only fill two cups of different types per second
    const sum = amount[0] + amount[1] + amount[2];

    // Therefore, the max time is the maximum of the two values
    return Math.max(max, Math.ceil(sum / 2));
};

module.exports = { fillCups };

console.log(fillCups([0, 2, 2]));
