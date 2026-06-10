const { findComplement } = require("../src/91-number-complement.js");

describe("Number Complement", () => {
    const tests = [
        { args: [5], res: 2 },
        { args: [1], res: 0 },
        { args: [2], res: 1 },
        { args: [2147483647], res: 0 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(findComplement(...args)).toStrictEqual(res);
        });
    }
});
