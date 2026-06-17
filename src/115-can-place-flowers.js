/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
const canPlaceFlowers = (flowerbed, n) => {
    for (let i = 0; i < flowerbed.length; i++) {
        // If the previous plot, current plot and next plont are empty (0 or undefined)
        if (!flowerbed[i - 1] && !flowerbed[i] && !flowerbed[i + 1]) {
            // Plant the flower and reduce number of flowers left to plant
            flowerbed[i] = 1;
            if (n === 0) break;
            n--;
        }
    }
    console.log(flowerbed);
    // All flowers were planted
    return n === 0;
};

module.exports = { canPlaceFlowers };

console.log(canPlaceFlowers([1, 0, 0, 0, 0, 1], 2));
