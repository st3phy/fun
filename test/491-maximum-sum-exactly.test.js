const { maximizeSum } = require("../src/491-maximum-sum-exactly.js");

describe("Maximum Sum With Exactly K Elements", () => {
    const tests = [
        { args: [[1, 2, 3, 4, 5], 3], res: 18 },
        { args: [[5, 5, 5], 2], res: 11 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(maximizeSum(...args)).toStrictEqual(res);
        });
    }
});
