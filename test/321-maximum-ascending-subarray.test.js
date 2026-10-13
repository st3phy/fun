const { maxAscendingSum } = require("../src/321-maximum-ascending-subarray.js");

describe("Maximum Ascending Subarray Sum", () => {
    const tests = [
        { args: [[10, 20, 30, 5, 10, 50]], res: 65 },
        { args: [[10, 20, 30, 40, 50]], res: 150 },
        { args: [[12, 17, 15, 13, 10, 11, 12]], res: 33 },
        { args: [[100, 10, 1]], res: 100 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(maxAscendingSum(...args)).toStrictEqual(res);
        });
    }
});
