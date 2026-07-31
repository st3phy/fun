/**
 * @param {string} s
 * @return {number[][]}
 */
const largeGroupPositions = s => {
    const intervals = [];

    // Set a pointer to the current character's position
    let currIndex = 0;

    for (let i = 1; i <= s.length; i++) {
        if (s[i] !== s[currIndex]) {
            if (i - currIndex >= 3) {
                intervals.push([currIndex, i - 1]);
            }
            currIndex = i;
        }
    }

    return intervals;
};

module.exports = { largeGroupPositions };

console.log(largeGroupPositions("aaa"));
