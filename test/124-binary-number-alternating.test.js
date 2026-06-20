const { hasAlternatingBits } = require("../src/124-binary-number-alternating.js");

describe("Binary Number With Alternating Bits", () => {
    const tests = [
        { args: [1], res: true },
        { args: [5], res: true },
        { args: [7], res: false },
        { args: [11], res: false }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(hasAlternatingBits(...args)).toStrictEqual(res);
        });
    }
});
