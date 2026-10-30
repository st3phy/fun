const { averageValue } = require("../src/452-average-value-even.js");

describe("Average Value Of Even Numbers That Are Divisible By Three", () => {
    const tests = [
        { args: [[1, 3, 6, 10, 12, 15]], res: 9 },
        { args: [[1, 2, 4, 7, 10]], res: 0 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(averageValue(...args)).toStrictEqual(res);
        });
    }
});
