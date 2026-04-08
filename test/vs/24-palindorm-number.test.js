const { isPalindrome } = require("../../src/Vs/Vs/24-palindorm-number.js");

describe("Palindorm Number", () => {
    const tests = [
        { args: 121, res: true },
        { args: -121, res: false },
        { args: 10, res: false }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(isPalindrome(args)).toStrictEqual(res);
        });
    }
});
