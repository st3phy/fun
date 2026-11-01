/**
 * @param {number} num
 * @return {number}
 */
const countDigits = num => {
    let count = 0;

    let n = num;
    while (n > 0) {
        if (num % (n % 10) === 0) count++;
        n = Math.floor(n / 10);
    }

    return count;
};

module.exports = { countDigits };

console.log(countDigits(7));
