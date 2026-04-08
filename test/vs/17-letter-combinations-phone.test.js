const { letterCombinations } = require("../src/17-letter-combinations-phone.js");

describe("Letter Combinations Of A Phone Number", () => {
    const tests = [
        { digits: "23", res: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"] },
        { digits: "2", res: ["a", "b", "c"] }
    ];

    for (const { digits, res } of tests) {
        test(`"${digits}": ${res}`, () => {
            expect(letterCombinations(digits)).toStrictEqual(res);
        });
    }
});
