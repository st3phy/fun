/**
 * @param {string[]} strs
 * @returns {number}
 */
const maximumValue = strs => {
    let max = 0;

    for (const str of strs) {
        let len = str.length;
        const num = Number(str);
        if (str == num) len = num;
        max = Math.max(max, len);
    }

    return max;
};

module.exports = { maximumValue };

console.log(maximumValue(["1a"]));
