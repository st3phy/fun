const { similarPairs } = require("../src/456-count-pairs-similar.js");

describe("Count Pairs Of Similar Strings", () => {
    const tests = [
        { args: [["aba", "aabb", "abcd", "bac", "aabc"]], res: 2 },
        { args: [["aabb", "ab", "ba"]], res: 3 },
        { args: [["nba", "cba", "dba"]], res: 0 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(similarPairs(...args)).toStrictEqual(res);
        });
    }
});
