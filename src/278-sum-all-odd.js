/**
 * @param {number[]} arr
 * @returns {number}
 */
const sumOddLengthSubarrays = arr => {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        // Take current value - an odd length sum-array of 1 element - and add it to the final sum
        let prevSum = arr[i];
        sum += prevSum;

        // Create all other sub-arrays by adding 2 element to previous ones
        for (j = i + 1; j < arr.length - 1; j += 2) {
            // Add current two elements to the previous sum - this is the sum of the current odd-length subarray
            prevSum += arr[j] + arr[j + 1];

            // Add the current subarray's sum to the final sum
            sum += prevSum;
        }
    }

    return sum;
};

module.exports = { sumOddLengthSubarrays };

console.log(sumOddLengthSubarrays([1, 4, 2, 5, 3]));
