const { findTheDistanceValue } = require("../src/239-find-distance-value.js");

describe("Find The Distance Value Between Two Arrays", () => {
    const tests = [
        { args: [[4, 5, 8], [10, 9, 1, 8], 2], res: 2 },
        { args: [[1, 4, 2, 3], [-4, -3, 6, 10, 20, 30], 3], res: 2 },
        { args: [[2, 1, 100, 3], [-5, -2, 10, -3, 7], 6], res: 1 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(findTheDistanceValue(...args)).toStrictEqual(res);
        });
    }
});
