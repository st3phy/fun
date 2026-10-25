/**
 * @param {string} s
 * @returns {string[]}
 */
const cellsInRange = s => {
    const r1 = s[0].charCodeAt(0);
    const r2 = s[3].charCodeAt(0);
    const c1 = s[1];
    const c2 = s[4];
    const cells = [];

    for (let i = r1; i <= r2; i++) {
        for (let j = c1; j <= c2; j++) {
            const cell = String.fromCharCode(i) + j;
            cells.push(cell);
        }
    }

    return cells;
};

module.exports = { cellsInRange };

console.log(cellsInRange("B2:L2"));
