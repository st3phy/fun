const { twoSum } = require("../src/1-two-sum.js");

describe("Two sum", () => {
    const tests = [
        {
            args: [[2, 7, 11, 15], 9],
            res: [0, 1]
        },
        {
            args: [[3, 2, 4], 6],
            res: [1, 2]
        },
        {
            args: [[3, 3], 6],
            res: [0, 1]
        }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args[0])} sum ${args[1]}: ${JSON.stringify(res)}`, () => {
            expect(twoSum(...args)).toStrictEqual(res);
        });
    }
});
