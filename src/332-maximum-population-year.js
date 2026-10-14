/**
 * @param {number[][]} logs
 * @returns {number}
 */
const maximumPopulation = logs => {
    const freq = new Array(101).fill(0);

    // Record each year the population increases or decreases
    for (const [birth, death] of logs) {
        freq[birth - 1950]++;
        freq[death - 1950]--;
    }

    let max = 0;
    let popSum = 0;
    let year;

    for (let i = 0; i < 101; i++) {
        // Keep trach of how many people are alive this year
        popSum += freq[i];

        if (popSum > max) {
            max = popSum;
            year = i + 1950;
        }
    }

    return year;
};

module.exports = { maximumPopulation };

console.log(
    maximumPopulation([
        [1950, 1961],
        [1960, 1971],
        [1970, 1981]
    ])
);
