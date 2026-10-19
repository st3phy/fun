const { countKDifference } = require("../src/365-count-number-pairs.js");

describe("Count Number Of Pairs With Absolute Difference K", () => {
    const tests = [
        { args: [[1, 2, 2, 1], 1], res: 4 },
        { args: [[1, 3], 3], res: 0 },
        { args: [[3, 2, 1, 5, 4], 2], res: 3 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(countKDifference(...args)).toStrictEqual(res);
        });
    }
});
