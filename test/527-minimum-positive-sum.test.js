const { minimumSumSubarray } = require("../src/527-minimum-positive-sum.js");

describe("Minimum Positive Sum Subarray", () => {
    const tests = [
        { args: [[3, -2, 1, 4], 2, 3], res: 1 },
        { args: [[-2, 2, -3, 1], 2, 3], res: -1 },
        { args: [[1, 2, 3, 4], 2, 4], res: 3 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(minimumSumSubarray(...args)).toStrictEqual(res);
        });
    }
});
