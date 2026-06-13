const { findLUSlength } = require("../src/103-longest-uncommon-subsequence.js");

describe("Longest Uncommon Subsequence I", () => {
    const tests = [
        { args: ["aba", "cdc"], res: 3 },
        { args: ["aaa", "bbb"], res: 3 },
        { args: ["aaa", "aaa"], res: -1 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(findLUSlength(...args)).toStrictEqual(res);
        });
    }
});
