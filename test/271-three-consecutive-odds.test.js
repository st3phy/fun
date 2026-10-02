const { threeConsecutiveOdds } = require("../src/271-three-consecutive-odds.js");

describe("Three Consecutive Odds", () => {
    const tests = [
        { args: [[2, 6, 4, 1]], res: false },
        { args: [[1, 2, 34, 3, 4, 5, 7, 23, 12]], res: true }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(threeConsecutiveOdds(...args)).toStrictEqual(res);
        });
    }
});
