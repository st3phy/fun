/**
 * @param {number} low
 * @param {number} high
 * @returns {number}
 */
const countSymmetricIntegers = (low, high) => {
    const isSymmetric = num => {
        const str = String(num);
        const n = str.length;

        if (n % 2 !== 0) return false;

        let left = 0;
        let right = 0;
        for (let i = 0; i < n / 2; i++) {
            left += Number(str[i]);
            right += Number(str[n - 1 - i]);
        }
        return left === right;
    };

    let count = 0;
    for (let i = low; i <= high; i++) {
        if (isSymmetric(i)) count++;
    }

    return count;
};

module.exports = { countSymmetricIntegers };

console.log(countSymmetricIntegers(1200, 1230));
