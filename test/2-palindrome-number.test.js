const { isPalindrome } = require("../src/2-palindrome-number.js");

describe("Palindrome Number", () => {
    const tests = [
        { args: 121, res: true },
        { args: -121, res: false },
        { args: 0, res: true },
        { args: 10, res: false },
        { args: 10050001, res: false },
        { args: 10055001, res: true }
    ];

    for (const { args, res } of tests) {
        test(`${args}: ${res}`, () => {
            expect(isPalindrome(args)).toStrictEqual(res);
        });
    }
});
