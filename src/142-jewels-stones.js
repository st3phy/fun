/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
const numJewelsInStones = (jewels, stones) => {
    // Transform the jewels to a set for easier look-up
    const set = new Set(jewels);
    let count = 0;

    for (const stone of stones) {
        if (set.has(stone)) {
            count++;
        }
    }

    return count;
};

module.exports = { numJewelsInStones };

console.log(numJewelsInStones("aA", "aAAbbbb"));
