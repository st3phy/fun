/**
 * @param {number[]} tickets
 * @param {number} k
 * @returns {number}
 */
const timeRequiredToBuy = (tickets, k) => {
    const n = tickets.length;

    // Maximum time - assuming no person leaves the line
    // k + 1 means the second it takes for the kth person to but his first ticket and go to the back of the line
    // Once the kth person is at the back of the line, it takes him n seconds to buy each of the tickets he has left (tickets[k] - 1)
    const max = k + 1 + (tickets[k] - 1) * n;

    // Remove time for every person that might have left the line
    let left = 0;
    for (let i = 0; i < n; i++) {
        // If the current person has less tickets to buy than the kth person
        if (tickets[i] < tickets[k]) {
            // If he start in front of the kth person
            if (i < k) {
                // Then he only used tickets[k] - tickets[i] seconds that we calculated earlier
                left += tickets[k] - tickets[i];
            } else if (i > k) {
                left += tickets[k] - tickets[i] - 1;
            }
        }
    }

    return max - left;
};

module.exports = { timeRequiredToBuy };

console.log(timeRequiredToBuy([5, 1, 1, 1], 0));
