const { twoSum } = require("../src/1-two-sum.js");

describe("Two Sum", () => {
    const tests = [
        { args: [[2, 7, 11, 15], 9], res: [0, 1] },
        { args: [[3, 2, 4], 6], res: [1, 2] },
        { args: [[3, 3], 6], res: [0, 1] },
        { args: [[1, 3, 4, 2], 6], res: [2, 3] }
    ];

    for (const { args, res } of tests) {
        test(`\n\t input = ${JSON.stringify(args[0])}  \n\t sum = ${JSON.stringify(
            args[1]
        )} \n\t res = ${JSON.stringify(res)}`, () => {
            expect(twoSum(...args)).toStrictEqual(res);
        });
    }
});
