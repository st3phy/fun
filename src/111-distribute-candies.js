/**
 * @param {number[]} candyType
 * @return {number}
 */
const distributeCandies = candyType => {
    // Save the different types of candies
    const candies = new Set(candyType);

    // We want n/2 candies, but if that is smaller than the number of types, than we want number of types of candy
    return Math.min(candies.size, candyType.length / 2);
};

module.exports = { distributeCandies };

console.log(distributeCandies([6, 6, 6, 6]));
