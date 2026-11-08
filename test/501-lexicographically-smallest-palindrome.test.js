const { makeSmallestPalindrome } = require("../src/501-lexicographically-smallest-palindrome.js");

describe("Lexicographically Smallest Palindrome", () => {
    const tests = [
        { args: ["egcfe"], res: "efcfe" },
        { args: ["abcd"], res: "abba" },
        { args: ["seven"], res: "neven" }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(makeSmallestPalindrome(...args)).toStrictEqual(res);
        });
    }
});
