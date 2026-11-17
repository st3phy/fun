const { maximumNumberOfStringPairs } = require("../src/534-find-maximum-number.js");

describe("Find Maximum Number Of String Pairs", () => {
    const tests = [
        { args: [["cd", "ac", "dc", "ca", "zz"]], res: 2 },
        { args: [["ab", "ba", "cc"]], res: 1 },
        { args: [["aa", "ab"]], res: 0 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(maximumNumberOfStringPairs(...args)).toStrictEqual(res);
        });
    }
});
