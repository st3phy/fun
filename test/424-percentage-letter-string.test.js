const { percentageLetter } = require("../src/424-percentage-letter-string.js");

describe("Percentage Of Letter In String", () => {
    const tests = [
        { args: ["foobar", "o"], res: 33 },
        { args: ["jjjj", "k"], res: 0 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(percentageLetter(...args)).toStrictEqual(res);
        });
    }
});
