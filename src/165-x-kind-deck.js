/**
 * @param {number[deck]}
 * @return {boolean}
 */
const hasGroupsSizeX = deck => {
    // const deckSize = deck.length;

    // // Count how many times each number appears
    // const sizes = new Map();
    // for (const card of deck) {
    //     sizes.set(card, (sizes.get(card) || 0) + 1);
    // }

    // // Go through every possible group size
    // for (let i = 2; i <= Math.floor(deckSize / sizes.size); i++) {
    //     let ok = true;

    //     // Check every size to see if it is divisible by the contender group size
    //     for (const size of sizes.values()) {
    //         if (size % i !== 0) {
    //             ok = false;
    //             break;
    //         }
    //     }

    //     if (ok) return true;
    // }

    // return false;

    // Using greatest common divisor

    // Euclidean algorithm:
    // the gcd of 2 numbers doesn't change when you replace the larger number with its remainder when divided by the smaller number
    // gcd(a, b) = gcd(b, a % b)
    // ex: bigger = n*smaller + remainder -> evert common divisor of bigger and smaller, also divides the remainder
    const gcd = (big, small) => {
        if (small === 0) return big;
        return gcd(small, big % small);
    };

    // Count how many times each number appears
    const sizes = new Map();
    for (const card of deck) {
        sizes.set(card, (sizes.get(card) || 0) + 1);
    }

    // Start with 0, because gcd(x, 0) = x
    let g = 0;

    for (const size of sizes.values()) {
        g = gcd(size, g);
    }

    // We found a gcd bigger than 1
    return g > 1;
};

module.exports = { hasGroupsSizeX };

console.log(hasGroupsSizeX([0, 0, 0, 0, 1, 1, 1, 2, 3, 4]));
