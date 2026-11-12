/**
 * @param {number[]} nums
 * @returns {number}
 */
const countBeautifulPairs = nums => {
    const gcd = (a, b) => {
        while (b !== 0) [a, b] = [b, a % b];
        return a;
    };

    let pairs = 0;

    // for (let i = 0; i < nums.length - 1; i++) {
    //     const first = Number(String(nums[i])[0]);
    //     for (let j = i + 1; j < nums.length; j++) {
    //         if (gcd(first, nums[j] % 10) === 1) pairs++;
    //     }
    // }

    // return pairs;

    const seen = new Array(10).fill(0);

    for (let i = 0; i < nums.length; i++) {
        const last = nums[i] % 10;

        // For current last digit, check how many first digits that we already saw meet the gcd(first, last) = 1
        for (let d = 1; d <= 9; d++) {
            if (seen[d] && gcd(d, last) === 1) pairs += seen[d];
        }

        // Count current first digit as seen
        seen[Number(String(nums[i])[0])]++;
    }

    return pairs;
};

module.exports = { countBeautifulPairs };

console.log(countBeautifulPairs([11, 21, 12]));
