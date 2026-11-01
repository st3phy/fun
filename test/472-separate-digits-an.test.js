const { separateDigits } = require("../src/472-separate-digits-an.js");

describe("Separate The Digits In An Array", () => {
    const tests = [
        { args: [], res: false },
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(separateDigits(...args)).toStrictEqual(res);
        });
    }
});
