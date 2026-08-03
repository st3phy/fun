/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
const fairCandySwap = (aliceSizes, bobSizes) => {
    // How many candies Alice and Bob each have
    const aliceTotal = aliceSizes.reduce((a, b) => a + b, 0);
    const bobTotal = bobSizes.reduce((a, b) => a + b, 0);

    // we are lookin for: aliceTotal - aliceBox + bobBox === bobTotal - bobBox + aliceBox
    // so bobBox = aliceBox + (bobTotal - aliceTotal) / 2
    const bobBoxes = new Set(bobSizes); // use a Set() to make lookup O(1);
    for (const aliceBox of aliceSizes) {
        const missing = aliceBox + (bobTotal - aliceTotal) / 2;
        if (bobBoxes.has(missing)) {
            return [aliceBox, missing];
        }
    }
};

module.exports = { fairCandySwap };

console.log(fairCandySwap([1, 2, 3], [4, 6, 2])); //[1,4]
