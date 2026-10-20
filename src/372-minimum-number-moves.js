/**
 * @param {number[]} seats
 * @param {number[]} students
 * @returns {number}
 */
const minMovesToSeat = (seats, students) => {
    const max = Math.max(...seats, ...students);

    // Use an array as a map, storing the number of each occurrence of each element at the corresponding index in array
    const diff = new Array(max).fill(0);

    // We will store both arrays at once: add +1 for every seat and substarct -1 from every student
    for (let i = 0; i < seats.length; i++) {
        diff[seats[i] - 1]++;
        diff[students[i] - 1]--;
    }

    let moves = 0;
    let unmatched = 0; // number of unseated students or empty chairs
    for (const d of diff) {
        moves = moves + Math.abs(unmatched);
        unmatched = unmatched + d;
    }

    return moves;
};

module.exports = { minMovesToSeat };

console.log(minMovesToSeat([2, 2, 6, 6], [1, 3, 2, 6]));
