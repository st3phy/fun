const { repeatedSubstringPattern } = require("../src/88-repeated-substring-pattern.js");

describe("Repeated Substring Pattern", () => {
    const tests = [
        { args: ["abab"], res: true },
        { args: ["aba"], res: false },
        { args: ["abcabcabcabc"], res: true }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(repeatedSubstringPattern(...args)).toStrictEqual(res);
        });
    }
});
