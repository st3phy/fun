/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = numRows => {
    const stack = [[1]];

    for (let i = 1; i < numRows; i++) {
        // The current row's first and last elements are the same as the previous row
        let row = [];
        row[0] = 1;
        row[i] = 1;

        // The other elements are calculated as the sum of the two numbers directly above the row
        for (let j = 1; j < i; j++) {
            row[j] = stack[i - 1][j - 1] + stack[i - 1][j];
        }

        stack.push(row);
    }

    return stack;
};

module.exports = { generate };

console.log(generate(5));
