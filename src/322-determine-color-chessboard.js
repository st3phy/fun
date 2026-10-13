/**
 * @param {string} coordinates
 * @returns {boolean}
 */
const squareIsWhite = coordinates => {
    const blackStart = new Set(["a", "c", "e", "g"]);

    // If a square starts with a,c,e,g then the odd numbered squares are black
    if (blackStart.has(coordinates[0])) {
        if (coordinates[1] % 2 === 1) return false;
        return true;
    }

    if (coordinates[1] % 2 === 0) return false;
    return true;
};

module.exports = { squareIsWhite };

console.log(squareIsWhite("c3"));
