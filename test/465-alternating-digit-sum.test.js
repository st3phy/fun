const { alternateDigitSum } = require("../src/465-alternating-digit-sum.js");

describe("Alternating Digit Sum", () => {
    const tests = [
        { args: [], res: false },
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(alternateDigitSum(...args)).toStrictEqual(res);
        });
    }
});
