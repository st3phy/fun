/**
 * @param {string} text
 * @returns {number}
 */
const maxNumberOfBalloons = text => {
    const letters = new Set(["b", "a", "l", "o", "n"]);
    const map = new Map();

    // Count each character of the word "balloon" in provided text
    for (const char of text) {
        if (letters.has(char)) {
            map.set(char, (map.get(char) || 0) + 1);
        }
    }

    // The maximum number of balloons is the smalles number of times one of the chars appears
    const res = Math.min(
        map.get("b") || 0,
        map.get("a") || 0,
        Math.floor((map.get("l") || 0) / 2),
        Math.floor((map.get("o") || 0) / 2),
        map.get("n") || 0
    );

    return res;
};

module.exports = { maxNumberOfBalloons };

console.log(maxNumberOfBalloons("loonbalxballpoon"));
