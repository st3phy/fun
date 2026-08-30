/**
 * @param {string} s
 * @return {string}
 */
const removeOutermostParentheses = s => {
    let count = 0;
    // The start index of a new valid parentheses substring
    let start = 0;
    const res = [];

    // Starting from the second parentheses
    for (let i = 0; i < s.length; i++) {
        // If we find a closing parentheses
        if (s[i] === ")") {
            // Count the closing parenthese
            count--;
            // If we just finished a valid parentheses substring (equal number of "(" and ")" )
            if (count === 0) {
                // Re-start count
                count = 0;
                // Save start index of the next valid parentheses substring
                start = i + 1;
                continue;
            }
        } else {
            // Count the open parenthese
            count++;
        }

        // Add parentheses to res if it is not the first one of a new valid parentheses substring
        if (start !== i) {
            res.push(s[i]);
        }
    }

    return res.join("");
};

module.exports = { removeOutermostParentheses };

console.log(removeOutermostParentheses("(()())(())(()(()))"));
