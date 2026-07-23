/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
const rotateString = (s, goal) => {
    // for (let i = 0; i < s.length; i++) {
    // Compute every possible substring and check with the goal
    //     if (s.substring(i) + s.substring(0, i) === goal) {
    //         return true;
    //     }
    // }

    // return false;

    // Optimal solution - Time O(n)
    // Every possible rotation of s is a substring of s + s
    return s.length === goal.length && (s + s).includes(goal);
};

module.exports = { rotateString };

console.log(rotateString("aaab", "abaa"));
