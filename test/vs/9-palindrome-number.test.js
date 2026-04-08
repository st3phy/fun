const { isPalindrome } = require("../src/9-palindrome-number.js");

describe("Palindrome Number", () => {
    const tests = [
        { arg: 121, res: true },
        { arg: -121, res: false },
        { arg: 10, res: false }
    ];

    for (const { arg, res } of tests) {
        test(`${arg}: ${res}`, () => {
            expect(isPalindrome(arg)).toStrictEqual(res);
        });
    }
});
