const { isPowerOfFour } = require("../src/65-power-four.js");

describe("Power Of Four", () => {
    const tests = [
        { args: [16], res: true },
        { args: [5], res: false },
        { args: [1], res: true }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(isPowerOfFour(...args)).toStrictEqual(res);
        });
    }
});
