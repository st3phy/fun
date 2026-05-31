const { NumArray } = require("../src/62-range-sum-query.js");

describe("Range Sum Query Immutable", () => {
    const tests = [
        { args: [], res: false },
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(NumArray(...args)).toStrictEqual(res);
        });
    }
});
