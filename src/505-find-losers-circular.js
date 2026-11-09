/**
 * @param {number} n
 * @param {number} k
 * @returns {number[]}
 */
const circularGameLosers = (n, k) => {
    const visited = new Array(n + 1).fill(false);
    const losers = [];

    let i = 1;
    let step = 1;
    while (!visited[i]) {
        visited[i] = true;
        // Pass the ball
        i = (i + step * k) % n || n;
        step++;
    }

    for (let i = 1; i <= n; i++) {
        if (!visited[i]) losers.push(i);
    }

    return losers;
};

module.exports = { circularGameLosers };

console.log(circularGameLosers(2, 1));
