/**
 * @param {string} arriveAlice
 * @param {string} leaveAlice
 * @param {string} arriveBob
 * @param {string} leaveBob
 * @return {number}
 */
const countDaysTogether = (arriveAlice, leaveAlice, arriveBob, leaveBob) => {
    const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const prefixSum = [0];

    // Sum of days of current month + days of all previous months
    for (let i = 0; i < days.length; i++) {
        prefixSum[i + 1] = prefixSum[i] + days[i];
    }

    const dayOfYear = date => {
        const month = Number(date[0] + date[1]);
        const day = Number(date[3] + date[4]);
        return prefixSum[month - 1] + day;
    };

    const dayArriveAlice = dayOfYear(arriveAlice);
    const dayArriveBob = dayOfYear(arriveBob);
    const dayLeaveAlice = dayOfYear(leaveAlice);
    const dayLeaveBob = dayOfYear(leaveBob);

    return Math.max(0, Math.min(dayLeaveAlice, dayLeaveBob) - Math.max(dayArriveAlice, dayArriveBob) + 1);
};

module.exports = { countDaysTogether };

console.log(countDaysTogether("08-15", "08-18", "08-16", "08-19"));
