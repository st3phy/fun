const { sumOfLeftLeaves } = require("../src/78-sum-left-leaves.js");

describe("Sum Of Left Leaves", () => {
    const tests = [
        { args: [], res: false },
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(sumOfLeftLeaves(...args)).toStrictEqual(res);
        });
    }
});
