const { checkAlmostEquivalent } = require("../src/379-check-whether-two.js");

describe("Check Whether Two Strings Are Almost Equivalent", () => {
    const tests = [
        { args: ["aaaa", "bccb"], res: false },
        { args: ["abcdeef", "abaaacc"], res: true },
        { args: ["cccddabba", "babababab"], res: true }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(checkAlmostEquivalent(...args)).toStrictEqual(res);
        });
    }
});
