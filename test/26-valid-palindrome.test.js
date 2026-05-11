const { isPalindrome } = require("../src/26-valid-palindrome.js");

describe("Valid Palindrome", () => {
    const tests = [
        { args: ["A man, a plan, a canal: Panama"], res: true },
        { args: ["race a car"], res: false },
        { args: [" "], res: true },
        { args: ["0P"], res: false }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(isPalindrome(...args)).toStrictEqual(res);
        });
    }
});
