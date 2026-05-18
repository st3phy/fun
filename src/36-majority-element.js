/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = nums => {
    // Optimal solution - Boyer-Moore Majority Voting algorithm for constant space complexity O(1)

    // The candidate for the majority element
    let candidate = null;

    // The candidate's advantage over other numbers
    let count = 0;

    for (let num of nums) {
        // If counter reaches 0, choose a new candidate
        if (count === 0) {
            candidate = num;
        }

        // If current number matches candidate, increment counter
        if (num === candidate) {
            count++;
        } else {
            // Otherwise, one of the candidate appearances gets canceled
            count--;
        }
    }

    // Since we are guaranteed a majority element, return candidate - the only number that survived
    return candidate;
};

module.exports = { majorityElement };

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
