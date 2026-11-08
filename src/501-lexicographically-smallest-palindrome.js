/**
 * @param {string} s
 * @returns {string}
 */
const makeSmallestPalindrome = s => {
    const res = s.split("");
    const n = res.length;
    let l = 0;
    let r = n - 1;

    while (l < r) {
        if (res[l] !== res[r]) {
            const replace = res[l] < res[r] ? res[l] : res[r];
            res[l] = replace;
            res[r] = replace;
        }
        l++;
        r--;
    }

    return res.join("");
};

module.exports = { makeSmallestPalindrome };

console.log(makeSmallestPalindrome("seven"));
