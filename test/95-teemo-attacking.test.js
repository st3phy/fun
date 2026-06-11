const { findPoisonedDuration } = require("../src/95-teemo-attacking.js");

describe("Teemo Attacking", () => {
    const tests = [
        { args: [[1, 4], 2], res: 4 },
        { args: [[1, 2], 2], res: 3 },
        { args: [[1, 2, 3, 4, 5], 5], res: 9 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(findPoisonedDuration(...args)).toStrictEqual(res);
        });
    }
});
