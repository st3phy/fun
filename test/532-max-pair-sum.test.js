const { maxSum } = require("../src/532-max-pair-sum.js");

describe("Max Pair Sum In An Array", () => {
    const tests = [
        { args: [[112, 131, 411]], res: -1 },
        { args: [[2536, 1613, 3366, 162]], res: 5902 },
        { args: [[51, 71, 17, 24, 42]], res: 88 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(maxSum(...args)).toStrictEqual(res);
        });
    }
});
