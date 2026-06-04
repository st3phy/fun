const { isSubsequence } = require("../src/75-is-subsequence.js");

describe("Is Subsequence", () => {
    const tests = [
        { args: ["abc", "ahbgdc"], res: true },
        { args: ["axc", "ahbgdc"], res: false },
        { args: ["abcc", "ahbgdcc"], res: true },
        { args: ["", "ahbgdc"], res: true },
        { args: ["ab", "baab"], res: true },
        { args: ["leeeeetcode", "leeeeeetcode"], res: true }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(isSubsequence(...args)).toStrictEqual(res);
        });
    }
});
