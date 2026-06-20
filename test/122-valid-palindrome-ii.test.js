const { validPalindrome } = require("../src/122-valid-palindrome-ii.js");

describe("Valid Palindrome II", () => {
    const tests = [
        { args: ["aba"], res: true },
        { args: ["abca"], res: true },
        { args: ["abc"], res: false },
        { args: ["aadcaa"], res: true },
        { args: ["aadxcaa"], res: false },
        { args: ["deeee"], res: true },
        { args: ["eceec"], res: true },
        { args: ["zryxeededexyz"], res: false }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(validPalindrome(...args)).toStrictEqual(res);
        });
    }
});
