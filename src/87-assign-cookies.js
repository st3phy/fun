/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
const findContentChildren = (g, s) => {
    // Sort arrays in ascending order
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);

    // Set pointers for the children and cookies
    let i = 0;
    let j = 0;

    // While we still have cookies or children
    while (i < s.length && j < g.length) {
        // If current cookies satisfies greed of current child
        if (s[i] >= g[j]) {
            j++;
        }
        i++;
    }

    return j;
};

module.exports = { findContentChildren };

console.log(findContentChildren([1, 3, 4, 6], [1, 5, 6]));
