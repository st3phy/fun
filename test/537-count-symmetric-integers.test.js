const { countSymmetricIntegers } = require("../src/537-count-symmetric-integers.js");

describe("Count Symmetric Integers", () => {
    const tests = [
        { args: [1, 100], res: 9 },
        { args: [1200, 1230], res: 4 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(countSymmetricIntegers(...args)).toStrictEqual(res);
        });
    }
});
