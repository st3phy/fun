const { findMaxK } = require("../src/455-largest-positive-integer.js");

describe("Largest Positive Integer That Exists With Its Negative", () => {
    const tests = [
        { args: [], res: false },
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(findMaxK(...args)).toStrictEqual(res);
        });
    }
});
