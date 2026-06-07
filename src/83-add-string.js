/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const addStrings = (num1, num2) => {
    let i = num1.length - 1;
    let j = num2.length - 1;
    let res = [];
    let carry = 0;

    // While we still have digits in one of the strings or we still have a carry
    while (i >= 0 || j >= 0 || carry) {
        // If we still have digits in num1, get current digit and move i to the left, otherwise set digit1 to 0
        const digit1 = i >= 0 ? Number(num1[i--]) : 0;
        // Same for digit2
        const digit2 = j >= 0 ? Number(num2[j--]) : 0;

        // Sum the current digits with any carry we might have
        const sum = digit1 + digit2 + carry;

        // Add remainder of sum results array
        res.push(sum % 10);

        // See if we have any carry left over
        carry = Math.floor(sum / 10);
    }

    return res.reverse().join("");
};

module.exports = { addStrings };

console.log(addStrings("456", "77"));
