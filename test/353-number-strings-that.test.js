const { numOfStrings } = require("../src/353-number-strings-that.js");

describe("Number Of Strings That Appear As Substrings In Word", () => {
    const tests = [
        { args: [["a", "abc", "bc", "d"], "abc"], res: 3 },
        { args: [["a", "b", "c"], "aaaaabbbbb"], res: 2 },
        { args: [["a", "a", "a"], "ab"], res: 3 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(numOfStrings(...args)).toStrictEqual(res);
        });
    }
});
