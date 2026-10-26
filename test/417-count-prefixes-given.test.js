const { countPrefixes } = require("../src/417-count-prefixes-given.js");

describe("Count Prefixes Of A Given String", () => {
    const tests = [
        { args: [["a", "b", "c", "ab", "bc", "abc"], "abc"], res: 3 },
        { args: [["a", "a"], "aa"], res: 2 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(countPrefixes(...args)).toStrictEqual(res);
        });
    }
});
