/**
 * @param {number} num
 * @returns {number}
 */
const splitNum = num => {
    const digits = num.toString().split("").sort();

    let num1 = [];
    let num2 = [];

    for (let i = 0; i < digits.length; i += 2) {
        num1.push(digits[i]);
        if (i + 1 < digits.length) num2.push(digits[i + 1]);
    }

    return Number(num1.join("")) + Number(num2.join(""));
};

module.exports = { splitNum };

console.log(splitNum(687));
