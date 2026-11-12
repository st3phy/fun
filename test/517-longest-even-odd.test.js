const { longestAlternatingSubarray } = require("../src/517-longest-even-odd.js");

describe("Longest Even Odd Subarray With Threshold", () => {
    const tests = [
        { args: [[3, 2, 5, 4], 5], res: 3 },
        { args: [[1, 2], 2], res: 1 },
        { args: [[2, 3, 4, 5], 4], res: 3 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(longestAlternatingSubarray(...args)).toStrictEqual(res);
        });
    }
});
