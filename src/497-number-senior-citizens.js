/**
 * @param {string[]} details
 * @returns {number}
 */
const countSeniors = details => {
    let count = 0;

    for (const d of details) {
        const age = d.slice(11, 13);
        if (age > 60) count++;
    }

    return count;
};

module.exports = { countSeniors };

console.log(countSeniors(["1313579440F2036", "2921522980M5644"]));
