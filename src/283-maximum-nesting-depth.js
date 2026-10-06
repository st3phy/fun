/**
 * @param {string} s
 * @returns {number}
 */
const maxDepth = s => {
    let max = 0;
    let open = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            open++;

            // Save how many opened parantheses we have
            max = Math.max(open, max);
        } else if (s[i] === ")") {
            open--;
        }
    }

    return max;
};

module.exports = { maxDepth };

console.log(maxDepth("8*((1*(5+6))*(8/6))"));
