const { isFascinating } = require("../src/513-check-number-is.js");

describe("Check If The Number Is Fascinating", () => {
    const tests = [
        { args: [192], res: true },
        { args: [100], res: falses }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(isFascinating(...args)).toStrictEqual(res);
        });
    }
});
