/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @returns {number}
 */
const busyStudent = (startTime, endTime, queryTime) => {
    let count = 0;
    for (let i = 0; i < startTime.length; i++) {
        if (startTime[i] <= queryTime && endTime[i] >= queryTime) {
            count++;
        }
    }

    return count;
};

module.exports = { busyStudent };

console.log(busyStudent([1, 2, 3], [3, 2, 7], 4));
