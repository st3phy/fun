const { maxSubsequence } = require("../src/384-find-subsequence-length.js");

describe("Find Subsequence Of Length K With The Largest Sum", () => {
    const tests = [
        { args: [[2, 1, 3, 3], 2], res: [3, 3] },
        { args: [[-1, -2, 3, 4], 3], res: [-1, 3, 4] },
        { args: [[3, 4, 3, 3], 2], res: [3, 4] }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(maxSubsequence(...args)).toStrictEqual(res);
        });
    }
});
