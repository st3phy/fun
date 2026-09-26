const { minSubsequence } = require("../src/243-minimum-subsequence-non.js");

describe("Minimum Subsequence In Non Increasing Order", () => {
    const tests = [
        { args: [[4, 3, 10, 9, 8]], res: [10, 9] },
        { args: [[4, 4, 7, 6, 7]], res: [7, 7, 6] }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(minSubsequence(...args)).toStrictEqual(res);
        });
    }
});
