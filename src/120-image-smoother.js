/**
 * @param {number[][]} img
 * @return {number[][]}
 */
const imageSmoother = img => {
    const n = img.length;
    const m = img[0].length;

    // Create empty matrix of zeroes
    const smooth = Array.from({ length: n }, () => new Array(m).fill(0));

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            let sum = 0;
            let set = 0;

            // Calculate the 3x3 block
            for (let x = -1; x <= 1; x++) {
                for (let y = -1; y <= 1; y++) {
                    const left = x + i;
                    const top = y + j;
                    if (left >= 0 && top >= 0 && left < n && top < m) {
                        sum += img[left][top];
                        set++;
                    }
                }
            }
            smooth[i][j] = Math.floor(sum / set);
        }
    }

    return smooth;
};

module.exports = { imageSmoother };

console.log(
    imageSmoother([
        [100, 200, 100],
        [200, 50, 200],
        [100, 200, 100]
    ])
);
