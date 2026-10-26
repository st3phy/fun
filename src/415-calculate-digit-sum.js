/**
 * @param {string} s
 * @param {number} k
 * @returns {string}
 */
const digitSum = (s, k) => {
    while (s.length > k) {
        const groups = [];
        const n = s.length;

        // Get digits k at a time
        for (let i = 0; i < n; i += k) {
            let num = 0;
            // Iterate over current k digits and add digits
            for (let j = i; j < Math.min(i + k, n); j++) {
                num += Number(s[j]);
            }
            groups.push(num);
        }

        s = groups.join("");
    }

    return s;
};

module.exports = { digitSum };

console.log(digitSum("11111222223", 3));
