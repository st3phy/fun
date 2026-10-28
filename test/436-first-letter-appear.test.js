const { repeatedCharacter } = require("../src/436-first-letter-appear.js");

describe("First Letter To Appear Twice", () => {
    const tests = [
        { args: ["abccbaacz"], res: "c" },
        { args: ["abcdd"], res: "d" }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(repeatedCharacter(...args)).toStrictEqual(res);
        });
    }
});
