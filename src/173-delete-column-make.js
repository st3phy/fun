/**
 * @param {string[]} strs
 * @return {number}
 */
const minDeletionSize = strs => {
    let count = 0;

    // Go through each column
    for (let i = 0; i < strs[0].length; i++) {
        // Compare adjacent chars in the current column
        for (let j = 0; j < strs.length - 1; j++) {
            // If the current char is bigger than the one below it, the column is not sorted
            if (strs[j][i] > strs[j + 1][i]) {
                count++;
                break;
            }
        }
    }

    return count;
};

module.exports = { minDeletionSize };

console.log(minDeletionSize(["cba", "daf", "ghi"]));
