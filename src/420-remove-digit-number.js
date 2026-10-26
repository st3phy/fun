/**
 * @param {string} num
 * @param {character} digit
 * @return {string}
 */
const removeDigit = (num, digit) => {
    const n = num.length;
    let index = 0;

    // We remove the first occurrence of digit that has a bigger digit after it
    //  or, if none do, we remove the last occurrence of digit
    for (let i = 0; i < n; i++) {
        if (num[i] !== digit) continue;

        index = i;

        if (i + 1 < n && num[i + 1] > num[i]) {
            break;
        }
    }

    return num.slice(0, index) + num.slice(index + 1);
};

module.exports = { removeDigit };

console.log(removeDigit("123", "3"));
