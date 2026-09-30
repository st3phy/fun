const { canMakeArithmeticProgression } = require("../src/262-can-make-arithmetic.js");

describe("Can Make Arithmetic Progression From Sequence", () => {
    const tests = [
        { args: [[3, 5, 1]], res: true },
        { args: [[1, 2, 4]], res: false }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(canMakeArithmeticProgression(...args)).toStrictEqual(res);
        });
    }
});
