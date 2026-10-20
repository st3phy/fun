/**
 * @param {number[][]} buckets
 * @param {number} income
 * @returns {number}
 */
const calculateTax = (buckets, income) => {
    let tax = 0;
    let prevUpper = 0;

    for (const [upper, percent] of buckets) {
        const money = Math.min(upper - prevUpper, income);
        tax += (money * percent) / 100;
        income -= money;
        prevUpper = upper;
        if (income === 0) break;
    }

    return tax;
};

module.exports = { calculateTax };

console.log(
    calculateTax(
        [
            [3, 50],
            [7, 10],
            [12, 25]
        ],
        10
    )
);
