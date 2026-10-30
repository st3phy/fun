const { answerQueries } = require("../src/449-longest-subsequence-limited.js");

describe("Longest Subsequence With Limited Sum", () => {
    const tests = [
        {
            args: [
                [4, 5, 2, 1],
                [3, 10, 21]
            ],
            res: [2, 3, 4]
        },
        { args: [[2, 3, 4, 5], [1]], res: [0] }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(answerQueries(...args)).toStrictEqual(res);
        });
    }
});
