/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
const findJudge = (n, trust) => {
    const scores = new Array(n + 1).fill(0);

    // Every person that trusts somebody loses a point
    // and every person that is trusted gains a point
    for (const [person, trustee] of trust) {
        scores[person]--;
        scores[trustee]++;
    }

    // In the end, the person with exactly n-1 points wins
    for (let person = 1; person <= n; person++) {
        if (scores[person] === n - 1) {
            return person;
        }
    }

    return -1;
};

module.exports = { findJudge };

console.log(
    findJudge(3, [
        [1, 3],
        [2, 3]
    ])
);
