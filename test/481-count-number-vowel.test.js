const { vowelStrings } = require("../src/481-count-number-vowel.js");

describe("Count The Number Of Vowel Strings In Range", () => {
    const tests = [
        { args: [["are", "amy", "u"], 0, 2], res: 2 },
        { args: [["hey", "aeo", "mu", "ooo", "artro"], 1, 4], res: 3 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(vowelStrings(...args)).toStrictEqual(res);
        });
    }
});
