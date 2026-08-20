/**
 * @param {number[]} arr
 * @return {boolean}
 */
const canThreePartsEqualSum = arr => {
    // Get total sum of arr
    const sum = arr.reduce((res, num) => res + num, 0);

    // Desired length of each partition is sum / 3
    let partitionSum = 0;
    let count = 0;
    for (const num of arr) {
        // Add current number to current partition sum
        partitionSum += num;

        // If we found a partition with the desired sum
        if (partitionSum === sum / 3) {
            // Increment the number of times we got to the desired sum
            count++;
            // Reset the sum for next partition
            partitionSum = 0;

            // If we found 3 partitions already
            if (count === 3) {
                return true;
            }
        }
    }

    return false;
};

module.exports = { canThreePartsEqualSum };

console.log(canThreePartsEqualSum([0, 0, 0, 0]));
