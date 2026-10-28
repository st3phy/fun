/**
 * @param {number[]} ranks
 * @param {character[]} suits
 * @return {string}
 */
const bestHand = (ranks, suits) => {
    const set1 = new Set(suits);
    if (set1.size === 1) return "Flush";

    const freq = new Array(13).fill(0);

    let pair = false;
    for (const n of ranks) {
        freq[n - 1]++;
        if (freq[n - 1] === 3) return "Three of a Kind";
        if (freq[n - 1] === 2) pair = true;
    }

    return pair ? "Pair" : "High Card";
};

module.exports = { bestHand };

console.log(bestHand([2, 10, 7, 10, 7], ["b", "a", "a", "a", "a"]));
