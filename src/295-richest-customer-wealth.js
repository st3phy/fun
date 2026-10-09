/**
 * @param {number[][]} accounts
 * @returns {number}
 */
const maximumWealth = account => {
    let max = 0;

    for (let i = 0; i < account.length; i++) {
        let wealth = 0;
        for (let j = 0; j < account[i].length; j++) {
            wealth += account[i][j];
        }
        max = Math.max(max, wealth);
    }

    return max;
};

module.exports = { maximumWealth };

console.log(
    maximumWealth([
        [2, 8, 7],
        [7, 1, 3],
        [1, 9, 5]
    ])
);
