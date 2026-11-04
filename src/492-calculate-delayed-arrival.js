/**
 * @param {number} arrivalTime
 * @param {number} delayedTime
 * @returns {number}
 */
const findDelayedArrivalTime = (arrivalTime, delayedTime) => {
    return (arrivalTime + delayedTime) % 24;
};

module.exports = { findDelayedArrivalTime };

console.log(findDelayedArrivalTime(13, 12));
