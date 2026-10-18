/**
 * @param {string} word
 * @returns {number}
 */
const minTimeToType = word => {
    let count = word.length;

    for (let i = 0; i < word.length; i++) {
        // Clockwise move:
        const cw = Math.abs((word[i - 1] || "a").charCodeAt(0) - word[i].charCodeAt(0));

        // Counterclockwise move:
        const ccw = Math.abs(cw - 26);

        count += Math.min(cw, ccw);
    }

    return count;
};

module.exports = { minTimeToType };

console.log(minTimeToType("zjpc"));
