const { findTheLongestBalancedSubstring } = require("../src/486-find-longest-balanced.js");

describe("Find The Longest Balanced Substring Of A Binary String", () => {
    const tests = [
        { args: ["01000111"], res: 6 },
        { args: ["00111"], res: 4 },
        { args: ["111"], res: 0 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(findTheLongestBalancedSubstring(...args)).toStrictEqual(res);
        });
    }
});
