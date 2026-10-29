/**
 * @param {number} n
 * @param {number[][]} logs
 * @return {number}
 */
const hardestWorker = (n, logs) => {
    let maxTime = logs[0][1];
    let index = logs[0][0];

    for (let i = 1; i < logs.length; i++) {
        const currTime = logs[i][1] - logs[i - 1][1];
        if (currTime > maxTime) {
            maxTime = currTime;
            index = logs[i][0];
        } else if (currTime === maxTime) {
            index = Math.min(index, logs[i][0]);
        }
    }

    return index;
};

module.exports = { hardestWorker };

console.log(
    hardestWorker(10, [
        [0, 3],
        [2, 5],
        [0, 9],
        [1, 15]
    ])
);
