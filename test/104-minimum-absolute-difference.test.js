const { getMinimumDifference } = require("../src/104-minimum-absolute-difference.js");

describe("Minimum Absolute Difference In BST", () => {
    const tests = [
        { args: [], res: false },
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(getMinimumDifference(...args)).toStrictEqual(res);
        });
    }
});
