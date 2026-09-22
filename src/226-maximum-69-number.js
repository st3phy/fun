/**
 * @param {number} num
 * @returns {number}
 */
const maximum69Number = num => {
    let res = [];

    // Add digits to an array, starting with last digit
    while (num > 0) {
        const digit = num % 10;
        num = Math.floor(num / 10);
        res.push(digit);
    }

    // Pass through array, the last "6" is the more significant "6" of num
    let changed = false;
    let bigNum = 0;
    for (let i = res.length - 1; i >= 0; i--) {
        if (res[i] === 6 && !changed) {
            res[i] = 9;
            changed = true;
        }
        // Recompute num
        bigNum = bigNum * 10 + res[i];
    }

    return bigNum;
};

module.exports = { maximum69Number };

console.log(maximum69Number(9696));
