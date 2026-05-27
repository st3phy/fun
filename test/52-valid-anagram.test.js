const { isAnagram } = require("../src/52-valid-anagram.js");

describe("Valid Anagram", () => {
    const tests = [
        { args: ["anagram", "nagaram"], res: true },
        { args: ["rat", "car"], res: false }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(isAnagram(...args)).toStrictEqual(res);
        });
    }
});
