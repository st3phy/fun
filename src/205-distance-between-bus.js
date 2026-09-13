/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @returns {number}
 */
const distanceBetweenBusStops = (distance, start, destination) => {
    // Make sure the start is always smaller than the destination
    if (start > destination) {
        [start, destination] = [destination, start];
    }

    // Calculate distance from start to destination, clockwise
    let startToDest = 0;
    for (let i = start; i < destination; i++) {
        startToDest += distance[i];
    }

    // Calculate distance from destination to start, still clockwise
    let destToStart = 0;
    for (let i = destination; i < distance.length; i++) {
        destToStart += distance[i];
    }
    // We are at the of the loop, but we did not reach the start position of the bus
    for (let i = 0; i < start; i++) {
        destToStart += distance[i];
    }

    return Math.min(startToDest, destToStart);
};

module.exports = { distanceBetweenBusStops };

console.log(distanceBetweenBusStops([7, 10, 1, 12, 11, 14, 5, 0], 7, 2));
