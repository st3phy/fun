/**
 * @param {number} num
 * @returns {number}
 */
const minMaxDifference = num => {
    // Digits to replace: first digit smaller than 9 - replace with 9; first letter - replace with 0
    let temp = num;
    let toMax = -1;
    let toMin;
    while (temp > 0) {
        const digit = temp % 10;
        if (digit < 9) {
            toMax = digit;
        }
        if (temp <= 9) {
            toMin = temp;
        }
        temp = Math.floor(temp / 10);
    }

    if (toMax === -1) return num;

    let multiplier = 1;
    let res = 0;
    // Replace first digit with 9 and 0 respectively
    while (num > 0) {
        let digit = num % 10;
        if (digit === toMax && digit === toMin) {
            digit = 9;
        } else if (digit === toMax) {
            digit = 9 - digit;
        } else if (digit === toMin) {
            digit = digit;
        } else {
            digit = 0;
        }
        res += digit * multiplier;
        multiplier *= 10;
        num = Math.floor(num / 10);
    }

    return res;
};

module.exports = { minMaxDifference };

console.log(minMaxDifference(456));
