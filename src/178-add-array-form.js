/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
const addToArrayForm = (num, k) => {
    let i = num.length - 1;
    let carry = 0;
    let res = [];

    // If we still have digit in num or in k
    while (k > 0 || i >= 0) {
        // Get the last digit from k and remove it
        const lastDigit = k % 10;
        k = Math.floor(k / 10);

        // Add the last digit from num (0 if none left) with the last digit from k and any leftover carrier
        const digitSum = (i >= 0 ? num[i] : 0) + lastDigit + carry;

        // Add the last digit of the previous sum to the results array
        res.push(digitSum % 10);

        // If the previous sum 10 or greater, carry the one
        carry = Math.floor(digitSum / 10);

        // Move num pointer to previous value
        i--;
    }

    // Add any leftover carrier
    if (carry) res.push(carry);

    return res.reverse();
};

module.exports = { addToArrayForm };

console.log(addToArrayForm([2, 1, 5], 806));
