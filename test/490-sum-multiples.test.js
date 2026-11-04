const { sumOfMultiples } = require("../src/490-sum-multiples.js");

describe("Sum Multiples", () => {
    const tests = [
        { args: [7], res: 21 },
        { args: [10], res: 40 },
        { args: [9], res: 30 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(sumOfMultiples(...args)).toStrictEqual(res);
        });
    }
});
