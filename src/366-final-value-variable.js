/**
 * @param {string[]} operations
 * @returns {number}
 */
const finalValueAfterOperations = operations => {
    let x = 0;
    for (const o of operations) {
        if (o[0] === "-" || o[2] === "-") {
            x--;
            continue;
        }
        x++;
    }

    return x;
};

module.exports = { finalValueAfterOperations };

console.log(finalValueAfterOperations(["X++", "++X", "--X", "X--"]));
