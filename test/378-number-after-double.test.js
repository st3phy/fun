const { isSameAfterReversals } = require("../src/378-number-after-double.js");

describe("A Number After A Double Reversal", () => {
    const tests = [
        { args: [526], res: true },
        { args: [1800], res: false },
        { args: [0], res: true }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(isSameAfterReversals(...args)).toStrictEqual(res);
        });
    }
});
