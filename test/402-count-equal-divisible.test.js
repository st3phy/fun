const { countPairs } = require("../src/402-count-equal-divisible.js");

describe("Count Equal And Divisible Pairs In An Array", () => {
    const tests = [
        { args: [[3, 1, 2, 2, 2, 1, 3], 2], res: 4 },
        { args: [[1, 2, 3, 4], 1], res: 0 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(countPairs(...args)).toStrictEqual(res);
        });
    }
});
