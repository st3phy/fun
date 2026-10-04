/**
 * @param {string[]} logs
 * @returns {number}
 */
const minOperations = logs => {
    let pos = 0;

    for (const log of logs) {
        if (log === "../") {
            if (pos > 0) {
                pos--;
            }
        } else if (log !== "./") {
            pos++;
        }
    }

    return pos;
};

module.exports = { minOperations };

console.log(minOperations(["./", "wz4/", "../", "mj2/", "../", "../", "ik0/", "il7/"]));
