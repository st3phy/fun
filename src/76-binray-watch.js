/**
 * @param {number} turnedOn
 * @return {string[]}
 */
const readBinaryWatch = turnedOn => {
    // Create hours array as number of bits for each hour from 0-11
    const hours = new Array(12).fill(0);

    // If i is even, the number of bits is the number of bits of i/2
    // If it's odd, the number of bits is the number of bits of Math.floor(i/2) + 1
    for (let i = 1; i <= 11; i++) {
        hours[i] = i % 2 === 0 ? hours[i >> 1] : hours[i >> 1] + 1;
    }

    // Do the same for the minutes array
    const minutes = new Array(60).fill(0);
    for (let i = 1; i <= 59; i++) {
        minutes[i] = i % 2 === 0 ? minutes[i >> 1] : minutes[i >> 1] + 1;
    }

    // Find every possible hour with every possible minute within provided turnedOn bits
    const possibleHours = [];
    const possibleMinutes = [];
    for (let turnedOnHours = 0; turnedOnHours <= turnedOn; turnedOnHours++) {
        // Get all hours for current turnedOn value -> 0 to turnedOn
        possibleHours.push(hours.map((val, i) => (val === turnedOnHours ? i : -1)).filter(i => i !== -1));

        // Get all possible minutes for the remaining turnedOn bits and add them to each previously found hour
        possibleMinutes.push(
            minutes.map((val, i) => (val === turnedOn - turnedOnHours ? i : -1)).filter(i => i !== -1)
        );
    }
    console.log(possibleHours, possibleMinutes);

    // Create results array using the currHour and currMinute arrays
    const res = [];
    for (let i = 0; i < possibleHours.length; i++) {
        for (const hour of possibleHours[i]) {
            for (const minute of possibleMinutes[i]) {
                res.push(`${hour}:${String(minute).padStart(2, "0")}`);
            }
        }
    }

    return res;
};

module.exports = { readBinaryWatch };

console.log(readBinaryWatch(1));
