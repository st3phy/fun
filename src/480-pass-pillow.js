/**
 * @param {number} n
 * @param {number} times
 * @returns {number}
 */
const passThePillow = (n, time) => {
    const rounds = Math.floor(time / (n - 1));
    const left = time % (n - 1);

    // If we managed an odd number of rounds, we are returning from the last person
    if (rounds % 2) {
        return n - left;
    }
    return left + 1;
};

module.exports = { passThePillow };

console.log(passThePillow(4, 5));
