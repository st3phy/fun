const { minimumOperations } = require("../src/434-make-array-zero.js");

describe("Make Array Zero By Subtracting Equal Amounts", () => {
    const tests = [
        { args: [], res: false },
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(minimumOperations(...args)).toStrictEqual(res);
        });
    }
});
