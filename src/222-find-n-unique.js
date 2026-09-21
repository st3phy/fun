/**
 * @param {number} n
 * @returns {number[]}
 */
const sumZero = n => {
    const res = [];
    const start = Math.floor(n / 2);
    const isEven = n % 2 === 0;

    for (let i = -start; i <= start; i++) {
        if (i === 0 && isEven) continue;
        res.push(i);
    }

    return res;
};

module.exports = { sumZero };

console.log(sumZero(4));
