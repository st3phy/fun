const { longestCommonPrefix } = require("../src/4-longest-common-prefix.js");

describe("Longest Common Prefix", () => {
    const tests = [
        { args: ["flower", "flow", "flight", "fast"], res: "f" },
        { args: ["dog", "racecar", "car"], res: "" },
        { args: [], res: "" },
        { args: ["cir", "car"], res: "c" },
        { args: ["ab", "a"], res: "a" }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(longestCommonPrefix(args)).toStrictEqual(res);
        });
    }
});
