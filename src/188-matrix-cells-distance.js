/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rCenter
 * @param {number} cCenter
 * @return {number[][]}
 */
const allCellsDistOrder = (rows, cols, rCenter, cCenter) => {
    const res = new Set([`${rCenter},${cCenter}`]);
    const queue = [[rCenter, cCenter]];

    const move = function ([r, c]) {
        // Push top, left, right, bottom to stack if they were not previously visited
        if (r - 1 >= 0 && !res.has(`${r - 1},${c}`)) {
            // "Visit" current element by adding it to results set
            res.add(`${r - 1},${c}`);
            queue.push([r - 1, c]);
        }
        if (c - 1 >= 0 && !res.has(`${r},${c - 1}`)) {
            res.add(`${r},${c - 1}`);
            queue.push([r, c - 1]);
        }
        if (c + 1 < cols && !res.has(`${r},${c + 1}`)) {
            res.add(`${r},${c + 1}`);
            queue.push([r, c + 1]);
        }
        if (r + 1 < rows && !res.has(`${r + 1},${c}`)) {
            res.add(`${r + 1},${c}`);
            queue.push([r + 1, c]);
        }
    };

    let i = 0;
    while (i < queue.length) {
        move(queue[i++]);
    }

    return [...res].map(a => a.split(",").map(Number));
};

module.exports = { allCellsDistOrder };

console.log(allCellsDistOrder(2, 2, 0, 1));
