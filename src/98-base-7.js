/**
 * @param {number} num
 * @return {string}
 */
const convertToBase7 = num => {
    if (num === 0) return "0";

    let sign = num < 0 ? "-" : "";
    let res = "";

    num *= num < 0 ? -1 : 1;

    while (num) {
        res = (num % 7) + res;
        num = Math.floor(num / 7);
    }

    return sign + res;
};

module.exports = { convertToBase7 };

console.log(convertToBase7(-7));
