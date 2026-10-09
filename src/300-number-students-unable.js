/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 */
const countStudents = (students, sandwiches) => {
    // Count number of 0s and 1s in students
    let zeroes = 0;
    let ones = 0;
    for (const s of students) {
        if (s === 0) {
            zeroes++;
        } else {
            ones++;
        }
    }

    // Get sandwiches until we get to a sandwich we don't have an equivalent student for
    for (const s of sandwiches) {
        if (s === 0) {
            // If we have no more students that want a 0 sandwich, noone can take any more sandwiches
            if (zeroes === 0) break;
            zeroes--;
        } else {
            if (ones === 0) break;
            ones--;
        }
    }

    return ones + zeroes;
};

module.exports = { countStudents };

console.log(countStudents([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1]));
