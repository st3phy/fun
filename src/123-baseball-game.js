/**
 * @param {string[]} operations
 * @return {number}
 */
const calPoints = operations => {
    const record = [];

    for (let i = 0; i < operations.length; i++) {
        const recordSize = record.length - 1;

        switch (operations[i]) {
            case "D":
                record.push(record[recordSize] * 2);
                break;
            case "C":
                record.pop();
                break;
            case "+":
                record.push(record[recordSize] + record[recordSize - 1]);
                break;
            default:
                record.push(operations[i] * 1);
        }
    }

    return record.reduce((acc, num) => acc + num, 0);
};

module.exports = { calPoints };

console.log(calPoints(["5", "2", "C", "D", "+"]));
