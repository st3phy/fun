/**
 * @param {string} num
 * @return {string}
 */
const removeTrailingZeroes = num => {
    let i;
    for (i = num.length - 1; i >= 0; i--) {
        if (num[i] !== "0") break;
    }

    return num.slice(0, i + 1);
};

module.exports = { removeTrailingZeroes };

console.log(removeTrailingZeroes("51230100"));
