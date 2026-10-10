/**
 * @param {number} n
 * @returns {number}
 */
const totalMoney = n => {
    // Number of full weeks
    const weeks = Math.floor(n / 7);

    // First week we add 28, then each week we add 7 + the week before
    // So total = weeks * 28 + 7 * (weeks * (weeks-1) / 2)
    let total = 28 * weeks + (7 * (weeks * (weeks - 1))) / 2;

    // Add remaining days for last week
    const monday = weeks + 1;
    for (let i = 0; i < n - weeks * 7; i++) {
        total += monday + i;
    }

    return total;
};

module.exports = { totalMoney };

console.log(totalMoney(20));
