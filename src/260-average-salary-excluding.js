/**
 * @param {number[]} salary
 * @returns {number}
 */
const average = salary => {
    let min = Infinity;
    let max = 0;
    let sum = 0;
    const len = salary.length;

    for (let i = 0; i < len; i++) {
        if (salary[i] < min) min = salary[i];
        if (salary[i] > max) max = salary[i];
        sum += salary[i];
    }

    return (sum - min - max) / (len - 2);
};

module.exports = { average };

console.log(average([4000, 3000, 1000, 2000]));
