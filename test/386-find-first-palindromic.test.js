const { firstPalindrome } = require("../src/386-find-first-palindromic.js");

describe("Find First Palindromic String In The Array", () => {
    const tests = [
        { args: [], res: false },
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(firstPalindrome(...args)).toStrictEqual(res);
        });
    }
});
