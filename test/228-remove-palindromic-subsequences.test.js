const { removePalindromeSub } = require("../src/228-remove-palindromic-subsequences.js");

describe("Remove Palindromic Subsequences", () => {
    const tests = [
        { args: ["ababa"], res: 1 },
        { args: ["abb"], res: 2 },
        { args: ["baabb"], res: 2 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(removePalindromeSub(...args)).toStrictEqual(res);
        });
    }
});
