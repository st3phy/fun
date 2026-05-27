/**
 * @param {number} num
 * @return {number}
 */
const addDigits = num => {
    // As long as the number has more than one digit
    while (num > 9) {
        // Calculate sum of digits
        let res = 0;
        while (num > 0) {
            res += num % 10;
            num = Math.floor(num / 10);
        }

        // The new number is the sum of digits
        num = res;
    }

    return num;
};

module.exports = { addDigits };

console.log(addDigits(38));
