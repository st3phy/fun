/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @returns {number}
 */
const findTheDistanceValue = (arr1, arr2, d) => {
    let dist = 0;
    arr2.sort((a, b) => a - b);
    const min = 0;
    const max = arr2.length - 1;

    // If the closest element to arr1 from arr2 has |arr1[i]-arr2[j]| > d, all the other do as well

    for (let i = 0; i < arr1.length; i++) {
        let left = min;
        let right = max;
        while (left <= right) {
            const half = Math.floor((left + right) / 2);
            if (arr2[half] >= arr1[i]) {
                right = half - 1;
            } else {
                left = half + 1;
            }
        }

        // left is the first element bigger than arr1[i]
        // right is the first element smaller than arr1[i]
        const leftDiff = left <= max ? Math.abs(arr1[i] - arr2[left]) : Infinity;

        const rightDiff = right >= min ? Math.abs(arr1[i] - arr2[right]) : Infinity;

        if (leftDiff > d && rightDiff > d) {
            dist++;
        }
    }

    return dist;
};

module.exports = { findTheDistanceValue };

console.log(findTheDistanceValue([2, 1, 100, 3], [-5, -2, 10, -3, 7], 6));
