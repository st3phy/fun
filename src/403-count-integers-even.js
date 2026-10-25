/**
 * @param {number} num
 * @returns {number}
 */
const countEven = num => {
    const sumDigits = [...num.toString()].reduce((acc, val) => acc + Number(val), 0);

    console.log(sumDigits);

    return sumDigits % 2 ? Math.floor((num - 1) / 2) : Math.floor(num / 2);
};

module.exports = { countEven };

console.log(countEven(414));
