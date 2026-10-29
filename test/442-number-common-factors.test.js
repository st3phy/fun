const { commonFactors } = require("../src/442-number-common-factors.js");

describe("Number Of Common Factors", () => {
    const tests = [
        { args: [12, 6], res: 4 },
        { args: [25, 30], res: 2 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(commonFactors(...args)).toStrictEqual(res);
        });
    }
});
