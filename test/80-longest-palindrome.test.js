const { longestPalindrome } = require("../src/80-longest-palindrome.js");

describe("Longest Palindrome", () => {
    const tests = [
        { args: [], res: false },
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(longestPalindrome(...args)).toStrictEqual(res);
        });
    }
});
