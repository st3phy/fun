const { findMaxAverage } = require("../src/117-maximum-average-subarray.js");

describe("Maximum Average Subarray I", () => {
    const tests = [
        { args: [[1, 12, -5, -6, 50, 3], 4], res: 12.75 },
        { args: [[5], 1], res: 5 },
        { args: [[0, 4, 0, 3, 2], 1], res: 4 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(findMaxAverage(...args)).toStrictEqual(res);
        });
    }
});
