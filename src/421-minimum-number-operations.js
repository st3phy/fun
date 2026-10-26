/**
 * @param {string} current
 * @param {string} correct
 * @returns {number}
 */
const convertTime = (current, correct) => {
    // Transform both times in minutes
    const currHour = Number(current[0] + current[1]) * 60 + Number(current[3] + current[4]);
    const corrHour = Number(correct[0] + correct[1]) * 60 + Number(correct[3] + correct[4]);
    let diff = corrHour - currHour;

    let count = 0;
    for (const i of [60, 15, 5, 1]) {
        count += Math.floor(diff / i);
        diff = diff % i;
    }

    return count;
};

module.exports = { convertTime };

console.log(convertTime("02:30", "04:35"));
