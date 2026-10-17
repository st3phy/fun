/**
 * @param {number[]} nums
 * @returns {number}
 */
const minSwaps = nums => {
    // Function to sum digits of a number
    const arr = nums.map((num, index) => {
        let sum = 0;
        let n = num;

        while (n > 0) {
            sum += n % 10;
            n = Math.floor(n / 10);
        }
        return { num, sum, index };
    });

    // Sort nums by digit sum, ascending, smaller first if sum is equal
    arr.sort((a, b) => {
        if (a.sum === b.sum) return a.num - b.num;
        return a.sum - b.sum;
    });

    // Map original indices for nums
    const indices = arr.map(n => n.index);

    let count = 0;
    // Swap positions until the indices are sorted
    let i = 0;
    while (i < indices.length) {
        if (indices[i] !== i) {
            count++;
            const target = indices[i];
            [indices[i], indices[target]] = [indices[target], indices[i]];
        } else {
            i++;
        }
    }

    return count;
};

module.exports = { minSwaps };

console.log(minSwaps([40, 50, 30, 20]));
