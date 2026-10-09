const { countConsistentStrings } = require("../src/297-count-number-consistent.js");

describe("Count The Number Of Consistent Strings", () => {
    const tests = [
        { args: ["ab", ["ad", "bd", "aaab", "baa", "badab"]], res: 2 },
        { args: ["abc", ["a", "b", "c", "ab", "ac", "bc", "abc"]], res: 7 },
        { args: ["cad", ["cc", "acd", "b", "ba", "bac", "bad", "ac", "d"]], res: 4 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(countConsistentStrings(...args)).toStrictEqual(res);
        });
    }
});
