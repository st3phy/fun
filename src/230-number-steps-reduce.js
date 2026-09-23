/**
 * @param {number} num
 * @returns {number}
 */
const numberOfSteps = num => {
    let count = 0;

    while (num > 0) {
        if (num & 1) {
            num--;
        } else {
            num /= 2;
        }
        count++;
    }

    return count;
};

module.exports = { numberOfSteps };

console.log(numberOfSteps(14));
