/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @returns {number}
 */
const countMatches = (items, ruleKey, ruleValue) => {
    const properties = { type: 0, color: 1, name: 2 };
    let count = 0;

    for (let i = 0; i < items.length; i++) {
        if (items[i][properties[ruleKey]] === ruleValue) {
            count++;
        }
    }

    return count;
};

module.exports = { countMatches };

console.log(
    countMatches(
        [
            ["phone", "blue", "pixel"],
            ["computer", "silver", "lenovo"],
            ["phone", "gold", "iphone"]
        ],
        "color",
        "silver"
    )
);
