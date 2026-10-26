/**
 * @param {string} num
 * @returns {string}
 */
const largestGoodInteger = num => {
    let res = "";

    for (let i = 2; i < num.length; i++) {
        if (num[i] === num[i - 1] && num[i] === num[i - 2]) {
            const candidate = num[i].repeat(3);
            if (candidate > res) res = candidate;
        }
    }

    return res;
};

module.exports = { largestGoodInteger };

console.log(largestGoodInteger("3450009345"));
